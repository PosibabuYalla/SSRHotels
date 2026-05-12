import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { Wifi, Wind, Clock, MapPin } from 'lucide-react';

const accent = 'hsl(12, 58%, 34%)';
const text = 'hsl(20, 10%, 15%)';
const muted = 'hsl(20, 5%, 45%)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ResidencyHome() {
  const { openBooking } = useOutletContext();

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '85vh', minHeight: '500px', overflow: 'hidden' }}>
        <div className="ken-burns" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, hsl(20,40%,18%) 0%, hsl(12,55%,28%) 40%, hsl(30,50%,22%) 70%, hsl(15,45%,12%) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 25% 60%, rgba(200,100,50,0.3) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(240,160,80,0.15) 0%, transparent 50%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '90%', maxWidth: '700px' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
              <MapPin size={13} /> GODUGUPET, MACHILIPATNAM
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#fff', fontWeight: 600, lineHeight: 1.15, marginBottom: '1rem' }}>
              SSR Residency — Clean.<br />Comfortable. Reliable Stay.
            </h1>
            <button onClick={openBooking} style={{
              background: accent, color: '#fff', border: 'none', borderRadius: '0.5rem',
              padding: '0.875rem 2rem', fontWeight: 600, fontSize: '1rem',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif', minHeight: '48px'
            }}>Book Now</button>
          </motion.div>
        </div>
      </section>

      {/* Features strip */}
      <section style={{ background: accent, padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {[{ icon: <Wind size={22} />, label: 'AC Rooms' }, { icon: <Wifi size={22} />, label: 'Free WiFi' }, { icon: <Clock size={22} />, label: '24/7 Service' }].map(({ icon, label }) => (
            <div key={label} style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              {icon}
              <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Room preview */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden', background: 'linear-gradient(135deg, hsl(20,35%,22%) 0%, hsl(12,50%,32%) 50%, hsl(25,40%,18%) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Our Rooms</span>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>OUR ROOMS</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text, lineHeight: 1.2 }}>
              Thoughtfully Designed for Your Comfort
            </h2>
            <p style={{ color: muted, lineHeight: 1.7, fontSize: '0.95rem' }}>
              Every room at SSR Residency is crafted to give you a peaceful, clean, and well-equipped stay.
              From standard AC rooms to spacious family suites, we have the right space for every traveller.
            </p>
            <button onClick={openBooking} style={{
              background: 'transparent', color: accent, border: `2px solid ${accent}`,
              borderRadius: '0.5rem', padding: '0.75rem 1.5rem',
              fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', width: 'fit-content', minHeight: '48px'
            }}>View Rooms</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
