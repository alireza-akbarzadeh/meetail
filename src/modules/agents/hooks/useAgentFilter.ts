import { useQueryStates, parseAsString, parseAsInteger } from 'nuqs';
import { DEFAULT_PAGE_NUMBER } from '@/constant';

export const useAgentFilter = () => {
  return useQueryStates({
    search: parseAsString.withDefault('').withOptions({ clearOnDefault: true }),
    page: parseAsInteger.withDefault(DEFAULT_PAGE_NUMBER).withOptions({ clearOnDefault: true }),
  });
};
