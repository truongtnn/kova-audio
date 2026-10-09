import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  border?: boolean;
  bg?: "base" | "panel" | "panel2";
  py?: "sm" | "md" | "lg";
};

const bgClass: Record<NonNullable<SectionProps["bg"]>, string> = {
  base: "",
  panel: "bg-panel",
  panel2: "bg-panel2",
};

const pyClass: Record<NonNullable<SectionProps["py"]>, string> = {
  sm: "py-10",
  md: "py-16",
  lg: "py-20",
};

export default function Section({
  id,
  children,
  className = "",
  border = false,
  bg = "base",
  py = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${border ? "border-t border-line/70" : ""} ${bgClass[bg]}`}
    >
      <div className={`mx-auto max-w-6xl px-6 ${pyClass[py]} ${className}`}>{children}</div>
    </section>
  );
}
