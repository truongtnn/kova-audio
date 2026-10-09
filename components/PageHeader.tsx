type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div>
      <p className="text-sm text-amber">{eyebrow}</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight text-cream">
        {title}
      </h1>
      {description && <p className="mt-4 max-w-lg text-muted">{description}</p>}
    </div>
  );
}
