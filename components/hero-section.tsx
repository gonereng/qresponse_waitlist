import { WaitlistForm } from "./waitlist-form";
import { UrgencyTrigger } from "./urgency-trigger";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-section-gap px-6 text-center max-w-container-max mx-auto">
      <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-surface-container dark:bg-surface-container-high text-primary dark:text-primary-fixed-dim font-bold text-sm">
        <span className="material-symbols-outlined text-[18px] mr-2">
          verified
        </span>
        The Subscription-Free QR Revolution
      </div>
      <h1 className="font-sans text-5xl text-display-hero tracking-tight mb-stack-md text-text-main dark:text-white">
        Never let a QR code break again.
      </h1>
      <p className="font-sans text-subheadline text-text-muted mb-stack-lg max-w-2xl mx-auto">
        Stop paying $35/month just to change a link. Create dynamic, trackable
        QR codes for a flat, one-time fee of $5. No hidden subscriptions. No
        expired codes.
      </p>
      <div id="waitlist" className="w-full mx-auto max-w-3xl">
        <WaitlistForm variant="hero" />
        <div className="mt-4">
          <UrgencyTrigger />
        </div>
      </div>
    </section>
  );
}
