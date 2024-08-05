import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

// export const incrementSelector = selector({
//   key: "incrementSelector",
//   get: ({ get }) => {
//     const count = get(countAtom);
//     return count + 1;
//   },
// });

// export const decrementSelector = selector({
//   key: "decrementSelector",
//   get: ({ get }) => {
//     const count = get(countAtom);
//     return count - 1;
//   },
// });

// export const incrementBy100Selector = selector({
//   key: "incrementBy100Selector",
//   get: ({ get }) => {
//     const count = get(countAtom);
//     return count + 100;
//   },
// });

// export const decrementBy100Selector = selector({
//   key: "decrementBy100Selector",
//   get: ({ get }) => {
//     const count = get(countAtom);
//     return count - 100;
//   },
// });
