import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Notice — QResponse',
    description:
        'Legal Notice (Impressum) for QResponse dynamic QR code service.',
};

export default function LegalNoticePage() {
    return (
        <main className="pt-24 pb-section-gap px-6 max-w-3xl mx-auto">
            <h1 className="font-sans text-headline-section text-text-main dark:text-white mb-8">
                Legal Notice
            </h1>
            <p className="text-text-muted mb-6 text-sm">
                Last updated: May 2026
            </p>

            <section className="space-y-8 text-text-main dark:text-white">
                <div>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Roland Theisen
                        <br />
                        Im Brunnenfeld 8A
                        <br />
                        66706 Perl
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-3">Contact</h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Phone: +491744281529
                        <br />
                        Telefax:
                        <br />
                        E-mail:{' '}
                        <a
                            href="mailto:contact@qresponse.codes"
                            className="text-primary dark:text-primary-fixed-dim underline underline-offset-4"
                        >
                            contact@qresponse.codes
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        Dispute resolution proceedings in front of a consumer
                        arbitration board
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We are not willing or obliged to participate in dispute
                        resolution proceedings in front of a consumer
                        arbitration board.
                    </p>
                </div>
            </section>
        </main>
    );
}
