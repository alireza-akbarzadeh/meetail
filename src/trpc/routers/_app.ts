import { createTRPCRouter } from '../init';
import { agentsRouter } from '@/modules/agents';
import { meetingRouter } from '@/modules/meetings/server/procedures';

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
