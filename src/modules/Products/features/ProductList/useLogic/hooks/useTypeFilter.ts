import { useState, useEffect } from "react";
import { productRepository } from "src/data/repositories/productRepository";
import type { Product } from "src/shared/types/types";

export const useTypeFilter = (typeId: string | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    productRepository(typeId).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [typeId]);

  return { products, loading };
};
