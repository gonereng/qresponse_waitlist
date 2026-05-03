import { PricingCard } from "./pricing-card";

export function PricingSection() {
  return (
    <section
      className="py-section-gap bg-white dark:bg-surface-container-lowest"
      id="pricing"
    >
      <div className="max-w-container-max mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-sans text-5xl text-headline-section text-text-main dark:text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-text-muted max-w-xl mx-auto">
            Choose the plan that fits your scale. No hidden fees or automated
            renewal traps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Free Forever"
            subtitle="For simple, permanent needs."
            price="$0"
            features={[
              "Unlimited Static QR Codes",
              "Never expires",
              "High-res exports (PNG/SVG)",
            ]}
          />
          <PricingCard
            title="Pay-Per-QR"
            subtitle="No subscriptions. Pay once, update the link forever."
            price="$5"
            priceSuffix=""
            features={[
              "1 Dynamic QR Code",
              "Edit the destination URL anytime",
              "Basic scan analytics",
              "Never expires",
            ]}
            highlighted
          />
          <PricingCard
            title="Pro / Agency"
            subtitle="For power users managing multiple campaigns."
            price="$15"
            priceSuffix="/ month"
            features={[
              "Unlimited Dynamic Codes",
              "Advanced Analytics (Location/Device)",
              "Custom Domains",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
