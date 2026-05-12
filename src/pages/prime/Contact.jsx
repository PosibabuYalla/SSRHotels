import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const accent = '#CBD5E1';
const text = '#ffffff';
const muted = 'hsl(213, 20%, 50%)';
const border = 'rgba(100,116,139,0.3)';
const cardBg = 'rgba(255,255,255,0.04)';

const info = [
  {
    icon: <MapPin size={26} />,
    title: 'Address',
    lines: ['Opp. Anna Canteen,', 'Three Pillars Center,', 'Machilipatnam, Andhra Pradesh']
  },
  {
    icon: <Phone size={26} />,
    title: 'Phone',
    lines: ['+91 905969 5599', '+91 807492 4112']
  },
  {
    icon: <Mail size={26} />,
    title: 'Email',
    lines: ['sunkarastarresidency@gmail.com']
  },
  {
    icon: <Clock size={26} />,
    title: 'Hours',
    lines: ['Open 24/7', 'Always here for you']
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function PrimeContact() {
  const { openBooking } = useOutletContext();

  return (
    <div>
      {/* Hero banner */}
      <section style={{ position: 'relative', height: '38vh', minHeight: '220px', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80" alt="SSR Prime contact" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,18,40,0.88) 0%, rgba(10,18,40,0.45) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem,6vw,4rem)', color: '#fff', fontWeight: 600 }}>Contact Us</h1>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {info.map(({ icon, title, lines }, i) => (
            <motion.article key={title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: cardBg, borderRadius: '1rem', padding: '1.75rem',
                border: `1px solid ${border}`,
                display: 'flex', flexDirection: 'column', gap: '0.75rem'
              }}>
              <div style={{ color: accent }}>{icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', color: text }}>{title}</h3>
              {lines.map(l => (
                <p key={l} style={{ color: muted, fontSize: '0.88rem', lineHeight: 1.6 }}>{l}</p>
              ))}
            </motion.article>
          ))}
        </div>
      </section>
      <section style={{
        background: 'rgba(255,255,255,0.04)', borderTop: `1px solid ${border}`,
        padding: 'clamp(3rem, 5vw, 4rem) 2rem',
        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem'
      }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: text }}>
          Ready to Book Your Stay?
        </h2>
        <p style={{ color: muted, maxWidth: '400px', fontSize: '0.93rem' }}>
          Connect with us via WhatsApp for instant confirmation and personalised service.
        </p>
        <button onClick={openBooking}
          style={{
            background: accent, color: 'hsl(222, 47%, 11%)', border: 'none', borderRadius: '0.5rem',
            padding: '0.875rem 2rem', fontWeight: 700, fontSize: '1rem',
            cursor: 'pointer', fontFamily: 'Inter, sans-serif', minHeight: '48px'
          }}>
          Book Now
        </button>
      </section>
    </div>
  );
}
