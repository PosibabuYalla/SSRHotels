import { motion } from 'framer-motion';
import { Clock, Car, UtensilsCrossed, Zap, Wifi, Wind, ShieldCheck, MapPin } from 'lucide-react';

const accent = '#CBD5E1';
const text = '#ffffff';
const muted = 'hsl(213, 20%, 50%)';
const border = 'rgba(100,116,139,0.3)';
const cardBg = 'rgba(255,255,255,0.04)';

const amenities = [
  { icon: <Clock size={28} />, title: '24/7 Reception', desc: 'Round-the-clock concierge and front desk service.' },
  { icon: <Car size={28} />, title: 'Valet Parking', desc: 'Complimentary valet parking for all guests.' },
  { icon: <UtensilsCrossed size={28} />, title: 'In-Room Dining', desc: 'Curated menu available for in-room dining anytime.' },
  { icon: <Zap size={28} />, title: 'Power Backup', desc: 'Uninterrupted power with premium generator backup.' },
  { icon: <Wifi size={28} />, title: 'High-Speed WiFi', desc: 'Fibre-optic internet throughout the property.' },
  { icon: <Wind size={28} />, title: 'Climate Control', desc: 'Individual climate control in every suite.' },
  { icon: <ShieldCheck size={28} />, title: 'Security', desc: 'Advanced CCTV and 24/7 security personnel.' },
  { icon: <MapPin size={28} />, title: 'Concierge', desc: 'Personalised travel and local experience assistance.' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function PrimeAmenities() {
  return (
    <div>
      {/* Hero banner */}
      <section style={{ position: 'relative', height: '40vh', minHeight: '240px', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80" alt="Prime amenities" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,18,40,0.85) 0%, rgba(10,18,40,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem,6vw,4rem)', color: '#fff', fontWeight: 600 }}>Amenities</h1>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: muted, maxWidth: '500px', margin: '0 auto 3rem', fontSize: '0.93rem', lineHeight: 1.7, textAlign: 'center' }}>
          Premium facilities designed for an exceptional stay experience.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {amenities.map(({ icon, title, desc }, i) => (
          <motion.article key={title}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{
              background: cardBg, borderRadius: '1rem', padding: '1.75rem',
              border: `1px solid ${border}`,
              display: 'flex', flexDirection: 'column', gap: '0.75rem'
            }}>
            <div style={{ color: accent }}>{icon}</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', color: text }}>{title}</h3>
            <p style={{ color: muted, fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</p>
          </motion.article>
        ))}
        </div>
      </section>
    </div>
  );
}
