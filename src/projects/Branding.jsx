import { Link } from "react-router-dom";

function Branding() {
  return (
    <main className="project-page">
      <nav className="project-nav">
        <Link to="/" className="logo">
          ITZ<span>FIZZ</span>
        </Link>

        <Link to="/" className="back-link">
          ← Back Home
        </Link>
      </nav>

      <section className="project-hero">
        <p className="project-label">01 — BRANDING</p>

        <h1>
          Building memorable
          <br />
          <span>brand identities.</span>
        </h1>

        <p className="project-intro">
          We create distinctive visual identities that help
          brands build recognition, communicate clearly and
          connect with their audience.
        </p>
      </section>

      <section className="project-details">

        <div className="project-detail">
          <span>01</span>
          <h2>Brand Strategy</h2>
          <p>
            Defining the personality, direction and visual
            language of a brand.
          </p>
        </div>

        <div className="project-detail">
          <span>02</span>
          <h2>Visual Identity</h2>
          <p>
            Creating logos, typography, colours and visual
            systems that feel consistent.
          </p>
        </div>

        <div className="project-detail">
          <span>03</span>
          <h2>Brand Experience</h2>
          <p>
            Turning the identity into memorable digital
            and visual experiences.
          </p>
        </div>

      </section>
    </main>
  );
}

export default Branding;