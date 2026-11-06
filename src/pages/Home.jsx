import { CONTACT_EMAIL } from '../config.js';

const platforms = [
  {
    icon: '🌐',
    title: 'Web Games',
    text: 'Instant-play HTML5 games that run in any browser — published on portals like Poki and CrazyGames.',
  },
  {
    icon: '📱',
    title: 'Android',
    text: 'Polished mobile games and apps built for phones and tablets, available on Google Play.',
  },
  {
    icon: '🥽',
    title: 'Meta Quest VR',
    text: 'Fully immersive virtual reality experiences designed for Meta Quest headsets.',
  },
  {
    icon: '✨',
    title: 'Mixed Reality / AR',
    text: 'Passthrough and mixed reality apps that blend playful content with your real-world space.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow">Games Studio</span>
            <h1>
              We make <span className="gradient-text">play</span> happen — everywhere.
            </h1>
            <p>
              Playzo is an independent games studio creating fun, colourful experiences for the
              web, Android, and Meta Quest VR &amp; AR.
            </p>
            <div className="hero-actions">
              <a href="#platforms" className="btn btn-primary">What we build</a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
            </div>
          </div>
          <div className="hero-logo">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Playzo Games Studio" />
          </div>
        </div>
      </section>

      <section id="platforms" className="section">
        <div className="container">
          <h2 className="section-title">Platforms</h2>
          <p className="section-sub">One studio, many ways to play.</p>
          <div className="grid">
            {platforms.map((p) => (
              <div className="card" key={p.title}>
                <div className="card-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about">
          <h2 className="section-title">About Playzo</h2>
          <p>
            We believe games should be easy to pick up and hard to put down. From quick browser
            games to immersive VR worlds, every Playzo title is built with bright visuals, tight
            controls and a focus on pure fun — while respecting player privacy.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact">
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">Partnerships, publishing, support or just saying hi.</p>
          <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </section>
    </>
  );
}
