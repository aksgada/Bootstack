import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion';
import SectionMarker from '../components/SectionMarker.jsx';
import Counter from '../components/Counter.jsx';
import { impact } from '../data/approach';
import './Impact.css';

/* ---------------------------------------------------------
   SIMPLE ICONS
--------------------------------------------------------- */

const IMPACT_ICONS = [
  '◷',
  '▤',
  '◈',
  '✦',
  '⌖',
];

export default function Impact() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------------------------------------------------
         REDUCED MOTION
      --------------------------------------------------- */

      if (prefersReducedMotion()) {
        gsap.set('.impact__header > *', {
          opacity: 1,
          y: 0,
        });

        gsap.set('.impact__stat', {
          opacity: 1,
          y: 0,
        });

        return;
      }

      /* ---------------------------------------------------
         HEADER ANIMATION
      --------------------------------------------------- */

      gsap.fromTo(
        '.impact__header > *',
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.impact__main',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      /* ---------------------------------------------------
         STATISTICS ANIMATION
      --------------------------------------------------- */

      gsap.fromTo(
        '.impact__stat',
        {
          opacity: 0,
          y: 40,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.impact__stats',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      /* ---------------------------------------------------
         ICON ANIMATION
      --------------------------------------------------- */

      gsap.fromTo(
        '.impact__icon',
        {
          scale: 0.5,
          rotate: -15,
          opacity: 0,
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.impact__stats',
            start: 'top 85%',
          },
        },
      );

      /* ---------------------------------------------------
         BACKGROUND DECORATION
      --------------------------------------------------- */

      gsap.to('.impact__orb', {
        y: -25,
        x: 15,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="impact band"
      data-bg="white"
    >

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="impact__background"
        aria-hidden="true"
      >
        <span className="impact__orb impact__orb--one" />
        <span className="impact__orb impact__orb--two" />
        <span className="impact__grid" />
      </div>


      <div className="shell">

        {/* =================================================
            SECTION MARKER
        ================================================= */}

        <SectionMarker
          index="09"
          title="Results"
          note="The numbers behind the work"
        />


        {/* =================================================
            MAIN ROW
        ================================================= */}

        <div className="impact__main">


          {/* ===============================================
              LEFT CONTENT
          =============================================== */}

          <div className="impact__header">

            <div className="impact__eyebrow mono">
              <span className="impact__eyebrow-line" />
              MEASURED IMPACT
            </div>


            <h2 className="impact__title display display--xl">

              What the work

              <span>
                adds up to.
              </span>

            </h2>


            <p className="impact__intro">

              We don't just build digital experiences.
              We build systems designed to create measurable,
              meaningful business outcomes.

            </p>


            <div className="impact__header-meta">

              <span className="mono">
                PERFORMANCE
              </span>

              <span className="impact__meta-dot" />

              <span className="mono">
                GROWTH
              </span>

              <span className="impact__meta-dot" />

              <span className="mono">
                RESULTS
              </span>

            </div>

          </div>


          {/* ===============================================
              RIGHT STATISTICS
          =============================================== */}

          <ol className="impact__stats">

            {impact.map((row, i) => (

              <li
                className="impact__stat"
                key={row.label}
              >

                {/* Accent glow */}

                <span
                  className="impact__stat-glow"
                  aria-hidden="true"
                />


                {/* Icon */}

                <div className="impact__icon-wrap">

                  <span className="impact__icon">
                    {IMPACT_ICONS[i] || '✦'}
                  </span>

                </div>


                {/* Number */}

                <div className="impact__value">

                  <Counter
                    value={row.value}
                    suffix={row.suffix}
                  />

                </div>


                {/* Label */}

                <h3 className="impact__label">
                  {row.label}
                </h3>


                {/* Description */}

                <p className="impact__note">
                  {row.note}
                </p>


                {/* Bottom indicator */}

                <div className="impact__stat-bottom">

                  <span className="mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="impact__arrow">
                    ↗
                  </span>

                </div>


                {/* Hover line */}

                <span
                  className="impact__hover-line"
                  aria-hidden="true"
                />

              </li>

            ))}

          </ol>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="impact__bottom">

          <div className="impact__bottom-left">

            <span className="impact__bottom-line" />

            <span className="mono">
              PERFORMANCE × GROWTH × RESULTS
            </span>

          </div>


          <p>
            Measured across client engagements since launch.
          </p>


          <span className="impact__bottom-mark">
            ✦
          </span>

        </div>

      </div>

    </section>
  );
}