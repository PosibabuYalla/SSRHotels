import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer({ property }) {
  const isPrime = property === 'prime';

  const bg         = isPrime ? 'hsl(222,47%,7%)'          : 'hsl(20,10%,12%)';
  const border     = isPrime ? 'rgba(100,116,139,0.2)'     : 'rgba(255,255,255,0.1)';
  const accent     = isPrime ? '#CBD5E1'                   : 'hsl(12,58%,50%)';
  const mutedColor = isPrime ? 'rgba(255,255,255,0.45)'    : 'rgba(255,255,255,0.45)';
  const textColor  = 'rgba(255,255,255,0.75)';

  const base = isPrime ? '/prime' : '/residency';

  const navLinks = [
    { to: base,               label: 'Home'      },
    { to: `${base}/about`,    label: 'About'     },
    { to: `${base}/rooms`,    label: 'Rooms'     },
    { to: `${base}/amenities`,label: 'Amenities' },
    { to: `${base}/contact`,  label: 'Contact'   },
  ];

  const contact = isPrime
    ? { address: 'Opp. Anna Canteen, Three Pillars Center, Machilipatnam', phone: '+91 90596 95599', email: 'sunkarastarresidency@gmail.com' }
    : { address: 'Godugupet, Indian Bank Road, Near Koneru Center, Machilipatnam', phone: '+91 95848 48666', email: 'sunkarastarresidency@gmail.com' };

  return (
    <footer style={{ background: bg, borderTop: `1px solid ${border}`, color: textColor, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,4vw,3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>

        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600, color: accent, lineHeight: 1 }}>
            SSR {isPrime ? 'Prime' : 'Residency'}
          </span>
          <p style={{ fontSize: '0.83rem', lineHeight: 1.7, color: mutedColor, maxWidth: '220px' }}>
            {isPrime
              ? 'Premium hospitality at Three Pillars Center, Machilipatnam.'
              : 'Comfortable stays in the heart of Godugupet, Machilipatnam.'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
            {[
              { href: 'https://instagram.com', icon: <Instagram size={17} /> },
              { href: 'https://facebook.com',  icon: <Facebook  size={17} /> },
              { href: 'https://twitter.com',   icon: <Twitter   size={17} /> },
            ].map(({ href, icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: mutedColor, transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => e.currentTarget.style.color = accent}
                onMouseLeave={e => e.currentTarget.style.color = mutedColor}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', fontWeight: 600, color: accent, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Quick Links</span>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              style={{ color: mutedColor, textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = accent}
              onMouseLeave={e => e.currentTarget.style.color = mutedColor}>
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', fontWeight: 600, color: accent, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Contact</span>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <MapPin size={15} style={{ color: accent, flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.83rem', lineHeight: 1.6, color: mutedColor }}>{contact.address}</span>
          </div>
          <a href={`tel:${contact.phone.replace(/\s/g,'')}`}
            style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: mutedColor, textDecoration: 'none', fontSize: '0.83rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = mutedColor}>
            <Phone size={15} style={{ color: accent, flexShrink: 0 }} /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`}
            style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: mutedColor, textDecoration: 'none', fontSize: '0.83rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = mutedColor}>
            <Mail size={15} style={{ color: accent, flexShrink: 0 }} /> {contact.email}
          </a>
        </div>

        {/* Other Property */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', fontWeight: 600, color: accent, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Our Properties</span>
          <Link to="/residency"
            style={{ color: isPrime ? mutedColor : accent, textDecoration: 'none', fontSize: '0.88rem', fontWeight: isPrime ? 400 : 600, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = isPrime ? mutedColor : accent}>
            SSR Residency
          </Link>
          <Link to="/prime"
            style={{ color: isPrime ? accent : mutedColor, textDecoration: 'none', fontSize: '0.88rem', fontWeight: isPrime ? 600 : 400, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = isPrime ? accent : mutedColor}>
            SSR Prime
          </Link>
          <Link to="/"
            style={{ color: mutedColor, textDecoration: 'none', fontSize: '0.88rem', marginTop: '0.5rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = mutedColor}>
            ← Back to Landing
          </Link>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${border}`, padding: '1.1rem 1.5rem', textAlign: 'center', fontSize: '0.78rem', color: mutedColor }}>
        © {new Date().getFullYear()} SSR Hospitality, Machilipatnam. All rights reserved.
      </div>
    </footer>
  );
}
