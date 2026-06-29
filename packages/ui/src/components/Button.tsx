import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children ?? "Button UI"}
    </button>
  );
}

export default Button;
