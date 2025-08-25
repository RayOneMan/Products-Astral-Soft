import type { ProductType } from "src/shared/types/types";

export interface IProductListProps {
  types: ProductType[];
  search: string;
  typeId: string | null;
}
