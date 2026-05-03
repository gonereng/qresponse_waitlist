import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — QResponse",
  description: "Privacy Policy for QResponse dynamic QR code service.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-section-gap px-6 max-w-3xl mx-auto">
      <h1 className="font-sans text-headline-section text-text-main dark:text-white mb-8">
        Privacy Policy
      </h1>
      <p className="text-text-muted mb-6 text-sm">Last updated: May 2026</p>

      <section className="space-y-8 text-text-main dark:text-white">
        <div>
          <h2 className="text-lg font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-text-muted leading-relaxed">
            We collect the email address you provide when joining our waitlist. We do
            not collect any other personal information at this time. No cookies,
            tracking scripts, or analytics are used on our waitlist page.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-text-muted leading-relaxed">
            Your email address is used solely to notify you about QResponse launch
            updates and early-access availability. We will not sell, rent, or share
            your email with third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">3. Data Storage &amp; Security</h2>
          <p className="text-text-muted leading-relaxed">
            Your email is stored securely in our database and protected using
            industry-standard security practices. We take reasonable measures to
            prevent unauthorized access, disclosure, or destruction of your data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">4. Your Rights</h2>
          <p className="text-text-muted leading-relaxed">
            You may request deletion of your email from our waitlist at any time by
            contacting us. Upon request, we will remove your email from our system
            within 30 days.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">5. Updates to This Policy</h2>
          <p className="text-text-muted leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated revision date. Continued use of our
            service after changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">6. Contact</h2>
          <p className="text-text-muted leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:privacy@qresponse.io"
              className="text-primary dark:text-primary-fixed-dim underline underline-offset-4"
            >
              privacy@qresponse.io
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}