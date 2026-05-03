export function UrgencyTrigger() {
  return (
    <div className="bg-accent-urgency/10 border border-accent-urgency/20 rounded-lg p-4 flex items-center gap-3 text-left">
      <span className="text-2xl shrink-0">🎁</span>
      <p className="font-medium text-[15px] leading-snug text-on-primary-fixed dark:text-primary-fixed">
        Join the waitlist today and get your first dynamic QR code completely
        free when we launch. Limited to the first 500 early adopters.
      </p>
    </div>
  );
}