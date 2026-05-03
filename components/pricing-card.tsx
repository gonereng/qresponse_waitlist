import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  title,
  subtitle,
  price,
  priceSuffix,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "p-8 rounded-[2rem] flex flex-col",
        highlighted
          ? "border-2 border-primary bg-white dark:bg-surface-container-lowest shadow-2xl shadow-primary/10 scale-105 relative z-10"
          : "border border-border-subtle dark:border-surface-container-highest bg-surface-muted dark:bg-surface-container",
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed px-4 py-1 rounded-full text-xs font-bold tracking-wider">
          MOST POPULAR
        </div>
      )}
      <div className="mb-8">
        <h3 className="font-sans text-xl mb-2">
          {title}
          {priceSuffix && highlighted && (
            <span className="text-primary dark:text-primary-fixed-dim text-sm block md:inline md:ml-1">
              {priceSuffix}
            </span>
          )}
        </h3>
        <p className="text-text-muted text-sm">{subtitle}</p>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-extrabold text-text-main dark:text-white">
          {price}
        </span>
        {priceSuffix && !highlighted && (
          <span className="text-text-muted font-medium text-sm ml-1">
            {priceSuffix}
          </span>
        )}
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature) => (
          <li
            key={feature}
            className={cn(
              "flex items-center gap-3 text-sm",
              highlighted && "font-semibold",
            )}
          >
            <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim text-lg">
              check_circle
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
