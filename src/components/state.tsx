// state.tsx

import { atom } from 'jotai';

export const institutionModalState = atom(false);
export const courseIdState = atom<number | null>(null);
