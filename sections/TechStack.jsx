import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion';
import SectionMarker from '../components/SectionMarker.jsx';
import Marquee from '../components/Marquee.jsx';
import { stack } from '../data/approach';
import './TechStack.css';

const GROUPS = ['Build', 'Reach', 'Measure', 'Operate'];

const GROUP_NOTE = {
  Build: 'Where the traffic lands',
  Reach: 'How the message travels',
  Measure: 'What the money is doing',
  Operate: 'What runs without us',
};

const GROUP_META = {
  Build: {
    number: '01',
    label: 'BUILD',
    icon: '⌘',
  },
  Reach: {
    number: '02',
    label: 'REACH',
    icon: '↗',
  },
  Measure: {
    number: '03',
    label: 'MEASURE',
    icon: '◌',
  },
  Operate: {
    number: '04',
    label: 'OPERATE',
    icon: '⚙',
  },
};

/**
 * Section 08 — Technology + Marketing
 * Premium ecosystem-style technology stack.
 */
export default function TechStack() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set('.tech__lede > *', {
          opacity: 1,
          y: 0,
        });

        gsap.set('.tech__module', {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        '.tech__lede > *',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tech__lede',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.tech__module',
        {
          opacity: 0,
          y: 45,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tech__board',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.tech__item',
        {
          opacity: 0,
          x: -12,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tech__board',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="tech band"
      data-bg="white"
      id="technology"
    >
      <div className="shell">

        {/* Section marker */}
        <SectionMarker
          index="08"
          title="Technology + Marketing"
          note="The system behind the story"
        />

        {/* Main layout */}
        <div className="tech__grid">

          {/* LEFT CONTENT */}
          <div className="tech__lede">

            <span className="tech__eyebrow mono">
              OUR TECHNOLOGY STACK
            </span>

            <h2
              className="display display--xl"
              data-reveal
            >
              Creative ideas are stronger when the
              <span className="tech__highlight">
                system behind them works.
              </span>
            </h2>

            <p
              className="body"
              data-reveal
              style={{ '--reveal-delay': '80ms' }}
            >
              A campaign is only as good as the page it lands on,
              the tracking that proves it, and the follow-up that
              happens when nobody is at a desk.
            </p>

            <p
              className="tech__small-copy"
              data-reveal
            >
              We connect technology, marketing and automation into
              one scalable digital ecosystem.
            </p>

            <div className="tech__stats">

              <div className="tech__stat">
                <strong>04</strong>
                <span className="mono">
                  CORE SYSTEMS
                </span>
              </div>

              <div className="tech__stat">
                <strong>∞</strong>
                <span className="mono">
                  POSSIBILITIES
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT STACK */}
          <div className="tech__board">

            {GROUPS.map((group, gi) => {
              const meta = GROUP_META[group];

              return (
                <article
                  className="tech__module"
                  key={group}
                  style={{
                    '--module-index': gi,
                  }}
                >

                  {/* Accent */}
                  <span
                    className="tech__module-accent"
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="tech__module-head">

                    <div className="tech__module-number">
                      <span className="mono">
                        {meta.number}
                      </span>
                    </div>

                    <div className="tech__module-info">

                      <div className="tech__module-title-row">

                        <span className="tech__module-name mono">
                          {meta.label}
                        </span>

                        <span className="tech__module-icon">
                          {meta.icon}
                        </span>

                      </div>

                      <span className="tech__module-note">
                        {GROUP_NOTE[group]}
                      </span>

                    </div>

                  </div>

                  {/* Technologies */}
                  <ul className="tech__items">

                    {stack
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <li
                          className="tech__item"
                          key={item.label}
                        >

                          <span
                            className="tech__pip"
                            aria-hidden="true"
                          />

                          <span>
                            {item.label}
                          </span>

                          <span
                            className="tech__item-arrow"
                            aria-hidden="true"
                          >
                            ↗
                          </span>

                        </li>
                      ))}

                  </ul>

                  {/* Bottom */}
                  <div className="tech__module-footer">

                    <span className="mono">
                      SYSTEM {meta.number}
                    </span>

                    <span className="tech__status">
                      <i />
                      ACTIVE
                    </span>

                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="tech__seam">

        <Marquee
          items={[
            'Websites',
            'Automation',
            'Analytics',
            'WhatsApp',
            'Email',
            'AI workflows',
          ]}
          size="md"
          speed={44}
          reverse
        />

      </div>
    </section>
  );
}