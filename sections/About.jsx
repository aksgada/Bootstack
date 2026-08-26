import { useEffect, useRef } from 'react';
import { gsap } from '../lib/motion';
import SectionMarker from '../components/SectionMarker.jsx';
import './About.css';

const INTERSECTION = ['Branding', 'Creativity', 'Marketing', 'Technology', 'Automation'];

const FACTS = [
  { k: 'Based in', v: 'Pune, India' },
  { k: 'Working with', v: 'Startups, D2C, local operators' },
  { k: 'Engagements', v: 'Project or retained partner' },
];

/** Section 11 — who Bootstack is, kept short and set large. */
export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.about__word', {
          xPercent: (i) => (i % 2 ? -6 : 6),
          ease: 'none',
          scrollTrigger: {
            trigger: '.about__words',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.9,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="about" className="about band" data-bg="white">
      <div className="shell">
        <SectionMarker index="11" title="About Bootstack" />

        <h2 className="about__statement display display--xxl" data-reveal>
          We build brands that are ready for <span className="accent">what comes next.</span>
        </h2>
      </div>

      <div className="about__words" aria-hidden="true">
        {INTERSECTION.map((word) => (
          <span className="about__word display" key={word}>
            {word}
          </span>
        ))}
      </div>

      <div className="shell about__grid">
        <div className="about__copy">
          <p className="lead" data-reveal>
            Bootstack sits at the intersection of branding, creativity, marketing,
            technology and automation — because that is where growth actually happens.
          </p>
          <p className="body" data-reveal style={{ '--reveal-delay': '80ms' }}>
            We are a small, senior team that prefers to own the whole chain rather than a
            slice of it. One group decides the positioning, makes the work, ships the
            platform and runs the media — so nothing gets lost in translation, and there is
            never a question about who is accountable for the number.
          </p>
        </div>

        <dl className="about__facts">
          {FACTS.map((fact, i) => (
            <div className="about__fact" key={fact.k} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              <dt className="mono">{fact.k}</dt>
              <dd>{fact.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
