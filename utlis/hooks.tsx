import {useHookstate} from '@hookstate/core';

export const setVideoCallHook = () => useHookstate(false);
export const channel = () => useHookstate('');
