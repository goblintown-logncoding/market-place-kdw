import { create } from 'zustand';

const useProductStore = create((set) => ({
  productObject: {},
  addToObject: (product) =>
    set((state) => ({
      productObject: {
        ...state.productObject,
        [product.productNumber]: {
          ...product,
          count: state.productObject[product.productNumber]?.count
            ? state.productObject[product.productNumber].count + 1
            : 1
        }
      }
    }))
}));

export default useProductStore;
