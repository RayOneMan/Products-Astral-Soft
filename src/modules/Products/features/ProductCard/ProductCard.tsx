import type { IProductCardProps } from "./ProductCard.types";
import "./ProductCard.css";

export const ProductCard: React.FC<IProductCardProps> = ({ product, types }) => {
  return (
    <div className="product-card">
      <strong>{product.name}</strong>
      <div className="product-card__type">
        {types.find(({ id }) => id === product.typeId)?.name ?? "—"}
      </div>
    </div>
  );
};
