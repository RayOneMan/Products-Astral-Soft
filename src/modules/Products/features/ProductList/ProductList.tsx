import { ProductCard } from "../ProductCard/ProductCard";
import { useLogic } from "./useLogic/useLogic";
import { useDebounce } from "src/shared/hooks/useDebounce";
import type { IProductListProps } from "./ProductList.types";
import "./ProductList.css";

export const ProductList: React.FC<IProductListProps> = ({ types, typeId, search }) => {
  const debouncedSearch = useDebounce(search);
  const { products, loadingProducts } = useLogic(typeId, debouncedSearch);

  if (loadingProducts) {
    return <div>Загрузка продуктов...</div>;
  }

  if (products.length === 0) {
    return <div>Ничего не найдено</div>;
  }

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} types={types} />
      ))}
    </div>
  );
};
