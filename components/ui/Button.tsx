import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "link";

const base = "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-transform";
const variants: Record<Variant, string> = {
  primary: "bg-amber text-base px-6 py-3 hover:translate-y-[-1px]",
  outline: "border border-amber/60 text-amber px-5 py-2.5 hover:bg-amber hover:text-base",
  ghost: "text-cream underline decoration-line underline-offset-4",
  link: "text-amber underline decoration-amberDim underline-offset-4",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function LinkButton({ href, variant = "primary", className = "", children }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({ variant = "primary", className = "", children, ...rest }: NativeButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
