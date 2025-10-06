import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const codeAtom = atomWithStorage<string>('code', '');
export const languageAtom = atomWithStorage<string>('language', '');
// Holds the output from running code (not persisted)
export const outputAtom = atom<string>('');