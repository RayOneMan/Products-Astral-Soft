import { useTypeFilter } from "./hooks/useTypeFilter";
import { useSearch } from "./hooks/useSearch";

export const useLogic = (typeId: string | null, searchValue?: string) => {
  const { products: fetchedProducts, loading } = useTypeFilter(typeId);
  const filteredProducts = useSearch(fetchedProducts, searchValue);

  return { products: filteredProducts, loadingProducts: loading };
};
