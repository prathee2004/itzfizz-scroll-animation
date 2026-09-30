import { Link } from "react-router-dom";

function Creative() {
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
        <p className="project-label">03 — CREATIVE</p>

        <h1>
          Turning ideas into
          <br />
          <span>visual experiences.</span>
        </h1>

        <p className="project-intro">
          We transform ideas into creative visual experiences
          designed to capture attention and inspire action.
        </p>
      </section>

      <section className="project-details">

        <div className="project-detail">
          <span>01</span>
          <h2>Creative Direction</h2>
          <p>
            Developing creative concepts that communicate
            ideas clearly and effectively.
          </p>
        </div>

        <div className="project-detail">
          <span>02</span>
          <h2>Visual Design</h2>
          <p>
            Creating engaging graphics, layouts and visual
            experiences for digital platforms.
          </p>
        </div>

        <div className="project-detail">
          <span>03</span>
          <h2>Content Creation</h2>
          <p>
            Producing creative content that connects brands
            with their audiences.
          </p>
        </div>

      </section>
    </main>
  );
}

export default Creative;