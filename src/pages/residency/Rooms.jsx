import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { Check } from 'lucide-react';

const accent = 'hsl(12, 58%, 34%)';
const text = 'hsl(20, 10%, 15%)';
const muted = 'hsl(20, 5%, 45%)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const roomGradients = [
  'linear-gradient(135deg, hsl(20,35%,22%) 0%, hsl(12,50%,32%) 50%, hsl(25,40%,18%) 100%)',
  'linear-gradient(135deg, hsl(15,40%,18%) 0%, hsl(10,55%,28%) 50%, hsl(20,35%,14%) 100%)',
  'linear-gradient(135deg, hsl(25,38%,20%) 0%, hsl(15,48%,30%) 50%, hsl(18,42%,16%) 100%)',
];

const rooms = [
  { name: 'Standard AC Room', desc: 'A well-appointed room with all essential amenities for a comfortable stay. Perfect for solo travellers and couples.', features: ['Air Conditioning', 'Free WiFi', 'Clean Linen', 'Hot Water', '24/7 Room Service', 'TV'] },
  { name: 'Deluxe Room', desc: 'Spacious and elegantly furnished, the Deluxe Room offers extra comfort with premium bedding and a larger workspace.', features: ['Air Conditioning', 'Free WiFi', 'King Bed', 'Mini Fridge', 'Work Desk', 'Premium Toiletries'] },
  { name: 'Family Room', desc: 'Designed for families, this room offers ample space with multiple sleeping arrangements and family-friendly amenities.', features: ['Air Conditioning', 'Free WiFi', 'Multiple Beds', 'Extra Storage', 'Room Service', 'Safe Locker'] },
];

export default function ResidencyRooms() {
  const { openBooking } = useOutletContext();

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>ACCOMMODATIONS</span>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: text, marginTop: '0.5rem' }}>Our Rooms</h1>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {rooms.map((room, i) => (
          <motion.article key={room.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
            <div style={{ direction: 'ltr' }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden', background: roomGradients[i], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>{room.name}</span>
              </div>
            </div>
            <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: text }}>{room.name}</h2>
              <p style={{ color: muted, lineHeight: 1.7, fontSize: '0.93rem' }}>{room.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {room.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: text, fontSize: '0.88rem' }}>
                    <Check size={15} color={accent} /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={openBooking} style={{ background: accent, color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', width: 'fit-content', minHeight: '48px' }}>
                Book This Room
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
