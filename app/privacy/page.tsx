import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy — QResponse',
    description: 'Privacy Policy for QResponse dynamic QR code service.',
};

function ExtLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-fixed-dim underline underline-offset-4"
        >
            {children}
        </a>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-24 pb-section-gap px-6 max-w-3xl mx-auto">
            <h1 className="font-sans text-headline-section text-text-main dark:text-white mb-8">
                Privacy Policy
            </h1>
            <p className="text-text-muted mb-6 text-sm">
                Last updated: May 2026
            </p>

            <section className="space-y-8 text-text-main dark:text-white">
                {/* 1. An overview of data protection */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        1. An overview of data protection
                    </h2>

                    <h3 className="font-semibold mb-2">General information</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The following information will provide you with an easy
                        to navigate overview of what will happen with your
                        personal data when you visit this website. The term
                        &#x201C;personal data&#x201D; comprises all data that
                        can be used to personally identify you. For detailed
                        information about the subject matter of data protection,
                        please consult our Data Protection Declaration, which we
                        have included beneath this copy.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Data recording on this website
                    </h3>
                    <h4 className="font-semibold text-sm mb-1">
                        Who is the responsible party for the recording of data
                        on this website (i.e., the &#x201C;controller&#x201D;)?
                    </h4>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The data on this website is processed by the operator of
                        the website, whose contact information is available
                        under section &#x201C;Information about the responsible
                        party (referred to as the &#x2018;controller&#x2019; in
                        the GDPR)&#x201D; in this Privacy Policy.
                    </p>

                    <h4 className="font-semibold text-sm mb-1">
                        How do we record your data?
                    </h4>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We collect your data as a result of your sharing of your
                        data with us. This may, for instance be information you
                        enter into our contact form.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Other data shall be recorded by our IT systems
                        automatically or after you consent to its recording
                        during your website visit. This data comprises primarily
                        technical information (e.g., web browser, operating
                        system, or time the site was accessed). This information
                        is recorded automatically when you access this website.
                    </p>

                    <h4 className="font-semibold text-sm mb-1">
                        What are the purposes we use your data for?
                    </h4>
                    <p className="text-text-muted leading-relaxed mb-4">
                        A portion of the information is generated to guarantee
                        the error free provision of the website. Other data may
                        be used to analyze your user patterns. If contracts can
                        be concluded or initiated via the website, the
                        transmitted data will also be processed for contract
                        offers, orders or other order enquiries.
                    </p>

                    <h4 className="font-semibold text-sm mb-1">
                        What rights do you have as far as your information is
                        concerned?
                    </h4>
                    <p className="text-text-muted leading-relaxed mb-4">
                        You have the right to receive information about the
                        source, recipients, and purposes of your archived
                        personal data at any time without having to pay a fee
                        for such disclosures. You also have the right to demand
                        that your data are rectified or eradicated. If you have
                        consented to data processing, you have the option to
                        revoke this consent at any time, which shall affect all
                        future data processing. Moreover, you have the right to
                        demand that the processing of your data be restricted
                        under certain circumstances. Furthermore, you have the
                        right to log a complaint with the competent supervising
                        agency.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Please do not hesitate to contact us at any time if you
                        have questions about this or any other data protection
                        related issues.
                    </p>
                </div>

                {/* 2. Hosting and Content Delivery Networks (CDN) */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        2. Hosting and Content Delivery Networks (CDN)
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We are hosting the content of our website at the
                        following provider:
                    </p>

                    <h3 className="font-semibold mb-2">Hetzner</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The provider is the Hetzner Online GmbH, Industriestr.
                        25, 91710 Gunzenhausen, Germany (hereinafter referred to
                        as Hetzner).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        For details, please view the data privacy policy of
                        Hetzner:{' '}
                        <ExtLink href="https://www.hetzner.com/de/legal/privacy-policy/">
                            https://www.hetzner.com/de/legal/privacy-policy/
                        </ExtLink>
                        .
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We use Hetzner on the basis of Art. 6(1)(f) GDPR. We
                        have a legitimate interest in the most reliable
                        depiction of our website possible. If appropriate
                        consent has been obtained, the processing is carried out
                        exclusively on the basis of Art. 6(1)(a) GDPR and § 25
                        (1) TDDDG, insofar the consent includes the storage of
                        cookies or the access to information in the
                        user&#x2019;s end device (e.g., device fingerprinting)
                        within the meaning of the TDDDG. This consent can be
                        revoked at any time.
                    </p>
                    <h4 className="font-semibold text-sm mb-1">
                        Data processing
                    </h4>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We have concluded a data processing agreement (DPA) for
                        the use of the above-mentioned service. This is a
                        contract mandated by data privacy laws that guarantees
                        that they process personal data of our website visitors
                        only based on our instructions and in compliance with
                        the GDPR.
                    </p>

                    <h3 className="font-semibold mb-2">Cloudflare</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We use the &#x201C;Cloudflare&#x201D; service provided
                        by Cloudflare Inc., 101 Townsend St., San Francisco, CA
                        94107, USA. (hereinafter referred to as
                        &#x201C;Cloudflare&#x201D;).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Cloudflare offers a content delivery network with DNS
                        that is available worldwide. As a result, the
                        information transfer that occurs between your browser
                        and our website is technically routed via
                        Cloudflare&#x2019;s network. This enables Cloudflare to
                        analyze data transactions between your browser and our
                        website and to work as a filter between our servers and
                        potentially malicious data traffic from the Internet. In
                        this context, Cloudflare may also use cookies or other
                        technologies deployed to recognize Internet users, which
                        shall, however, only be used for the herein described
                        purpose.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The use of Cloudflare is based on our legitimate
                        interest in a provision of our website offerings that is
                        as error free and secure as possible (Art. 6(1)(f)
                        GDPR).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Data transmission to the US is based on the Standard
                        Contractual Clauses (SCC) of the European Commission.
                        Details and further information on security and data
                        protection at Cloudflare can be found here:{' '}
                        <ExtLink href="https://www.cloudflare.com/privacypolicy/">
                            https://www.cloudflare.com/privacypolicy/
                        </ExtLink>
                        .
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The company is certified in accordance with the
                        &#x201C;EU-US Data Privacy Framework&#x201D; (DPF). The
                        DPF is an agreement between the European Union and the
                        US, which is intended to ensure compliance with European
                        data protection standards for data processing in the US.
                        Every company certified under the DPF is obliged to
                        comply with these data protection standards. For more
                        information, please contact the provider under the
                        following link:{' '}
                        <ExtLink href="https://www.dataprivacyframework.gov/participant/5666">
                            https://www.dataprivacyframework.gov/participant/5666
                        </ExtLink>
                        .
                    </p>
                    <h4 className="font-semibold text-sm mb-1">
                        Data processing
                    </h4>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We have concluded a data processing agreement (DPA) for
                        the use of the above-mentioned service. This is a
                        contract mandated by data privacy laws that guarantees
                        that they process personal data of our website visitors
                        only based on our instructions and in compliance with
                        the GDPR.
                    </p>
                </div>

                {/* 3. General information and mandatory information */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        3. General information and mandatory information
                    </h2>

                    <h3 className="font-semibold mb-2">Data protection</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The operators of this website and its pages take the
                        protection of your personal data very seriously. Hence,
                        we handle your personal data as confidential information
                        and in compliance with the statutory data protection
                        regulations and this Data Protection Declaration.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Whenever you use this website, a variety of personal
                        information will be collected. Personal data comprises
                        data that can be used to personally identify you. This
                        Data Protection Declaration explains which data we
                        collect as well as the purposes we use this data for. It
                        also explains how, and for which purpose the information
                        is collected.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We herewith advise you that the transmission of data via
                        the Internet (i.e., through e-mail communications) may
                        be prone to security gaps. It is not possible to
                        completely protect data against third-party access.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Information about the responsible party (referred to as
                        the &#x201C;controller&#x201D; in the GDPR)
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The data processing controller on this website is:
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Roland Theisen <br />
                        Im Brunnenfeld 8A <br />
                        66706 Perl, Germany
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Phone: +491744281529
                        <br />
                        E-mail: contact@qresponse.codes
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The controller is the natural person or legal entity
                        that single-handedly or jointly with others makes
                        decisions as to the purposes of and resources for the
                        processing of personal data (e.g., names, e-mail
                        addresses, etc.).
                    </p>

                    <h3 className="font-semibold mb-2">Storage duration</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Unless a more specific storage period has been specified
                        in this privacy policy, your personal data will remain
                        with us until the purpose for which it was collected no
                        longer applies. If you assert a justified request for
                        deletion or revoke your consent to data processing, your
                        data will be deleted, unless we have other legally
                        permissible reasons for storing your personal data
                        (e.g., tax or commercial law retention periods); in the
                        latter case, the deletion will take place after these
                        reasons cease to apply.
                    </p>

                    <h3 className="font-semibold mb-2">
                        General information on the legal basis for the data
                        processing on this website
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If you have consented to data processing, we process
                        your personal data on the basis of Art. 6(1)(a) GDPR or
                        Art. 9 (2)(a) GDPR, if special categories of data are
                        processed according to Art. 9 (1) DSGVO. In the case of
                        explicit consent to the transfer of personal data to
                        third countries, the data processing is also based on
                        Art. 49 (1)(a) GDPR. If you have consented to the
                        storage of cookies or to the access to information in
                        your end device (e.g., via device fingerprinting), the
                        data processing is additionally based on § 25 (1) TDDDG.
                        The consent can be revoked at any time. If your data is
                        required for the fulfillment of a contract or for the
                        implementation of pre-contractual measures, we process
                        your data on the basis of Art. 6(1)(b) GDPR.
                        Furthermore, if your data is required for the
                        fulfillment of a legal obligation, we process it on the
                        basis of Art. 6(1)(c) GDPR. Furthermore, the data
                        processing may be carried out on the basis of our
                        legitimate interest according to Art. 6(1)(f) GDPR.
                        Information on the relevant legal basis in each
                        individual case is provided in the following paragraphs
                        of this privacy policy.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Recipients of personal data
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        In the scope of our business activities, we cooperate
                        with various external parties. In some cases, this also
                        requires the transfer of personal data to these external
                        parties. We only disclose personal data to external
                        parties if this is required as part of the fulfillment
                        of a contract, if we are legally obligated to do so
                        (e.g., disclosure of data to tax authorities), if we
                        have a legitimate interest in the disclosure pursuant to
                        Art. 6 (1)(f) GDPR, or if another legal basis permits
                        the disclosure of this data. When using processors, we
                        only disclose personal data of our customers on the
                        basis of a valid contract on data processing. In the
                        case of joint processing, a joint processing agreement
                        is concluded.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Revocation of your consent to the processing of data
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        A wide range of data processing transactions are
                        possible only subject to your express consent. You can
                        also revoke at any time any consent you have already
                        given us. This shall be without prejudice to the
                        lawfulness of any data collection that occurred prior to
                        your revocation.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Right to object to the collection of data in special
                        cases; right to object to direct advertising (Art. 21
                        GDPR)
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF
                        ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO AT ANY
                        TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA
                        BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION.
                        THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE
                        PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY
                        PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA
                        PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE WILL
                        NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE
                        ARE IN A POSITION TO PRESENT COMPELLING PROTECTION
                        WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT
                        OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE
                        PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR
                        DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO
                        ART. 21(1) GDPR).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO
                        ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO
                        OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA
                        FOR THE PURPOSES OF SUCH ADVERTISING AT ANY TIME. THIS
                        ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS
                        AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT,
                        YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED
                        FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO
                        ART. 21(2) GDPR).
                    </p>

                    <h3 className="font-semibold mb-2">
                        Right to log a complaint with the competent supervisory
                        agency
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        In the event of violations of the GDPR, data subjects
                        are entitled to log a complaint with a supervisory
                        agency, in particular in the member state where they
                        usually maintain their domicile, place of work or at the
                        place where the alleged violation occurred. The right to
                        log a complaint is in effect regardless of any other
                        administrative or court proceedings available as legal
                        recourses.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Right to data portability
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        You have the right to have data that we process
                        automatically on the basis of your consent or in
                        fulfillment of a contract handed over to you or to a
                        third party in a common, machine-readable format. If you
                        should demand the direct transfer of the data to another
                        controller, this will be done only if it is technically
                        feasible.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Information about, rectification and eradication of data
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Within the scope of the applicable statutory provisions,
                        you have the right to demand information about your
                        archived personal data, their source and recipients as
                        well as the purpose of the processing of your data at
                        any time. You may also have a right to have your data
                        rectified or eradicated. If you have questions about
                        this subject matter or any other questions about
                        personal data, please do not hesitate to contact us at
                        any time.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Right to demand processing restrictions
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        You have the right to demand the imposition of
                        restrictions as far as the processing of your personal
                        data is concerned. To do so, you may contact us at any
                        time. The right to demand restriction of processing
                        applies in the following cases:
                    </p>
                    <ul className="list-disc pl-6 text-text-muted leading-relaxed mb-4">
                        <li className="mb-1">
                            In the event that you should dispute the correctness
                            of your data archived by us, we will usually need
                            some time to verify this claim. During the time that
                            this investigation is ongoing, you have the right to
                            demand that we restrict the processing of your
                            personal data.
                        </li>
                        <li className="mb-1">
                            If the processing of your personal data was/is
                            conducted in an unlawful manner, you have the option
                            to demand the restriction of the processing of your
                            data instead of demanding the eradication of this
                            data.
                        </li>
                        <li className="mb-1">
                            If we do not need your personal data any longer and
                            you need it to exercise, defend or claim legal
                            entitlements, you have the right to demand the
                            restriction of the processing of your personal data
                            instead of its eradication.
                        </li>
                        <li className="mb-1">
                            If you have raised an objection pursuant to Art.
                            21(1) GDPR, your rights and our rights will have to
                            be weighed against each other. As long as it has not
                            been determined whose interests prevail, you have
                            the right to demand a restriction of the processing
                            of your personal data.
                        </li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If you have restricted the processing of your personal
                        data, these data &#x2013; with the exception of their
                        archiving &#x2013; may be processed only subject to your
                        consent or to claim, exercise or defend legal
                        entitlements or to protect the rights of other natural
                        persons or legal entities or for important public
                        interest reasons cited by the European Union or a member
                        state of the EU.
                    </p>

                    <h3 className="font-semibold mb-2">
                        SSL and/or TLS encryption
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        For security reasons and to protect the transmission of
                        confidential content, such as purchase orders or
                        inquiries you submit to us as the website operator, this
                        website uses either an SSL or a TLS encryption program.
                        You can recognize an encrypted connection by checking
                        whether the address line of the browser switches from
                        &#x201C;http://&#x201D; to &#x201C;https://&#x201D; and
                        also by the appearance of the lock icon in the browser
                        line.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If the SSL or TLS encryption is activated, data you
                        transmit to us cannot be read by third parties.
                    </p>
                </div>

                {/* 4. Recording of data on this website */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        4. Recording of data on this website
                    </h2>

                    <h3 className="font-semibold mb-2">Cookies</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Our websites and pages use what the industry refers to
                        as &#x201C;cookies.&#x201D; Cookies are small data
                        packages that do not cause any damage to your device.
                        They are either stored temporarily for the duration of a
                        session (session cookies) or they are permanently
                        archived on your device (permanent cookies). Session
                        cookies are automatically deleted once you terminate
                        your visit. Permanent cookies remain archived on your
                        device until you actively delete them, or they are
                        automatically eradicated by your web browser.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Cookies can be issued by us (first-party cookies) or by
                        third-party companies (so-called third-party cookies).
                        Third-party cookies enable the integration of certain
                        services of third-party companies into websites (e.g.,
                        cookies for handling payment services).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Cookies have a variety of functions. Many cookies are
                        technically essential since certain website functions
                        would not work in the absence of these cookies (e.g.,
                        the shopping cart function or the display of videos).
                        Other cookies may be used to analyze user behavior or
                        for promotional purposes.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Cookies, which are required for the performance of
                        electronic communication transactions, for the provision
                        of certain functions you want to use (e.g., for the
                        shopping cart function) or those that are necessary for
                        the optimization (required cookies) of the website
                        (e.g., cookies that provide measurable insights into the
                        web audience), shall be stored on the basis of Art.
                        6(1)(f) GDPR, unless a different legal basis is cited.
                        The operator of the website has a legitimate interest in
                        the storage of required cookies to ensure the
                        technically error-free and optimized provision of the
                        operator&#x2019;s services. If your consent to the
                        storage of the cookies and similar recognition
                        technologies has been requested, the processing occurs
                        exclusively on the basis of the consent obtained (Art.
                        6(1)(a) GDPR and § 25 (1) TDDDG); this consent may be
                        revoked at any time.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        You have the option to set up your browser in such a
                        manner that you will be notified any time cookies are
                        placed and to permit the acceptance of cookies only in
                        specific cases. You may also exclude the acceptance of
                        cookies in certain cases or in general or activate the
                        delete-function for the automatic eradication of cookies
                        when the browser closes. If cookies are deactivated, the
                        functions of this website may be limited.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If other cookies and services are used on this website,
                        you can find this information in this privacy policy.
                    </p>

                    <h3 className="font-semibold mb-2">Server log files</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The provider of this website and its pages automatically
                        collects and stores information in so-called server log
                        files, which your browser communicates to us
                        automatically. The information comprises:
                    </p>
                    <ul className="list-disc pl-6 text-text-muted leading-relaxed mb-4">
                        <li className="mb-1">
                            The type and version of browser used
                        </li>
                        <li className="mb-1">The used operating system</li>
                        <li className="mb-1">Referrer URL</li>
                        <li className="mb-1">
                            The hostname of the accessing computer
                        </li>
                        <li className="mb-1">The time of the server inquiry</li>
                        <li className="mb-1">The IP address</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mb-4">
                        This data is not merged with other data sources.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        This data is recorded on the basis of Art. 6(1)(f) GDPR.
                        The operator of the website has a legitimate interest in
                        the technically error free depiction and the
                        optimization of the operator&#x2019;s website. In order
                        to achieve this, server log files must be recorded.
                    </p>

                    <h3 className="font-semibold mb-2">Contact form</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If you submit inquiries to us via our contact form, the
                        information provided in the contact form as well as any
                        contact information provided therein will be stored by
                        us in order to handle your inquiry and in the event that
                        we have further questions. We will not share this
                        information without your consent.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The processing of these data is based on Art. 6(1)(b)
                        GDPR, if your request is related to the execution of a
                        contract or if it is necessary to carry out
                        pre-contractual measures. In all other cases the
                        processing is based on our legitimate interest in the
                        effective processing of the requests addressed to us
                        (Art. 6(1)(f) GDPR) or on your agreement (Art. 6(1)(a)
                        GDPR) if this has been requested; the consent can be
                        revoked at any time.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The information you have entered into the contact form
                        shall remain with us until you ask us to eradicate the
                        data, revoke your consent to the archiving of data or if
                        the purpose for which the information is being archived
                        no longer exists (e.g., after we have concluded our
                        response to your inquiry). This shall be without
                        prejudice to any mandatory legal provisions, in
                        particular retention periods.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Request by e-mail, telephone, or fax
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        If you contact us by e-mail, telephone or fax, your
                        request, including all resulting personal data (name,
                        request) will be stored and processed by us for the
                        purpose of processing your request. We do not pass these
                        data on without your consent.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        These data are processed on the basis of Art. 6(1)(b)
                        GDPR if your inquiry is related to the fulfillment of a
                        contract or is required for the performance of
                        pre-contractual measures. In all other cases, the data
                        are processed on the basis of our legitimate interest in
                        the effective handling of inquiries submitted to us
                        (Art. 6(1)(f) GDPR) or on the basis of your consent
                        (Art. 6(1)(a) GDPR) if it has been obtained; the consent
                        can be revoked at any time.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The data sent by you to us via contact requests remain
                        with us until you request us to delete, revoke your
                        consent to the storage or the purpose for the data
                        storage lapses (e.g. after completion of your request).
                        Mandatory statutory provisions - in particular statutory
                        retention periods - remain unaffected.
                    </p>
                </div>

                {/* 5. Plug-ins and Tools */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        5. Plug-ins and Tools
                    </h2>

                    <h3 className="font-semibold mb-2">
                        Google Fonts (local embedding)
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        This website uses so-called Google Fonts provided by
                        Google to ensure the uniform use of fonts on this site.
                        These Google fonts are locally installed so that a
                        connection to Google&#x2019;s servers will not be
                        established in conjunction with this application.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        For more information on Google Fonts, please follow this
                        link:{' '}
                        <ExtLink href="https://developers.google.com/fonts/faq">
                            https://developers.google.com/fonts/faq
                        </ExtLink>{' '}
                        and consult Google&#x2019;s Data Privacy Declaration
                        under:{' '}
                        <ExtLink href="https://policies.google.com/privacy?hl=en">
                            https://policies.google.com/privacy?hl=en
                        </ExtLink>
                        .
                    </p>

                    <h3 className="font-semibold mb-2">Cloudflare Turnstile</h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We use &#x201C;Cloudflare Turnstile&#x201D; on this
                        website. The provider is Cloudflare Inc., 101 Townsend
                        St., San Francisco, CA 94107, USA (hereinafter
                        &#x201C;Turnstile&#x201D;).
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Turnstile is used to check whether the data input on
                        this website (e.g., in a contact form) is done by a
                        human or by an automated program. For this purpose,
                        Turnstile analyzes the behavior of the website visitor
                        based on a number of characteristics.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        This analysis starts automatically as soon as the
                        website visitor enters a website that uses Turnstile.
                        For the analysis, Turnstile evaluates various
                        information (e.g., IP address, time spent on the website
                        or mouse movements made by the user). The data collected
                        during the analysis is forwarded to Cloudflare.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The storage and analysis of the data is based on Art. 6
                        (1)(f) GDPR. The website operator has a legitimate
                        interest in protecting his web offerings from abusive
                        automated spying and from Spam. If such consent has been
                        obtained, the data will be processed exclusively on the
                        basis of Art. 6 (1)(a) GDPR and § 25 (1) TDDDG, if the
                        consent comprises the storage of cookies or access to
                        information on the user&#x2019;s device (e.g., device
                        fingerprinting) as defined in the TDDDG (German
                        Telecommunications Act). Such consent may be revoked at
                        any time.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The processing of data is based on Standard Contract
                        Clauses, which you can find here:{' '}
                        <ExtLink href="https://www.cloudflare.com/cloudflare-customer-scc/">
                            https://www.cloudflare.com/cloudflare-customer-scc/
                        </ExtLink>
                        .
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        For more information on Cloudflare Turnstile, please
                        visit the privacy policy at:{' '}
                        <ExtLink href="https://www.cloudflare.com/cloudflare-customer-dpa/">
                            https://www.cloudflare.com/cloudflare-customer-dpa/
                        </ExtLink>
                        .
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The company is certified in accordance with the
                        &#x201C;EU-US Data Privacy Framework&#x201D; (DPF). The
                        DPF is an agreement between the European Union and the
                        US, which is intended to ensure compliance with European
                        data protection standards for data processing in the US.
                        Every company certified under the DPF is obliged to
                        comply with these data protection standards. For more
                        information, please contact the provider under the
                        following link:{' '}
                        <ExtLink href="https://www.dataprivacyframework.gov/participant/5666">
                            https://www.dataprivacyframework.gov/participant/5666
                        </ExtLink>
                        .
                    </p>
                </div>

                {/* 6. eCommerce and payment service providers */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        6. eCommerce and payment service providers
                    </h2>

                    <h3 className="font-semibold mb-2">
                        Processing of Customer and Contract Data
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We collect, process, and use personal customer and
                        contract data for the establishment, content arrangement
                        and modification of our contractual relationships. Data
                        with personal references to the use of this website
                        (usage data) will be collected, processed, and used only
                        if this is necessary to enable the user to use our
                        services or required for billing purposes. The legal
                        basis for these processes is Art. 6(1)(b) GDPR.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The collected customer data shall be deleted upon
                        completion of the order or termination of the business
                        relationship and upon expiration of any existing
                        statutory archiving periods. This shall be without
                        prejudice to any statutory archiving periods.
                    </p>

                    <h3 className="font-semibold mb-2">
                        Data transfer upon closing of contracts for services and
                        digital content
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                        We share personal data with third parties only if this
                        is necessary in conjunction with the handling of the
                        contract; for instance, with the financial institution
                        tasked with the processing of payments.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        Any further transfer of data shall not occur or shall
                        only occur if you have expressly consented to the
                        transfer. Any sharing of your data with third parties in
                        the absence of your express consent, for instance for
                        advertising purposes, shall not occur.
                    </p>
                    <p className="text-text-muted leading-relaxed mb-4">
                        The basis for the processing of data is Art. 6(1)(b)
                        GDPR, which permits the processing of data for the
                        fulfilment of a contract or for pre-contractual actions.
                    </p>
                </div>
            </section>
        </main>
    );
}
