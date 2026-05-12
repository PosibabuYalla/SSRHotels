import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { Wifi, Wind, Clock, MapPin } from 'lucide-react';

const accent = '#CBD5E1';
const text = '#ffffff';
const muted = 'hsl(213, 20%, 50%)';
const border = 'rgba(100,116,139,0.3)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function PrimeHome() {
  const { openBooking } = useOutletContext();

  return (
    <div>
      <section style={{ position: 'relative', height: '85vh', minHeight: '500px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
          alt="SSR Prime hotel exterior"
          className="ken-burns"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '90%', maxWidth: '700px' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <p style={{ color: 'rgba(203,213,225,0.7)', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
              <MapPin size={13} /> THREE PILLARS CENTER, MACHILIPATNAM
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#fff', fontWeight: 600, lineHeight: 1.15, marginBottom: '1rem' }}>
              SSR Prime — Elevated Luxury.<br />Refined Experience.
            </h1>
            <button onClick={openBooking} style={{ background: accent, color: 'hsl(222, 47%, 11%)', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 2rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', minHeight: '48px' }}>
              Book Now
            </button>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'rgba(255,255,255,0.05)', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {[{ icon: <Wind size={22} />, label: 'AC Suites' }, { icon: <Wifi size={22} />, label: 'Free WiFi' }, { icon: <Clock size={22} />, label: '24/7 Service' }].map(({ icon, label }) => (
            <div key={label} style={{ color: accent, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              {icon}
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: text }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden', border: `1px solid ${border}` }}>
              <img src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=900&q=80" alt="Prime suite interior" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>OUR SUITES</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text, lineHeight: 1.2 }}>
              Spaces Crafted for the Discerning Guest
            </h2>
            <p style={{ color: muted, lineHeight: 1.7, fontSize: '0.95rem' }}>
              SSR Prime offers premium suites and executive rooms designed with refined aesthetics and top-tier amenities.
              Every stay is an experience in elevated comfort.
            </p>
            <button onClick={openBooking} style={{ background: 'transparent', color: accent, border: `1px solid ${accent}`, borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', width: 'fit-content', minHeight: '48px' }}>
              View Suites
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
