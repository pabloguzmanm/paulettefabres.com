interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12">
      <div className="container mx-auto">
        <p className="text-primary font-mono text-xs tracking-widest mb-6">
          {label}
        </p>
        <h1 className="text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
