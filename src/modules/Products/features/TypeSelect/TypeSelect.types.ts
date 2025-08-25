import type { ProductType } from "src/shared/types/types";

export interface ITypeSelectProps {
  value: string | null;
  onChange: (value: string | null) => void;
  types: ProductType[];
  loading: boolean;
}
