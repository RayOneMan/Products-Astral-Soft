import type { Product } from "src/shared/types/types";

export const useSearch = (products: Product[], searchValue?: string) => {
  if (!searchValue) {
    return products;
  }

  return products.filter((p) => p.name.toLowerCase().includes(searchValue.toLowerCase()));
};
