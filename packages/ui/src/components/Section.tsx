import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "main" | "aside" | "header";
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  none: "",
  sm: "py-6",
  md: "py-12",
  lg: "py-24"
};

export function Section({
  as = "section",
  padding = "md",
  className = "",
  children,
  ...props
}: SectionProps) {
  const Element = as;

  return (
    <Element
      className={`${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
