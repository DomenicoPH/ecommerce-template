import React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "none" | "xs" | "sm" | "md" | "lg";
  as?: "div" | "ul" | "ol";
}

const gapClasses: Record<NonNullable<GridProps["gap"]>, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};

const colsClasses: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12"
};

const responsiveClasses: Record<string, string> = {
  sm1: "sm:grid-cols-1",
  sm2: "sm:grid-cols-2",
  sm3: "sm:grid-cols-3",
  sm4: "sm:grid-cols-4",
  sm5: "sm:grid-cols-5",
  sm6: "sm:grid-cols-6",
  sm12: "sm:grid-cols-12",
  md1: "md:grid-cols-1",
  md2: "md:grid-cols-2",
  md3: "md:grid-cols-3",
  md4: "md:grid-cols-4",
  md5: "md:grid-cols-5",
  md6: "md:grid-cols-6",
  md12: "md:grid-cols-12",
  lg1: "lg:grid-cols-1",
  lg2: "lg:grid-cols-2",
  lg3: "lg:grid-cols-3",
  lg4: "lg:grid-cols-4",
  lg5: "lg:grid-cols-5",
  lg6: "lg:grid-cols-6",
  lg12: "lg:grid-cols-12",
  xl1: "xl:grid-cols-1",
  xl2: "xl:grid-cols-2",
  xl3: "xl:grid-cols-3",
  xl4: "xl:grid-cols-4",
  xl5: "xl:grid-cols-5",
  xl6: "xl:grid-cols-6",
  xl12: "xl:grid-cols-12"
};

export function Grid({
  cols = 1,
  responsive,
  gap = "md",
  as = "div",
  className = "",
  children,
  ...props
}: GridProps) {
  const colsClass = colsClasses[cols];
  const responsiveClassesList: string[] = [];

  if (responsive) {
    if (responsive.sm) responsiveClassesList.push(responsiveClasses[`sm${responsive.sm}`]);
    if (responsive.md) responsiveClassesList.push(responsiveClasses[`md${responsive.md}`]);
    if (responsive.lg) responsiveClassesList.push(responsiveClasses[`lg${responsive.lg}`]);
    if (responsive.xl) responsiveClassesList.push(responsiveClasses[`xl${responsive.xl}`]);
  }

  const Element = as;

  return (
    <Element
      className={`grid ${gapClasses[gap]} ${colsClass} ${responsiveClassesList.join(" ")} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
