import { useEffect, useRef } from 'react';
import { gsap } from '../lib/motion';
import MagneticButton from '../components/MagneticButton.jsx';
import { contact } from '../data/site';
import './FinalCta.css';

const HEADING = ['Ready to build', "what's next?"];

/**
 * Section 12 — the closing beat. The ground turns brand yellow, the type fills
 * the screen, and everything the visitor needs to start a conversation is here.
 */
export default function FinalCta() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.cta__line > span', {
          yPercent: 112,
          duration: 1.15,
          ease: 'expo.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.cta__heading', start: 'top 82%' },
        });

        // The oversized wordmark drifts across the closing frame.
        gsap.to('.cta__ghost', {
          xPercent: -14,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="contact" className="cta band" data-bg="yellow">
      <span className="cta__ghost display" aria-hidden="true">
        BOOTSTACK BOOTSTACK
      </span>

      <div className="shell cta__inner">
        <p className="cta__eyebrow mono" data-reveal>
          Let&rsquo;s begin
        </p>

        <h2 className="cta__heading display display--mega">
          {HEADING.map((line, i) => (
            <span className={`cta__line cta__line--${i + 1}`} key={line}>
              <span>{line}</span>
            </span>
          ))}
        </h2>

        <div className="cta__body">
          <p className="cta__support lead" data-reveal>
            Tell us what you&rsquo;re building, where you want to go, and what needs to grow.
            We&rsquo;ll come back with a straight answer about whether we&rsquo;re the right
            people for it.
          </p>

          <div className="cta__actions" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <MagneticButton href={`mailto:${contact.email}`} variant="solid">
              Start a Project
            </MagneticButton>
            <MagneticButton href={`tel:${contact.phone.replace(/\s+/g, '')}`} variant="ghost">
              Talk to Bootstack
            </MagneticButton>
          </div>
        </div>

        <ul className="cta__details">
          <li data-reveal>
            <span className="mono">Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li data-reveal style={{ '--reveal-delay': '60ms' }}>
            <span className="mono">Phone</span>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
          </li>
          <li data-reveal style={{ '--reveal-delay': '120ms' }}>
            <span className="mono">Studio</span>
            <span>{contact.location}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
