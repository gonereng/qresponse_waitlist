import { FeatureCard } from "./feature-card";

function EditLinksIllustration() {
  return (
    <div className="bg-surface-container dark:bg-surface-container-high rounded-xl p-6 aspect-video flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary dark:bg-primary-fixed-dim rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white dark:text-on-primary-fixed text-sm">
              link
            </span>
          </div>
          <span className="font-bold text-sm">Destination URL</span>
        </div>
        <span className="text-[10px] bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-bold px-2 py-0.5 rounded-full">
          ACTIVE
        </span>
      </div>
      <div className="space-y-3">
        <div className="h-10 bg-surface-background dark:bg-surface-container-highest border border-primary/30 rounded-lg flex items-center px-4 text-xs font-mono text-primary dark:text-primary-fixed-dim">
          https://your-old-link.com/menu
        </div>
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-text-muted">
            keyboard_double_arrow_down
          </span>
        </div>
        <div className="h-10 bg-surface-background dark:bg-surface-container-highest border-2 border-secondary rounded-lg flex items-center px-4 text-xs font-mono text-secondary dark:text-secondary-fixed-dim relative">
          https://new-awesome-destination.com
          <div className="absolute -right-2 -top-2 w-5 h-5 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-[14px]">
              check
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="bg-surface-container dark:bg-surface-container-high rounded-xl p-6 aspect-video flex flex-col gap-4">
      <div className="flex justify-between items-end h-full gap-2">
        <div className="w-full bg-secondary/20 dark:bg-secondary/30 rounded-t-lg h-[40%]" />
        <div className="w-full bg-secondary/40 dark:bg-secondary/50 rounded-t-lg h-[65%]" />
        <div className="w-full bg-secondary/10 dark:bg-secondary/20 rounded-t-lg h-[30%]" />
        <div className="w-full bg-secondary dark:bg-secondary-fixed-dim rounded-t-lg h-[90%] relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-[10px] px-2 py-1 rounded font-bold">
            142 scans
          </div>
        </div>
        <div className="w-full bg-secondary/30 dark:bg-secondary/40 rounded-t-lg h-[50%]" />
      </div>
      <div className="flex justify-between text-[10px] font-bold text-text-muted border-t border-outline-variant pt-2">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
      </div>
    </div>
  );
}

function ExportIllustration() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative group">
        <div className="w-48 h-48 bg-slate-100 dark:bg-surface-container-highest rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-surface-variant">
          <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-outline">
            qr_code_2
          </span>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed p-3 rounded-xl shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">download</span>
          <span className="text-xs font-bold">SVG EXPORT</span>
        </div>
        <div className="absolute -top-4 -left-4 bg-white dark:bg-surface-container border border-border-subtle dark:border-surface-container-highest p-2 rounded-lg shadow-sm flex items-center gap-2">
          <span className="text-[10px] font-bold text-text-muted">
            RESOLUTION:
          </span>
          <span className="text-[10px] font-extrabold text-secondary dark:text-secondary-fixed-dim">
            ∞ INFINITE
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeatureSection() {
  return (
    <section className="py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 space-y-32">
        <FeatureCard
          badge="Dynamic Routing"
          badgeColor="primary"
          title="Edit links, not printed materials."
          description="Made a typo? Changed your domain? With our dynamic codes, you update the destination URL in your dashboard in 3 seconds. Your printed menus, flyers, and business cards never have to change."
          illustration={<EditLinksIllustration />}
          bgColor="bg-primary/5 dark:bg-primary/10 -rotate-2"
        />
        <FeatureCard
          badge="Smart Tracking"
          badgeColor="secondary"
          title="Analytics that actually make sense."
          description="Stop guessing if your print marketing works. See exactly how many people scanned your code, what device they used, and what city they are in."
          illustration={<AnalyticsIllustration />}
          reverse
          bgColor="bg-secondary/5 dark:bg-secondary/10 rotate-2"
        />
        <FeatureCard
          badge="Print Ready"
          badgeColor="tertiary"
          title="Professional exports that won't blur."
          description="Download pure vector SVGs that stay razor-sharp whether they are printed on a 2-inch business card or a 20-foot billboard."
          illustration={<ExportIllustration />}
          bgColor="bg-accent-urgency/5 dark:bg-accent-urgency/10 -rotate-1"
        />
      </div>
    </section>
  );
}