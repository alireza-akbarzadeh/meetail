import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '@/trpc/init';
import { db } from '@/db';
import { meetings } from '@/db/schema';
import { and, eq, getTableColumns, ilike, desc, count } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';
import { meetingInputSchema } from '@/modules/meetings/meeting.schema';

export const meetingRouter = createTRPCRouter({
  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const [existingMeeting] = await db
      .select({ ...getTableColumns(meetings) })
      .from(meetings)
      .where(and(eq(meetings.id, input.id), eq(meetings.userId, ctx.auth.user.id)));
    if (!existingMeeting) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Agent not found' });
    }
    return existingMeeting;
  }),
  getMany: protectedProcedure.input(meetingInputSchema).query(async ({ input, ctx }) => {
    const { search, page, pageSize } = input;
    const data = await db
      .select({ ...getTableColumns(meetings) })
      .from(meetings)
      .where(
        and(
          eq(meetings.userId, ctx.auth.user.id),
          search ? ilike(meetings.name, `%${search}%`) : undefined,
        ),
      )
      .orderBy(desc(meetings.createdAt), desc(meetings.id))
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    const [total] = await db
      .select({ count: count() })
      .from(meetings)
      .where(
        and(
          eq(meetings.userId, ctx.auth.user.id),
          search ? ilike(meetings.name, `%${search}%`) : undefined,
        ),
      );
    const totalPages = Math.ceil(total.count / pageSize);

    return { items: data, total: total.count, totalPages };
  }),
});
