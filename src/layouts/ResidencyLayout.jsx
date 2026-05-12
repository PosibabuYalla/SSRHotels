import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import BookingDrawer from '../components/BookingDrawer';
import Footer from '../components/Footer';

const navLinks = [
  { to: '/residency', label: 'Home' },
  { to: '/residency/about', label: 'About' },
  { to: '/residency/rooms', label: 'Rooms' },
  { to: '/residency/amenities', label: 'Amenities' },
  { to: '/residency/contact', label: 'Contact' },
];

export default function ResidencyLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const accent = 'hsl(12, 58%, 34%)';
  const bg = 'hsl(36, 33%, 97%)';
  const text = 'hsl(20, 10%, 15%)';

  return (
    <div style={{ background: bg, minHeight: '100vh', color: text }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        background: 'rgba(250,246,240,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '0 1.5rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Link to="/residency" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: accent }}>
            SSR Residency
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/residency'}
              style={({ isActive }) => ({
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                color: isActive ? accent : text, borderBottom: isActive ? `2px solid ${accent}` : '2px solid transparent',
                paddingBottom: '2px', transition: 'color 0.2s'
              })}>
              {label}
            </NavLink>
          ))}
          <button onClick={() => setDrawerOpen(true)}
            style={{
              background: accent, color: '#fff', border: 'none', borderRadius: '0.375rem',
              padding: '0.5rem 1.1rem', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', minHeight: '40px'
            }}>
            Check Availability
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: text, padding: '0.5rem', display: 'none' }}
          className="show-mobile">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 39,
          background: bg, borderBottom: '1px solid rgba(0,0,0,0.1)',
          padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'
        }}>
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/residency'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: 'none', fontSize: '1rem', fontWeight: 500,
                color: isActive ? accent : text, padding: '0.5rem 0', minHeight: '48px', display: 'flex', alignItems: 'center'
              })}>
              {label}
            </NavLink>
          ))}
          <button onClick={() => { setDrawerOpen(true); setMenuOpen(false); }}
            style={{
              background: accent, color: '#fff', border: 'none', borderRadius: '0.375rem',
              padding: '0.75rem 1.1rem', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', minHeight: '48px'
            }}>
            Check Availability
          </button>
        </div>
      )}

      <main style={{ paddingTop: '64px' }}>
        <Outlet context={{ openBooking: () => setDrawerOpen(true) }} />
      </main>

      <Footer property="residency" />

      {/* Floating phone FAB (mobile) */}
      <a href="tel:+919584848666" aria-label="Call SSR Residency"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 45,
          background: accent, color: '#fff', borderRadius: '50%',
          width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)', textDecoration: 'none'
        }}
        className="show-mobile">
        <Phone size={22} />
      </a>

      <BookingDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} property="residency" />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
