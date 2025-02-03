import { atom } from "jotai";

export const countAtom = atom<number>(0);
//Readonly atom
export const doubleCountAtom = atom<number>((get) => get(countAtom) * 2);
export const priceAtom = atom<number>(10);
export const messageAtom = atom<string>("Hello, Jotai!");
export const productAtom = atom({
  id: 1,
  name: "Product 1",
});
