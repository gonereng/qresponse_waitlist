import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice — QResponse",
  description: "Legal Notice (Impressum) for QResponse dynamic QR code service.",
};

export default function LegalNoticePage() {
  return (
    <main className="pt-24 pb-section-gap px-6 max-w-3xl mx-auto">
      <h1 className="font-sans text-headline-section text-text-main dark:text-white mb-8">
        Legal Notice
      </h1>
      <p className="text-text-muted mb-6 text-sm">Last updated: May 2026</p>

      <section className="space-y-8 text-text-main dark:text-white">
        <div>
          <h2 className="text-lg font-semibold mb-3">1. Service Provider</h2>
          <p className="text-text-muted leading-relaxed">
            QResponse is a product offered by the service provider listed below.
            This website serves as the waitlist and informational landing page for
            the QResponse dynamic QR code service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">2. Contact Information</h2>
          <p className="text-text-muted leading-relaxed">
            For general inquiries:
            <br />
            Email:{" "}
            <a
              href="mailto:info@qresponse.io"
              className="text-primary dark:text-primary-fixed-dim underline underline-offset-4"
            >
              info@qresponse.io
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">3. Disclaimer</h2>
          <p className="text-text-muted leading-relaxed">
            The information provided on this website is for general informational
            purposes only. While we strive to keep the information up to date and
            correct, we make no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, or availability
            of the information, products, services, or related graphics contained on
            this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">4. Intellectual Property</h2>
          <p className="text-text-muted leading-relaxed">
            All content, design, and code on this website are the intellectual
            property of QResponse. You may not reproduce, distribute, or create
            derivative works from any part of this site without prior written
            permission.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">5. Applicable Law</h2>
          <p className="text-text-muted leading-relaxed">
            These terms and any disputes arising from the use of this website shall
            be governed by and construed in accordance with applicable local law,
            without regard to conflict of law principles.
          </p>
        </div>
      </section>
    </main>
  );
}