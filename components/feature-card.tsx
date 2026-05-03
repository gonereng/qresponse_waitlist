import { cn } from "@/lib/utils";

interface FeatureCardProps {
  badge: string;
  badgeColor: "primary" | "secondary" | "tertiary";
  title: string;
  description: string;
  illustration: React.ReactNode;
  reverse?: boolean;
  bgColor: string;
}

const badgeColorMap = {
  primary:
    "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-fixed-dim",
  secondary:
    "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-fixed-dim",
  tertiary:
    "bg-accent-urgency/10 text-accent-urgency dark:bg-accent-urgency/20 dark:text-accent-urgency",
};

export function FeatureCard({
  badge,
  badgeColor,
  title,
  description,
  illustration,
  reverse,
  bgColor,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-12 md:gap-24",
        reverse && "md:flex-row-reverse",
      )}
    >
      <div className="w-full md:w-1/2 relative">
        <div className={cn("absolute -inset-4 rounded-[2.5rem]", bgColor)} />
        <div className="relative bg-white dark:bg-surface-container p-8 rounded-[2rem] border border-border-subtle dark:border-surface-container-highest shadow-xl">
          {illustration}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full font-bold text-xs mb-6 uppercase tracking-wider",
            badgeColorMap[badgeColor],
          )}
        >
          {badge}
        </div>
        <h2 className="font-sans text-2xl text-headline-section text-text-main dark:text-white mb-6">
          {title}
        </h2>
        <p className="font-sans text-subheadline text-text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
