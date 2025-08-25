import { useEffect, useState } from "react";
import { productTypesSources } from "src/data/sources/productTypesSources";
import type { ProductType } from "src/shared/types/types";

export const useProductTypes = () => {
  const [types, setTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    productTypesSources()
      .then(setTypes)
      .finally(() => setLoading(false));
  }, []);

  return { types, loading };
};
