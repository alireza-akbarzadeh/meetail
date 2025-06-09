import { z } from 'zod';
import { createTRPCRouter, baseProcedure, protectedProcedure } from '@/trpc/init';
import { db } from '@/db';
import { agents } from '@/db/schema';
import { agentInsertSchema } from '../agent-schemas';
import { eq } from 'drizzle-orm';

export const agentsRouter = createTRPCRouter({
  // TODO: change `getMany` to use `protectedProcedure`

  getOne: baseProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const [existingAgent] = await db.select().from(agents).where(eq(agents.id, input.id));
    return existingAgent;
  }),
  geMany: baseProcedure.query(async () => {
    return db.select().from(agents);
  }),
  create: protectedProcedure.input(agentInsertSchema).mutation(async ({ input, ctx }) => {
    const [createdAgent] = await db
      .insert(agents)
      .values({ ...input, userId: ctx.auth.user.id })
      .returning();

    return createdAgent;
  }),
});
