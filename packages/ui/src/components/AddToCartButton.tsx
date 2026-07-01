import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./Button";
import { type Product } from "./ProductGrid";

export interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  onAdd?: (product: Product, quantity: number) => void;
  disabled?: boolean;
  className?: string;
}

export function AddToCartButton({
  product,
  quantity = 1,
  onAdd,
  disabled = false,
  className = "",
}: AddToCartButtonProps) {
  const [status, setStatus] = useState<"idle" | "adding" | "added">("idle");

  useEffect(() => {
    if (status === "adding" || status === "added") {
      const timeout = setTimeout(() => setStatus("idle"), 1500);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleClick = useCallback(() => {
    setStatus("adding");
    onAdd?.(product, quantity);

    setTimeout(() => {
      setStatus((current) => (current === "adding" ? "added" : current));
    }, 300);
  }, [product, quantity, onAdd]);

  if (status === "added") {
    return (
      <Button variant="secondary" size="sm" disabled className={className}>
        Agregado ✓
      </Button>
    );
  }

  return (
    <Button
      variant="primary"
      size="sm"
      disabled={disabled || status === "adding"}
      onClick={handleClick}
      className={className}
    >
      {status === "adding" ? "Agregando..." : "Agregar al carrito"}
    </Button>
  );
}
