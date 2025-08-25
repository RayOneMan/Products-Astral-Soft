import type { Product, ProductType } from "src/shared/types/types";

export interface IProductCardProps {
  product: Product;
  types: ProductType[];
}
