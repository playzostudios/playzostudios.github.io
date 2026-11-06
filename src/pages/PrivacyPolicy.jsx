import { useEffect } from 'react';
import { COMPANY, CONTACT_EMAIL, POLICY_UPDATED } from '../config.js';

const sections = [
  ['overview', 'Overview'],
  ['info-collect', 'Information We Collect'],
  ['web', 'Web Games (Poki & CrazyGames)'],
  ['android', 'Android Apps & Games'],
  ['meta', 'Meta Quest VR & Mixed Reality Apps'],
  ['use', 'How We Use Information'],
  ['sharing', 'How Information Is Shared'],
  ['third-parties', 'Third-Party Services'],
  ['retention', 'Data Retention'],
  ['deletion', 'Data Deletion Requests'],
  ['rights', 'Your Privacy Rights'],
  ['children', "Children's Privacy"],
  ['security', 'Security'],
  ['changes', 'Changes to This Policy'],
  ['contact', 'Contact Us'],
];

const Mail = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">{children}</a>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${COMPANY}`;
    return () => {
      document.title = COMPANY;
    };
  }, []);

  return (
    <div className="policy container">
      <header className="policy-header">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {POLICY_UPDATED}</p>
        <p>
          This Privacy Policy explains how {COMPANY} ("Playzo", "we", "us" or "our") collects,
          uses, shares and protects information when you play our games and use our apps on the
          web (including through Poki and CrazyGames), on Android devices, and on Meta Quest
          virtual reality (VR) and mixed reality (MR/AR) headsets (together, our "Apps"). This
          policy is owned and maintained by {COMPANY}.
        </p>
      </header>

      <nav className="toc" aria-label="Contents">
        <strong>Contents</strong>
        <ol>
          {sections.map(([id, title]) => (
            <li key={id}><a href={`#${id}`}>{title}</a></li>
          ))}
        </ol>
      </nav>

      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          We design our Apps to collect as little information as possible. We do not sell your
          personal information. Most of our games can be played without creating an account, and
          we never ask you to provide your name, address or payment details directly to us.
          Where information is collected, it is mainly used to make the game work, save your
          progress, keep it secure and improve it.
        </p>
      </section>

      <section id="info-collect">
        <h2>2. Information We Collect</h2>
        <p>Depending on the platform and App, we or our service providers may collect:</p>
        <ul>
          <li>
            <strong>Device and technical information</strong>: device model, operating system
            and version, language, screen size, app version, crash logs and performance data.
          </li>
          <li>
            <strong>Usage and gameplay data</strong>: levels played, scores, session length,
            in-game settings, and how features are used.
          </li>
          <li>
            <strong>Identifiers</strong>: anonymous or pseudonymous IDs such as a randomly
            generated install ID, an advertising ID (Android), or a platform user ID (Meta).
          </li>
          <li>
            <strong>Local save data</strong>: game progress and preferences stored on your
            device (for example in browser local storage or app storage).
          </li>
          <li>
            <strong>Information you send us</strong>: if you contact us by email, we receive
            your email address and the contents of your message.
          </li>
        </ul>
        <p>
          We do not knowingly collect sensitive personal data (such as health, biometric,
          financial or precise location data).
        </p>
      </section>

      <section id="web">
        <h2>3. Web Games (Poki &amp; CrazyGames)</h2>
        <p>
          Some of our games are published on third-party web game portals, including{' '}
          <strong>Poki</strong> (poki.com) and <strong>CrazyGames</strong> (crazygames.com).
          When you play our games on these portals:
        </p>
        <ul>
          <li>
            The portal hosts the game and operates its own website, accounts, advertising and
            analytics. The portal is responsible for the data it collects, under its own privacy
            policy and cookie consent tools.
          </li>
          <li>
            Our games integrate the portal's official SDK (the Poki SDK or the CrazyGames SDK)
            to show advertisements, measure gameplay events (such as game start, game stop and
            rewarded ad views) and, where offered, provide portal features such as user accounts,
            cloud saves or leaderboards.
          </li>
          <li>
            Playzo does not directly collect personal information through games played on these
            portals. Game progress is usually stored locally in your browser (local storage) and
            can be removed by clearing your browser data. If you are signed in to a portal
            account, the portal may store progress for you.
          </li>
          <li>
            Advertising on these portals may use cookies or similar technologies, subject to the
            consent choices you make on the portal.
          </li>
        </ul>
        <p>Please review the portals' policies for details:</p>
        <ul>
          <li><Ext href="https://poki.com/en/c/privacy-statement">Poki Privacy Statement</Ext></li>
          <li><Ext href="https://www.crazygames.com/privacy-policy">CrazyGames Privacy Policy</Ext></li>
        </ul>
      </section>

      <section id="android">
        <h2>4. Android Apps &amp; Games</h2>
        <p>Our Android Apps are distributed through Google Play. In these Apps:</p>
        <ul>
          <li>
            We may use services such as Google Play Services, Google Play Games, Google Play
            Billing, Google AdMob (or other ad networks), Firebase Analytics / Crashlytics and
            Unity Services to deliver features, ads, analytics and crash reporting.
          </li>
          <li>
            These services may collect device information, the Android Advertising ID, IP
            address, app interactions and crash data. Ads may be personalised or
            non-personalised depending on your consent and device settings.
          </li>
          <li>
            You can reset or delete your Advertising ID, or opt out of ad personalisation, at any
            time in your device settings (for example Settings &gt; Google &gt; Ads, or
            Settings &gt; Privacy &gt; Ads).
          </li>
          <li>
            In-app purchases are processed by Google Play. We do not receive or store your
            payment card details.
          </li>
          <li>
            We only request Android permissions that are needed for an App's features, and we
            explain why when a permission is requested.
          </li>
          <li>
            Our data practices are also described in each App's Data safety section on Google
            Play.
          </li>
        </ul>
      </section>

      <section id="meta" className="highlight">
        <h2>5. Meta Quest VR &amp; Mixed Reality Apps</h2>
        <p>
          This section applies to our Apps distributed on the Meta Horizon Store and other Meta
          platforms for Meta Quest devices (both immersive VR apps and 2D panel apps).
        </p>

        <h3>5.1 Information from the Meta Platform</h3>
        <p>
          When you use our Meta Quest Apps, we may receive the following information from Meta
          through the Meta Platform SDK, only as needed for the features of that App:
        </p>
        <ul>
          <li>
            <strong>Entitlement check</strong>: confirmation that you own a valid copy of the
            App (required by Meta; no personal profile data is needed for this).
          </li>
          <li>
            <strong>Platform user ID and display name / alias</strong>: used to link your save
            data and to show your name on leaderboards and in multiplayer sessions.
          </li>
          <li>
            <strong>Profile picture</strong>: only if an App displays it in-game (for example on
            a leaderboard or in a lobby).
          </li>
          <li>
            <strong>Achievements, leaderboards and cloud storage</strong>: scores, achievement
            progress and save data managed through Meta's platform services.
          </li>
          <li>
            <strong>Friends and social features</strong>: if an App supports inviting or playing
            with friends, Meta may share the limited information needed for those features. We
            do not store your friends list.
          </li>
          <li>
            <strong>In-app purchases</strong>: purchase records (item and status) handled by
            Meta. We never receive your payment information.
          </li>
        </ul>

        <h3>5.2 Device, sensor and movement data</h3>
        <ul>
          <li>
            Our Apps use headset and controller position and orientation, hand tracking, and
            (for mixed reality Apps) passthrough camera and scene / room-setup information solely
            to render the experience and enable gameplay in real time.
          </li>
          <li>
            This sensor and spatial data is processed on your device. We do not record, store,
            transmit or share raw camera images, room scans, hand or body tracking data, eye
            tracking data, or face tracking data.
          </li>
          <li>
            If an App uses the microphone (for example for voice chat), audio is only used to
            provide that feature while it is active and is not recorded or stored by us.
          </li>
          <li>
            We may collect anonymous technical information (headset model, OS version, frame
            rate, crash logs) to fix bugs and improve performance.
          </li>
        </ul>

        <h3>5.3 How we handle Meta Platform data</h3>
        <ul>
          <li>
            We use data from the Meta Platform only to provide and improve the App's features,
            in accordance with the{' '}
            <Ext href="https://developers.meta.com/horizon/policy/data-use/">Meta Developer Data Use Policy</Ext>.
          </li>
          <li>We do not sell Meta Platform data or use it for unrelated advertising.</li>
          <li>
            We do not share Meta Platform data with third parties except service providers who
            help us operate the App (under confidentiality obligations) or where required by law.
          </li>
          <li>
            You can request deletion of any data we hold that is associated with your Meta
            account. See <a href="#deletion">Data Deletion Requests</a>.
          </li>
        </ul>
        <p>
          Meta's own processing of your information is governed by the{' '}
          <Ext href="https://www.meta.com/legal/quest/privacy-policy/">Meta Quest Privacy Policy</Ext>.
        </p>
      </section>

      <section id="use">
        <h2>6. How We Use Information</h2>
        <ul>
          <li>To provide, operate and maintain our Apps and save your progress;</li>
          <li>To enable features such as leaderboards, achievements, multiplayer and purchases;</li>
          <li>To show advertisements in free games (where applicable);</li>
          <li>To analyse usage, fix bugs, and improve performance and gameplay;</li>
          <li>To prevent fraud, cheating and abuse, and keep our Apps secure;</li>
          <li>To respond to your messages and support requests;</li>
          <li>To comply with legal obligations and platform requirements.</li>
        </ul>
      </section>

      <section id="sharing">
        <h2>7. How Information Is Shared</h2>
        <p>We do not sell or rent your personal information. We may share information only:</p>
        <ul>
          <li>With platform providers (Poki, CrazyGames, Google, Meta) as part of running the App on their platform;</li>
          <li>With service providers that provide analytics, advertising, crash reporting or hosting for us;</li>
          <li>If required by law, regulation or legal process, or to protect rights and safety;</li>
          <li>In connection with a merger, acquisition or sale of assets, subject to this policy.</li>
        </ul>
      </section>

      <section id="third-parties">
        <h2>8. Third-Party Services</h2>
        <p>
          Depending on the App, we may use the following third-party services, each governed by
          its own privacy policy:
        </p>
        <ul>
          <li><Ext href="https://poki.com/en/c/privacy-statement">Poki</Ext></li>
          <li><Ext href="https://www.crazygames.com/privacy-policy">CrazyGames</Ext></li>
          <li><Ext href="https://policies.google.com/privacy">Google Play Services, AdMob &amp; Firebase</Ext></li>
          <li><Ext href="https://www.meta.com/legal/quest/privacy-policy/">Meta Platforms / Meta Quest</Ext></li>
          <li><Ext href="https://unity.com/legal/privacy-policy">Unity Technologies</Ext></li>
        </ul>
      </section>

      <section id="retention">
        <h2>9. Data Retention</h2>
        <p>
          We keep information only for as long as needed for the purposes described in this
          policy, or as required by law. Local save data stays on your device until you delete
          the App or clear its data. Support emails are kept for as long as needed to resolve
          your request.
        </p>
      </section>

      <section id="deletion">
        <h2>10. Data Deletion Requests</h2>
        <p>You can delete your data at any time:</p>
        <ul>
          <li>
            <strong>Local data:</strong> uninstall the App, clear the App's storage (Android /
            Meta Quest), or clear your browser's site data (web games).
          </li>
          <li>
            <strong>Data held by us:</strong> email <Mail /> with the subject "Data Deletion
            Request", the name of the App and the platform (Web, Android or Meta Quest). For Meta
            Quest Apps, include your Meta username so we can locate your data. We will delete
            the associated data within 30 days and confirm by email.
          </li>
          <li>
            <strong>Platform data:</strong> data held by Poki, CrazyGames, Google or Meta can be
            managed or deleted through those platforms' account and privacy settings.
          </li>
        </ul>
      </section>

      <section id="rights">
        <h2>11. Your Privacy Rights</h2>
        <p>
          Depending on where you live (for example under the EU/UK GDPR or the California
          CCPA/CPRA), you may have the right to access, correct, delete or port your personal
          information, to object to or restrict certain processing, to withdraw consent, and to
          opt out of personalised advertising. To exercise any of these rights, contact us
          at <Mail />. You also have the right to lodge a complaint with your local data
          protection authority.
        </p>
      </section>

      <section id="children">
        <h2>12. Children's Privacy</h2>
        <p>
          Our Apps are intended for a general audience. We do not knowingly collect personal
          information from children under 13 (or the minimum age required in your country)
          without verifiable parental consent. Meta Quest Apps are subject to Meta's age
          requirements for Meta accounts. If you believe a child has provided us with personal
          information, please contact us and we will delete it.
        </p>
      </section>

      <section id="security">
        <h2>13. Security</h2>
        <p>
          We use reasonable technical and organisational measures to protect information.
          However, no method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section id="changes">
        <h2>14. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest version will always be
          available on this page, with the "Last updated" date shown at the top.
        </p>
      </section>

      <section id="contact">
        <h2>15. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, contact{' '}
          {COMPANY} at <Mail />.
        </p>
      </section>
    </div>
  );
}
