import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';
import HeroField from '../components/HeroField.jsx';
import MagneticButton from '../components/MagneticButton.jsx';
import { brand } from '../data/site';
import './Hero.css';

const LINES = ['Technology', 'That Builds', "Tomorrow's Brands."];

export default function Hero({ ready }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!ready) return undefined;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ delay: 0.1 });

        tl.from('.hero__eyebrow > *', {
          yPercent: 130,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.06,
        })
          .from(
            '.hero__line > span',
            { yPercent: 118, duration: 1.25, ease: 'expo.out', stagger: 0.09 },
            0.1,
          )
          .from(
            ['.hero__support', '.hero__ctas', '.hero__cue', '.hero__ledger'],
            { y: 26, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.08 },
            0.55,
          )
          .from('.field', { opacity: 0, duration: 1.6, ease: 'power2.out' }, 0);
      }

      // Departure: the headline lifts and thins out as the next chapter arrives.
      gsap.to('.hero__type', {
        yPercent: -18,
        opacity: 0.06,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        },
      });

      gsap.to('.hero__aside', {
        y: -70,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 0.4,
        },
      });

      gsap.to('.field', {
        opacity: 0.08,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section ref={rootRef} className="hero band band--flush" data-bg="white" aria-labelledby="hero-title">
      <HeroField />

      <div className="hero__inner shell">
        <p className="hero__eyebrow mono">
          <span>{brand.positioning}</span>
        </p>

        <h1 id="hero-title" className="hero__type display display--mega">
          {LINES.map((line, i) => (
            <span className={`hero__line hero__line--${i + 1}`} key={line}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero__aside">
          <div className="hero__support">
            <span className="hero__rule" aria-hidden="true" />
            <p className="lead">
              We build brands, websites, software, AI automation and marketing systems that help ambitious businesses grow, scale and lead with confidence.
            </p>
          </div>

          <div className="hero__ctas">
            <MagneticButton href="#contact" variant="solid">
              Start a Project
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              Explore Our Work
            </MagneticButton>
          </div>
        </div>

        <div className="hero__foot">
          <a className="hero__cue" href="#idea" aria-label="Scroll to the next section">
            <span className="mono">Scroll</span>
            <span className="hero__cue-line" aria-hidden="true" />
          </a>

          <ul className="hero__ledger mono" aria-hidden="true">
            <li>01 — Brand</li>
            <li>02 — Create</li>
            <li>03 — Grow</li>
            <li>04 — Build</li>
            <li>05 — Automate</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
