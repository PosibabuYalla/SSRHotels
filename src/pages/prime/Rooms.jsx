import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { Check } from 'lucide-react';

const accent = '#CBD5E1';
const text = '#ffffff';
const muted = 'hsl(213, 20%, 50%)';
const border = 'rgba(100,116,139,0.3)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const roomGradients = [
  'linear-gradient(135deg, hsl(222,50%,10%) 0%, hsl(215,45%,18%) 50%, hsl(210,55%,10%) 100%)',
  'linear-gradient(135deg, hsl(218,48%,9%) 0%, hsl(212,42%,16%) 50%, hsl(220,52%,9%) 100%)',
  'linear-gradient(135deg, hsl(225,52%,11%) 0%, hsl(218,46%,19%) 50%, hsl(215,50%,11%) 100%)',
];

const rooms = [
  { name: 'Premium Room', desc: 'A sophisticated room with premium furnishings, high-speed WiFi, and all modern amenities for the discerning traveller.', features: ['Air Conditioning', 'Free WiFi', 'King Bed', 'Smart TV', '24/7 Room Service', 'Premium Toiletries'] },
  { name: 'Executive Suite', desc: 'Spacious executive suite with a dedicated work area, premium bedding, and panoramic views of the city.', features: ['Air Conditioning', 'Free WiFi', 'Work Desk', 'Mini Bar', 'Lounge Area', 'Butler Service'] },
  { name: 'Deluxe Suite', desc: 'Our finest accommodation — a full suite experience with separate living and sleeping areas, premium amenities throughout.', features: ['Air Conditioning', 'Free WiFi', 'Separate Living Area', 'Jacuzzi', 'Premium Bar', 'Concierge Service'] },
];

export default function PrimeRooms() {
  const { openBooking } = useOutletContext();

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>ACCOMMODATIONS</span>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: text, marginTop: '0.5rem' }}>Our Suites</h1>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {rooms.map((room, i) => (
          <motion.article key={room.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
            <div style={{ direction: 'ltr' }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden', border: `1px solid ${border}`, background: roomGradients[i], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'rgba(203,213,225,0.4)', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>{room.name}</span>
              </div>
            </div>
            <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: text }}>{room.name}</h2>
              <p style={{ color: muted, lineHeight: 1.7, fontSize: '0.93rem' }}>{room.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {room.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>
                    <Check size={15} color={accent} /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={openBooking} style={{ background: accent, color: 'hsl(222, 47%, 11%)', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', width: 'fit-content', minHeight: '48px' }}>
                Book This Suite
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
