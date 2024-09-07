import { create } from 'zustand';

const useProductStore = create((set) => ({
  productList: [],
  add: (productObject) =>
    set((state) => ({
      productList: [...state.productList, productObject]
    }))
}));

export default useProductStore;
