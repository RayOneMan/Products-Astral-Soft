import type { ProductType } from "src/shared/types/types";

export interface IFiltersProps {
  search: string;
  setSearch: (v: string) => void;
  typeId: string | null;
  setTypeId: (v: string | null) => void;
  types: ProductType[];
  loadingTypes: boolean;
}
