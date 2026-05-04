'use client';

import { useState, useTransition } from 'react';
import { useTheme } from 'next-themes';
import { Turnstile } from '@marsidev/react-turnstile';
import { signup, type SignupResult } from '@/app/actions/waitlist';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
const isDev = process.env.NODE_ENV === 'development';
const skipTurnstile = isDev || !TURNSTILE_SITE_KEY;

const CONSENT_TEXT =
    'I agree that QResponse may store my email to send me updates about the launch. I have read the Privacy Policy, and I understand I can unsubscribe at any time.';

export function WaitlistForm({
    variant = 'hero',
}: {
    variant?: 'hero' | 'cta';
}) {
    const isCta = variant === 'cta';
    const { resolvedTheme } = useTheme();
    const [agreed, setAgreed] = useState(false);
    const [email, setEmail] = useState('');
    const [result, setResult] = useState<SignupResult | null>(null);
    const [pending, startTransition] = useTransition();
    const [turnstileToken, setTurnstileToken] = useState<string | null>(
        skipTurnstile ? 'dev-bypass' : null,
    );

    const canSubmit = agreed && !!turnstileToken && !pending;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit || !email) return;
        startTransition(async () => {
            const res = await signup(email, agreed, turnstileToken);
            setResult(res);
        });
    }

    function handleTurnstileSuccess(token: string) {
        setTurnstileToken(token);
    }

    function handleTurnstileError() {
        setTurnstileToken(null);
    }

    function handleTurnstileExpire() {
        setTurnstileToken(null);
    }

    if (result?.success) {
        return (
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary">
                    <span className="material-symbols-outlined text-2xl">
                        check_circle
                    </span>
                </div>
                <p className="text-text-main dark:text-white font-semibold text-lg">
                    {result.message}
                </p>
                <p className="text-text-muted text-sm">
                    Please also check your spam/junk folder if you don&rsquo;t see the email within a few minutes.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-3"
            >
                <input
                    className={`flex-grow h-14 px-6 rounded-xl border transition-all text-base ${
                        isCta
                            ? 'border-none bg-white text-slate-900 focus:ring-2 focus:ring-secondary dark:bg-white dark:text-slate-900'
                            : 'border-border-subtle bg-surface-background focus:ring-2 focus:ring-primary focus:border-primary dark:bg-surface-container-lowest dark:text-text-main dark:border-surface-container-highest'
                    }`}
                    placeholder="Enter your email address"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={pending}
                />
                <button
                    className={`h-14 px-8 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all ${
                        canSubmit
                            ? 'bg-secondary text-white hover:brightness-110 active:scale-95 shadow-lg shadow-secondary/20 cursor-pointer'
                            : 'bg-surface-container-high dark:bg-surface-container-highest text-text-muted dark:text-outline cursor-not-allowed shadow-none'
                    }`}
                    type="submit"
                    disabled={!canSubmit}
                >
                    {pending
                        ? 'Sending...'
                        : isCta
                          ? 'Get Early Access'
                          : 'Get Early Access & 1 Free Code'}
                    {!pending && (
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    )}
                </button>
            </form>
            <label className="flex items-start gap-2 text-sm text-text-muted dark:text-outline cursor-pointer">
                <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 accent-secondary"
                    disabled={pending}
                />
                <span>
                    {CONSENT_TEXT.slice(
                        0,
                        CONSENT_TEXT.indexOf('Privacy Policy'),
                    )}
                    <a
                        href="/privacy"
                        className="text-primary dark:text-primary-fixed-dim underline underline-offset-4"
                        target="_blank"
                    >
                        Privacy Policy
                    </a>
                    {CONSENT_TEXT.slice(
                        CONSENT_TEXT.indexOf('Privacy Policy') +
                            'Privacy Policy'.length,
                    )}
                </span>
            </label>
            {!skipTurnstile && (
                <Turnstile
                    siteKey={TURNSTILE_SITE_KEY}
                    onSuccess={handleTurnstileSuccess}
                    onError={handleTurnstileError}
                    onExpire={handleTurnstileExpire}
                    options={{
                        theme: resolvedTheme === 'dark' ? 'dark' : 'light',
                    }}
                />
            )}
            {result?.error && (
                <p className="text-sm text-destructive">{result.error}</p>
            )}
        </div>
    );
}
