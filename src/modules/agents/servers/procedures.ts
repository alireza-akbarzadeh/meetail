import { createTRPCRouter, baseProcedure } from '@/trpc/init';
import { db } from '@/db';
import { agents } from '@/db/schema';

export const agentsRouter = createTRPCRouter({
  geMany: baseProcedure.query(() => {
    return db.select().from(agents);
  }),
});
