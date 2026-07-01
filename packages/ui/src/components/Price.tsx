import React from "react";

export interface PriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  currency?: string;
  locale?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<PriceProps["size"]>, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl font-semibold",
};

export function Price({
  value,
  currency = "USD",
  locale = "en-US",
  size = "md",
  className = "",
  ...props
}: PriceProps) {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <span
      className={["text-gray-900", sizeClasses[size], className].join(" ")}
      {...props}
    >
      {formatted}
    </span>
  );
}
