import { useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

import Branding from "./projects/Branding";
import Digital from "./projects/Digital";
import Creative from "./projects/Creative";

gsap.registerPlugin(ScrollTrigger);


// =====================================================
// HOME PAGE
// =====================================================

function Home() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  const aboutRef = useRef(null);
  const aboutContentRef = useRef(null);

  const servicesRef = useRef(null);
  const serviceCardsRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      // =================================================
      // INITIAL HERO TITLE ANIMATION
      // =================================================

      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );


      // =================================================
      // INITIAL STATISTICS ANIMATION
      // =================================================

      gsap.fromTo(
        statsRef.current.children,
        {
          opacity: 0,
          y: 25
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.5,
          ease: "power3.out"
        }
      );


      // =================================================
      // MAIN HERO VISUAL - SCROLL DRIVEN
      // =================================================

      gsap.to(visualRef.current, {
        x: 120,
        y: 180,
        scale: 0.7,
        rotate: 15,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });


      // =================================================
      // ABOUT SECTION ANIMATION
      // =================================================

      gsap.fromTo(
        aboutContentRef.current.children,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );


      // =================================================
      // SERVICES ANIMATION
      // =================================================

      gsap.fromTo(
        serviceCardsRef.current.children,
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, heroRef);


    return () => {
      ctx.revert();
    };

  }, []);


  return (
    <main>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        ref={heroRef}
        id="home"
        className="hero"
      >

        <div className="hero-glow"></div>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav className="hero-nav">

          <Link
            to="/"
            className="logo"
          >
            ITZ<span>FIZZ</span>
          </Link>


          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div className="scroll-text">
            Scroll to explore
          </div>

        </nav>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content">

          <h1
            ref={titleRef}
            className="hero-title"
          >
            W E L C O M E

            <br />

            <span>
              I T Z F I Z Z
            </span>
          </h1>


          {/* =================================================
              MAIN VISUAL
          ================================================= */}

          <div
            ref={visualRef}
            className="visual"
          >

            <div className="visual-logo">

              <strong>
                IF
              </strong>

              <small>
                Creative
              </small>

            </div>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div
            ref={statsRef}
            className="stats"
          >

            <div className="stat">

              <div className="stat-number">
                85%
              </div>

              <div className="stat-label">
                Engagement
              </div>

            </div>


            <div className="stat">

              <div className="stat-number">
                70%
              </div>

              <div className="stat-label">
                Growth
              </div>

            </div>


            <div className="stat">

              <div className="stat-number">
                95%
              </div>

              <div className="stat-label">
                Satisfaction
              </div>

            </div>

          </div>

        </div>


        <div className="scroll-indicator">
          Scroll ↓
        </div>

      </section>


      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        ref={aboutRef}
        id="about"
        className="about-section"
      >

        <div
          ref={aboutContentRef}
          className="about-content"
        >

          <p className="about-label">
            Who we are
          </p>


          <h2 className="about-title">
            We turn ideas
            <br />
            into <span>experiences.</span>
          </h2>


          <p className="about-description">
            ITZFIZZ is a creative digital space focused on
            building memorable experiences through design,
            technology and creativity.
          </p>


          <p className="about-description">
            From visual identities to digital experiences,
            we bring ideas to life with creative thinking
            and modern technology.
          </p>


          <div className="about-highlight">

            <span>
              01
            </span>

            <p>
              Creative thinking.
              <br />
              Digital execution.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <section
        ref={servicesRef}
        id="services"
        className="services-section"
      >

        <div className="services-header">

          <p className="services-label">
            What we create
          </p>


          <h2 className="services-title">
            Ideas that move.
          </h2>


          <p className="services-description">
            Creative digital solutions designed to make
            brands stand out and connect with people.
          </p>

        </div>


        <div
          ref={serviceCardsRef}
          className="service-cards"
        >

          {/* =================================================
              BRANDING CARD
          ================================================= */}

          <Link
            to="/branding"
            className="service-card"
          >

            <div className="service-number">
              01
            </div>

            <h3>
              Branding
            </h3>

            <p>
              Building memorable identities that give
              brands a strong visual presence.
            </p>

            <span className="service-arrow">
              ↗
            </span>

          </Link>


          {/* =================================================
              DIGITAL CARD
          ================================================= */}

          <Link
            to="/digital"
            className="service-card"
          >

            <div className="service-number">
              02
            </div>

            <h3>
              Digital
            </h3>

            <p>
              Creating modern digital experiences that
              are engaging, responsive and intuitive.
            </p>

            <span className="service-arrow">
              ↗
            </span>

          </Link>


          {/* =================================================
              CREATIVE CARD
          ================================================= */}

          <Link
            to="/creative"
            className="service-card"
          >

            <div className="service-number">
              03
            </div>

            <h3>
              Creative
            </h3>

            <p>
              Turning ideas into visual experiences
              that capture attention and inspire action.
            </p>

            <span className="service-arrow">
              ↗
            </span>

          </Link>

        </div>

      </section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <p className="contact-label">
          Let's create
        </p>


        <h2 className="contact-title">

          Have an idea?

          <br />

          <span>
            Let's make it happen.
          </span>

        </h2>


        <a
          href="mailto:hello@itzfizz.com"
          className="contact-button"
        >
          Get in touch ↗
        </a>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-logo">
          ITZ<span>FIZZ</span>
        </div>


        <p>
          Creative digital experiences.
        </p>


        <div className="footer-copy">
          © 2026 ITZFIZZ. All rights reserved.
        </div>

      </footer>

    </main>
  );
}


// =====================================================
// APP ROUTES
// =====================================================

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/branding"
        element={<Branding />}
      />

      <Route
        path="/digital"
        element={<Digital />}
      />

      <Route
        path="/creative"
        element={<Creative />}
      />

    </Routes>

  );
}


export default App;