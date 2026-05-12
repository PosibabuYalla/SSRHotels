import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import BookingDrawer from '../components/BookingDrawer';

const navLinks = [
  { to: '/prime', label: 'Home' },
  { to: '/prime/about', label: 'About' },
  { to: '/prime/rooms', label: 'Rooms' },
  { to: '/prime/amenities', label: 'Amenities' },
  { to: '/prime/contact', label: 'Contact' },
];

export default function PrimeLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const accent = '#CBD5E1';
  const bg = 'hsl(222, 47%, 11%)';
  const text = '#ffffff';
  const border = 'rgba(100,116,139,0.3)';

  return (
    <div style={{ background: bg, minHeight: '100vh', color: text }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        background: 'rgba(10,18,40,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
        padding: '0 1.5rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Link to="/prime" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: accent }}>
            SSR Prime
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="prime-hidden-mobile">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/prime'}
              style={({ isActive }) => ({
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                color: isActive ? accent : 'rgba(255,255,255,0.75)',
                borderBottom: isActive ? `2px solid ${accent}` : '2px solid transparent',
                paddingBottom: '2px', transition: 'color 0.2s'
              })}>
              {label}
            </NavLink>
          ))}
          <button onClick={() => setDrawerOpen(true)}
            style={{
              background: 'transparent', color: accent, border: `1px solid ${accent}`,
              borderRadius: '0.375rem', padding: '0.5rem 1.1rem',
              fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', minHeight: '40px'
            }}>
            Check Availability
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: text, padding: '0.5rem', display: 'none' }}
          className="prime-show-mobile">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 39,
          background: 'hsl(222, 47%, 8%)', borderBottom: `1px solid ${border}`,
          padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'
        }}>
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/prime'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: 'none', fontSize: '1rem', fontWeight: 500,
                color: isActive ? accent : 'rgba(255,255,255,0.8)',
                padding: '0.5rem 0', minHeight: '48px', display: 'flex', alignItems: 'center'
              })}>
              {label}
            </NavLink>
          ))}
          <button onClick={() => { setDrawerOpen(true); setMenuOpen(false); }}
            style={{
              background: 'transparent', color: accent, border: `1px solid ${accent}`,
              borderRadius: '0.375rem', padding: '0.75rem 1.1rem',
              fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', minHeight: '48px'
            }}>
            Check Availability
          </button>
        </div>
      )}

      <main style={{ paddingTop: '64px' }}>
        <Outlet context={{ openBooking: () => setDrawerOpen(true) }} />
      </main>

      <footer style={{
        background: 'rgba(0,0,0,0.4)', borderTop: `1px solid ${border}`,
        color: 'rgba(255,255,255,0.4)', textAlign: 'center',
        padding: '1.5rem', fontSize: '0.85rem'
      }}>
        © {new Date().getFullYear()} SSR Prime, Machilipatnam. All rights reserved.
      </footer>

      <a href="tel:+919059695599" aria-label="Call SSR Prime"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 45,
          background: accent, color: 'hsl(222, 47%, 11%)', borderRadius: '50%',
          width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)', textDecoration: 'none'
        }}
        className="prime-show-mobile">
        <Phone size={22} />
      </a>

      <BookingDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} property="prime" />

      <style>{`
        @media (max-width: 768px) {
          .prime-hidden-mobile { display: none !important; }
          .prime-show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .prime-show-mobile { display: none !important; }
          .prime-hidden-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
