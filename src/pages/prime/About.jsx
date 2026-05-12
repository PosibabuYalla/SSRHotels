import { motion } from 'framer-motion';
import { Star, Shield, Sparkles, MapPin } from 'lucide-react';

const accent = '#CBD5E1';
const text = '#ffffff';
const muted = 'hsl(213, 20%, 50%)';
const border = 'rgba(100,116,139,0.3)';
const cardBg = 'rgba(255,255,255,0.04)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const values = [
  { icon: <Star size={24} />, title: 'Premium Quality', desc: 'Curated furnishings and premium amenities in every suite.' },
  { icon: <Shield size={24} />, title: 'Safe & Secure', desc: 'Advanced security systems and 24/7 surveillance.' },
  { icon: <Sparkles size={24} />, title: 'Refined Experience', desc: 'Personalised service tailored to your preferences.' },
  { icon: <MapPin size={24} />, title: 'Prime Location', desc: 'Opposite Anna Canteen, Three Pillars Center, Machilipatnam.' },
];

export default function PrimeAbout() {
  return (
    <div>
      <section style={{ position: 'relative', height: '50vh', minHeight: '300px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="SSR Prime about"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', fontWeight: 600 }}>
            About Us
          </motion.h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>OUR STORY</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text, margin: '0.75rem 0 1.25rem' }}>
            Where Luxury Meets Warmth
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
            SSR Prime was born from a vision to bring world-class hospitality to Machilipatnam. Situated at Three Pillars Center,
            our property redefines what a premium stay means in coastal Andhra Pradesh.
          </p>
          <p style={{ color: muted, lineHeight: 1.8, fontSize: '0.95rem' }}>
            From executive suites to deluxe accommodations, every space at SSR Prime is designed with meticulous attention to detail,
            ensuring that each guest experiences the finest in comfort, style, and service.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 4rem)', background: 'rgba(255,255,255,0.02)', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: text, textAlign: 'center', marginBottom: '2.5rem' }}>
            What We Stand For
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map(({ icon, title, desc }, i) => (
              <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: cardBg, borderRadius: '1rem', padding: '1.75rem', border: `1px solid ${border}`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ color: accent }}>{icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: text }}>{title}</h3>
                <p style={{ color: muted, fontSize: '0.88rem', lineHeight: 1.6 }}>{desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
