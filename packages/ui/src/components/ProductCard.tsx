import { Price } from "./Price";

interface ProductCardProps {
  title: string;
  price: number;
  image?: string;
  className?: string;
}

export default function ProductCard({ title, price, image, className }: ProductCardProps) {
  return (
    <div className={`border rounded-lg p-4 shadow-sm ${className ?? ""}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <Price value={price} />
    </div>
  );
}
