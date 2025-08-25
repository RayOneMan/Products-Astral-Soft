import { allProducts } from "src/shared/constants/const";
import type { Product } from "src/shared/types/types";

export const productSources = (): Promise<Product[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(allProducts);
    }, 500);
  });
