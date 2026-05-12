import { motion } from 'framer-motion';
import { Heart, Shield, Users, MapPin } from 'lucide-react';

const accent = 'hsl(12, 58%, 34%)';
const text = 'hsl(20, 10%, 15%)';
const muted = 'hsl(20, 5%, 45%)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const values = [
  { icon: <Heart size={24} />, title: 'Comfort First', desc: 'Every detail is designed around your comfort and well-being.' },
  { icon: <Shield size={24} />, title: 'Safe & Secure', desc: '24/7 security and CCTV surveillance for your peace of mind.' },
  { icon: <Users size={24} />, title: 'Family Friendly', desc: 'Spacious rooms and warm hospitality for families of all sizes.' },
  { icon: <MapPin size={24} />, title: 'Central Location', desc: 'Situated in Godugupet, minutes from key landmarks in Machilipatnam.' },
];

export default function ResidencyAbout() {
  return (
    <div>
      <section style={{ position: 'relative', height: '50vh', minHeight: '300px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80"
          alt="SSR Residency about"
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
            A Home Away From Home
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
            SSR Residency was founded with a simple belief — every guest deserves a clean, safe, and comfortable place to rest.
            Located in the heart of Godugupet, Machilipatnam, we have been welcoming travellers, families, and business guests
            with genuine warmth and attentive service.
          </p>
          <p style={{ color: muted, lineHeight: 1.8, fontSize: '0.95rem' }}>
            Our property combines the charm of traditional Andhra hospitality with modern amenities. Whether you're here for
            a short business trip or an extended family stay, SSR Residency is your trusted home in Machilipatnam.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 4rem)', background: 'rgba(0,0,0,0.03)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: text, textAlign: 'center', marginBottom: '2.5rem' }}>
            What We Stand For
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map(({ icon, title, desc }, i) => (
              <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: '#fff', borderRadius: '1rem', padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
