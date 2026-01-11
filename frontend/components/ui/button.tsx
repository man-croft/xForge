import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = "primary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:-translate-y-0.5 hover:shadow-lg",
  ghost:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
