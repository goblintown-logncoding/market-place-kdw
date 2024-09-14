import { create } from 'zustand';
import { produce } from 'immer';

const useProductStore = create((set) => ({
  productObject: {},
  addToObject: (product) =>
    set((state) => ({
      productObject: produce(state.productObject, (draft) => {
        if (draft[product.productNumber]?.count) {
          draft[product.productNumber].count++;
        } else {
          draft[product.productNumber] = {
            ...product,
            count: 1
          };
        }
      })
    }))
}));

export default useProductStore;
