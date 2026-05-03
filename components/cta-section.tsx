import { WaitlistForm } from "./waitlist-form";

export function CtaSection() {
  return (
    <section className="py-section-gap px-6">
      <div className="max-w-4xl mx-auto bg-primary dark:bg-primary-container rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <h2 className="font-sans text-[40px] leading-tight text-on-primary dark:text-on-primary-container mb-6 relative z-10">
          Ready to break free from QR subscriptions?
        </h2>
        <div className="max-w-xl mx-auto relative z-10">
          <WaitlistForm variant="cta" />
        </div>
      </div>
    </section>
  );
}
