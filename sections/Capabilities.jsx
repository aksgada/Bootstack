import { useState } from 'react';
import SectionMarker from '../components/SectionMarker.jsx';
import { capabilities } from '../data/capabilities';
import { useIsDesktop } from '../hooks/useMediaQuery';
import './Capabilities.css';

/**
 * Section 03 — six territories presented as an index you open, not a grid of
 * cards. Pointer devices reveal a row on hover; touch and keyboard toggle it.
 */
export default function Capabilities() {
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(0);

  const toggle = (i) => setActive((current) => (current === i ? -1 : i));

  return (
    <section id="capabilities" className="cap band" data-bg="white">
      <div className="shell">
        <SectionMarker index="03" title="What Bootstack does" note="Six territories, one team" />

        <div className="cap__head">
          <h2 className="display display--xl" data-reveal>
            Everything a business needs to be seen, believed and bought  kept under
            one roof.
          </h2>
          <p className="body" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Open a territory to see what sits inside it.
          </p>
        </div>

        <div className="cap__list" onMouseLeave={() => isDesktop && setActive(-1)}>
          {capabilities.map((item, i) => {
            const isOpen = active === i;
            return (
              <article
                key={item.id}
                className={`cap__row cap__row--${item.tone}${isOpen ? ' is-open' : ''}`}
                onMouseEnter={() => isDesktop && setActive(i)}
                data-reveal
                style={{ '--reveal-delay': `${i * 55}ms` }}
              >
                <button
                  type="button"
                  className="cap__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`cap-panel-${item.id}`}
                  onClick={() => toggle(i)}
                >
                  <span className="cap__index mono">{item.index}</span>
                  <span className="cap__title display">{item.title}</span>
                  <span className="cap__verb">{item.verb}</span>
                  <span className="cap__sign" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </button>

                <div className="cap__panel" id={`cap-panel-${item.id}`} role="region">
                  <div className="cap__panel-inner">
                    <p className="cap__blurb">{item.blurb}</p>
                    <ul className="cap__items">
                      {item.items.map((sub) => (
                        <li key={sub}>
                          <span className="mono">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
