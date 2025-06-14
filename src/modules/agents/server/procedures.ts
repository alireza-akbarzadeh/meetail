import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '@/trpc/init';
import { db } from '@/db';
import { agents } from '@/db/schema';
import { agentInputSchema, agentInsertSchema } from '../agent-schemas';
import { and, eq, getTableColumns, ilike, sql, desc, count } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';

export const agentsRouter = createTRPCRouter({
  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const [existingAgent] = await db
      .select({ ...getTableColumns(agents), meetingCount: sql<number>`5` })
      .from(agents)
      .where(and(eq(agents.id, input.id), eq(agents.userId, ctx.auth.user.id)));
    if (!existingAgent) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Agent not found' });
    }
    return existingAgent;
  }),
  getMany: protectedProcedure.input(agentInputSchema).query(async ({ input, ctx }) => {
    const { search, page, pageSize } = input;
    const data = await db
      .select({ ...getTableColumns(agents), meetingCount: sql<number>`5` })
      .from(agents)
      .where(
        and(
          eq(agents.userId, ctx.auth.user.id),
          search ? ilike(agents.name, `%${search}%`) : undefined,
        ),
      )
      .orderBy(desc(agents.createdAt), desc(agents.id))
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    const [total] = await db
      .select({ count: count() })
      .from(agents)
      .where(
        and(
          eq(agents.userId, ctx.auth.user.id),
          search ? ilike(agents.name, `%${search}%`) : undefined,
        ),
      );
    const totalPages = Math.ceil(total.count / pageSize);

    return { items: data, total: total.count, totalPages };
  }),
  create: protectedProcedure.input(agentInsertSchema).mutation(async ({ input, ctx }) => {
    const [createdAgent] = await db
      .insert(agents)
      .values({ ...input, userId: ctx.auth.user.id })
      .returning();

    return createdAgent;
  }),
});
