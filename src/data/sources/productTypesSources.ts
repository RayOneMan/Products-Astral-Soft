import { productTypes } from "src/shared/constants/const";
import type { ProductType } from "src/shared/types/types";

export const productTypesSources = (): Promise<ProductType[]> =>
  new Promise((resolve) => setTimeout(() => resolve(productTypes), 500));
