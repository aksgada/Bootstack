import Wordmark from '../components/Wordmark.jsx';
import { brand, nav, footerServices, socials, contact } from '../data/site';
import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="foot" data-bg="cyandeep">
      <div className="shell">
        <div className="foot__top">
          <a className="foot__brand" href="#top" aria-label={`${brand.name} — back to top`}>
            <Wordmark size="lg" />
          </a>
          <p className="foot__tagline display">{brand.tagline}</p>
        </div>

        <div className="foot__cols">
          <nav className="foot__col" aria-label="Footer">
            <h2 className="foot__label mono">Navigate</h2>
            <ul>
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="foot__col">
            <h2 className="foot__label mono">Services</h2>
            <ul>
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#capabilities">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot__col">
            <h2 className="foot__label mono">Social</h2>
            <ul>
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer noopener">
                    {social.label}
                    <span className="foot__handle mono">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className="foot__col foot__contact">
            <h2 className="foot__label mono">Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
              </li>
              <li>
                <span>{contact.location}</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="foot__base">
          <p className="mono">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <p className="mono foot__note">Branding + Marketing + Technology + Automation</p>
          <a className="foot__top-link mono" href="#top">
            Back to top
            <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
