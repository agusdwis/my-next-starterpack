import { BaseAction } from '@/interfaces';

export const TypesApps = {
  START_LOADING: 'START_LOADING' as const,
  STOP_LOADING: 'STOP_LOADING' as const,
};

export const appActions = {
  startLoading: (): BaseAction => ({
    type: TypesApps.START_LOADING,
    payload: null,
  }),

  endLoading: (): BaseAction => ({
    type: TypesApps.STOP_LOADING,
    payload: null,
  }),
};
