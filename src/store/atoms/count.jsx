import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const incrementSelector = selector({
  key: "incrementSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count + 1;
  },
});

export const decrementSelector = selector({
  key: "decrementSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count - 1;
  },
});
