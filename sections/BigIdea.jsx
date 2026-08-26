import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion';
import Marquee from '../components/Marquee.jsx';
import SectionMarker from '../components/SectionMarker.jsx';
import './BigIdea.css';

const SERVICES = [
  {
    number: '01',
    category: 'TECHNOLOGY',
    title: 'ERP Solutions',
    body:
      'Streamline sales, inventory, projects, finance, HR and business workflows through one powerful custom ERP platform.',
    tag: 'SYSTEMS',
    accent: '#168cff',
    icon: '▤',
  },
  {
    number: '02',
    category: 'MOBILE',
    title: 'Mobile App Development',
    body:
      'Build fast, secure and user-friendly Android and iOS applications that create seamless digital experiences.',
    tag: 'APPS',
    accent: '#9b6cff',
    icon: '▯',
  },
  {
    number: '03',
    category: 'WEB',
    title: 'High-Performing Websites',
    body:
      'Create fast, responsive and conversion-focused websites that showcase your brand and generate business.',
    tag: 'WEBSITES',
    accent: '#16bfae',
    icon: '◎',
  },
  {
    number: '04',
    category: 'GROWTH',
    title: 'Lead Generation',
    body:
      'Generate quality leads through SEO, performance marketing, landing pages and data-driven campaigns.',
    tag: 'MARKETING',
    accent: '#ff9b24',
    icon: '◉',
  },
  {
    number: '05',
    category: 'BRAND',
    title: 'Brand Identity & Branding',
    body:
      'Build a memorable brand with strong identity, compelling messaging and consistent visual communication.',
    tag: 'IDENTITY',
    accent: '#e4bd19',
    icon: '◇',
  },
];

export default function BigIdea() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set('.service-card', {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        gsap.set('.idea__intro > *', {
          opacity: 1,
          y: 0,
        });

        return;
      }

      // Intro animation
      gsap.fromTo(
        '.idea__intro > *',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.idea__intro',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Cards animation
      gsap.fromTo(
        '.service-card',
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 82%',
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
      id="idea"
      className="idea band"
      data-bg="mist"
    >
      {/* TOP MARQUEE */}
      <div className="idea__seam">
        <Marquee
          items={['Brand', 'System', 'Growth']}
          size="lg"
          speed={30}
        />
      </div>

      <div className="shell">

        {/* SECTION MARKER */}
        <SectionMarker
          index="02"
          title="What We Build"
        />

        {/* INTRO */}
        <div className="idea__intro">

          <div className="idea__intro-copy">

            <span className="idea__eyebrow mono">
              OUR SERVICES
            </span>

            <h2 className="idea__heading">
              Digital solutions
              <span>that drive</span>
              <strong>real impact.</strong>
            </h2>

          </div>

          <div className="idea__intro-side">

            <span className="idea__intro-line" />

            <p className="idea__intro-text">
              We combine strategy, design, technology and growth
              to build scalable digital experiences that move
              ambitious businesses forward.
            </p>

          </div>

        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {SERVICES.map((service) => (
            <article
              className="service-card"
              key={service.number}
              style={{
                '--accent': service.accent,
              }}
            >

              {/* Accent glow */}
              <div className="service-card__glow" />

              {/* TOP */}
              <div className="service-card__top">

                <div className="service-card__number">
                  <span>{service.number}</span>
                </div>

                <span className="service-card__category mono">
                  {service.category}
                </span>

              </div>

              {/* VISUAL */}
              <div className="service-card__visual">

                <div className="service-card__icon">
                  {service.icon}
                </div>

                <div className="service-card__orbit orbit-1" />
                <div className="service-card__orbit orbit-2" />

              </div>

              {/* CONTENT */}
              <div className="service-card__content">

                <span className="service-card__tag">
                  {service.tag}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.body}
                </p>

              </div>

              {/* FOOTER */}
              <div className="service-card__footer">

                <span>
                  Explore Service
                </span>

                <span className="service-card__arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM STRIP */}
        <div className="idea__bottom">

          <div className="idea__bottom-brand">

            <span className="idea__bottom-icon">
              ✦
            </span>

            <div>
              <strong>
                ONE PARTNER.
              </strong>

              <span>
                ENDLESS POSSIBILITIES.
              </span>
            </div>

          </div>

          <div className="idea__bottom-points">

            <span>Strategy First</span>
            <span>Built To Scale</span>
            <span>Focused On Results</span>

          </div>

        </div>

      </div>
    </section>
  );
}