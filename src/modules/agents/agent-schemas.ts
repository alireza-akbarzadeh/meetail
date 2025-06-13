import { z } from 'zod';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, MIN_PAGE_SIZE } from '@/constant';

export const agentInsertSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  instructions: z.string().min(1, { message: 'Instructions are required' }),
});

export const agentInputSchema = z.object({
  page: z.number().default(DEFAULT_PAGE_NUMBER),
  pageSize: z.number().min(MIN_PAGE_SIZE).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE),
  search: z.string().nullish(),
});
