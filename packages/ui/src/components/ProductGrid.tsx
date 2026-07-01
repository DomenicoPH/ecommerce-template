import ProductCard from "./ProductCard";
import { Grid, GridProps } from "./Grid";

export interface Product {
  id?: string | number;
  title: string;
  price: number;
  image?: string;
}

export interface ProductGridProps {
  products: Product[];
  cols?: GridProps["cols"];
  responsive?: GridProps["responsive"];
  gap?: GridProps["gap"];
  emptyMessage?: string;
  className?: string;
}

export default function ProductGrid({
  products,
  cols = 3,
  responsive,
  gap = "md",
  emptyMessage = "No hay productos para mostrar.",
  className = ""
}: ProductGridProps) {
  if (!products.length) {
    return (
      <p className={`text-gray-500 ${className}`}>{emptyMessage}</p>
    );
  }

  return (
    <Grid cols={cols} responsive={responsive} gap={gap} className={className}>
      {products.map((product) => (
        <div key={product.id ?? product.title}>
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </Grid>
  );
}
