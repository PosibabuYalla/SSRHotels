import { motion } from 'framer-motion';
import { Clock, Car, UtensilsCrossed, Zap, Wifi, Wind, ShieldCheck, MapPin } from 'lucide-react';

const accent = 'hsl(12, 58%, 34%)';
const text = 'hsl(20, 10%, 15%)';
const muted = 'hsl(20, 5%, 45%)';

const amenities = [
  { icon: <Clock size={28} />, title: '24/7 Reception', desc: 'Round-the-clock front desk assistance for all your needs.' },
  { icon: <Car size={28} />, title: 'Parking', desc: 'Secure on-site parking available for guests.' },
  { icon: <UtensilsCrossed size={28} />, title: 'Room Service', desc: 'In-room dining and refreshments on request.' },
  { icon: <Zap size={28} />, title: 'Power Backup', desc: 'Uninterrupted power supply with generator backup.' },
  { icon: <Wifi size={28} />, title: 'Free WiFi', desc: 'High-speed internet throughout the property.' },
  { icon: <Wind size={28} />, title: 'Air Conditioning', desc: 'Climate-controlled rooms for year-round comfort.' },
  { icon: <ShieldCheck size={28} />, title: 'Security', desc: 'CCTV surveillance and 24/7 security personnel.' },
  { icon: <MapPin size={28} />, title: 'Travel Assistance', desc: 'Local travel guidance and transport arrangements.' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ResidencyAmenities() {
  return (
    <div>
      {/* Hero banner */}
      <section style={{ position: 'relative', height: '40vh', minHeight: '240px', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80" alt="Residency amenities" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,10,5,0.85) 0%, rgba(20,10,5,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem,6vw,4rem)', color: '#fff', fontWeight: 600 }}>Amenities</h1>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: muted, maxWidth: '500px', margin: '0 auto 3rem', fontSize: '0.93rem', lineHeight: 1.7, textAlign: 'center' }}>
          Everything you need for a comfortable and hassle-free stay.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {amenities.map(({ icon, title, desc }, i) => (
          <motion.article key={title}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{
              background: '#fff', borderRadius: '1rem', padding: '1.75rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              border: '1px solid rgba(0,0,0,0.05)'
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
