import { atom } from 'jotai'

const likeFilterAtom = atom(false, (get, set, update: boolean) => {
  if (get(moreRecentFilterAtom)) {
    set(moreRecentFilterAtom, false)
  }

  set(likeFilterAtom, update)
})

const moreRecentFilterAtom = atom(false, (get, set, update: boolean) => {
  if (get(likeFilterAtom)) {
    set(likeFilterAtom, false)
  }

  set(moreRecentFilterAtom, update)
})

const descendingOrderFilterAtom = atom(false, (get, set, update: boolean) => {
  if (get(ascendingOrderFilterAtom)) {
    set(ascendingOrderFilterAtom, false)
  }

  set(descendingOrderFilterAtom, update)
})

const ascendingOrderFilterAtom = atom(false, (get, set, update: boolean) => {
  if (get(descendingOrderFilterAtom)) {
    set(descendingOrderFilterAtom, false)
  }

  set(ascendingOrderFilterAtom, update)
})

export {
  likeFilterAtom,
  moreRecentFilterAtom,
  descendingOrderFilterAtom,
  ascendingOrderFilterAtom,
}
