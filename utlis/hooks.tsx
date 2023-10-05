import {useHookstate} from '@hookstate/core';

export const useVideoCallHook = () => useHookstate(false);
export const channel = () => useHookstate<string>('');
