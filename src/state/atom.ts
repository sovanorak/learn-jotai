import { atom } from "jotai";

// atom is a function that create an atom config
//

export const countAtom = atom<number>(0);
export const priceAtom = atom<number>(10);
export const messageAtom = atom<string>("Hello, Jotai!");
export const productAtom = atom({
  id: 1,
  name: "Product 1",
});

// Jotai have three patterns:

// 1. Read-only atom
// 2. Write-only atom
// 3. Read-write atom
