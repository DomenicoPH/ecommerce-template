import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({
  required,
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={[
        "text-sm font-medium text-gray-700",
        required ? "after:text-red-500 after:content-['*'] after:ml-0.5" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </label>
  );
}
