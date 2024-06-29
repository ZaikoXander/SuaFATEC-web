import { atom } from 'jotai'

interface Admin {
  id: number
  name: string
}

const adminAtom = atom<Admin | undefined>(undefined)

export { adminAtom }
