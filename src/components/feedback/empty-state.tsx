type EmptyStateProps = {
  title: string;
  description: string;
};

export const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="border-border bg-muted/30 rounded-lg border border-dashed p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
  );
};
