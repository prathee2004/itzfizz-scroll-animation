import { Link } from "react-router-dom";

function Digital() {
  return (
    <main className="digital-page">

      {/* NAVIGATION */}
      <nav className="digital-nav">
        <Link to="/" className="digital-logo">
          ITZ<span>FIZZ</span>
        </Link>

        <Link to="/" className="digital-back">
          ← BACK HOME
        </Link>
      </nav>

      {/* HERO */}
      <section className="digital-hero">

        <p className="digital-label">
          02 — DIGITAL
        </p>

        <h1 className="digital-title">
          Digital
          <br />
          <span>Experiences.</span>
        </h1>

        <p className="digital-intro">
          We create modern digital experiences that are
          engaging, responsive and intuitive.
        </p>

      </section>

      {/* SERVICES */}
      <section className="digital-services">

        <div className="digital-service">
          <span className="digital-number">01</span>

          <div className="digital-service-content">
            <h2>Web Experiences</h2>

            <p>
              Designing websites and digital platforms that
              combine clean visuals, smooth interactions and
              intuitive user experiences.
            </p>
          </div>
        </div>

        <div className="digital-service">
          <span className="digital-number">02</span>

          <div className="digital-service-content">
            <h2>UI / UX Design</h2>

            <p>
              Creating user-focused interfaces that are simple,
              functional and visually engaging across devices.
            </p>
          </div>
        </div>

        <div className="digital-service">
          <span className="digital-number">03</span>

          <div className="digital-service-content">
            <h2>Technology</h2>

            <p>
              Bringing creative concepts to life through modern
              web technologies and interactive digital solutions.
            </p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="digital-cta">

        <p className="digital-cta-label">
          HAVE A DIGITAL IDEA?
        </p>

        <h2>
          Let's build
          <br />
          <span>something great.</span>
        </h2>

        <a
          href="mailto:hello@itzfizz.com"
          className="digital-button"
        >
          GET IN TOUCH ↗
        </a>

      </section>

      {/* FOOTER */}
      <footer className="digital-footer">

        <div className="digital-footer-logo">
          ITZ<span>FIZZ</span>
        </div>

        <p>
          Creative digital experiences.
        </p>

        <div>
          © 2026 ITZFIZZ. All rights reserved.
        </div>

      </footer>

    </main>
  );
}

export default Digital;