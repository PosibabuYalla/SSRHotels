import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const accent = 'hsl(12, 58%, 34%)';
const bg = 'hsl(36, 33%, 97%)';
const text = 'hsl(20, 10%, 15%)';
const muted = 'hsl(20, 5%, 45%)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const famousFor = [
  { title: 'Kalamkari Art', desc: 'Machilipatnam is the birthplace of Kalamkari — intricate hand-painted or block-printed cotton textiles depicting mythological scenes.', gradient: 'linear-gradient(135deg, #7c3d12 0%, #b45309 50%, #92400e 100%)', emoji: '🎨' },
  { title: 'Bandar Laddu', desc: 'The legendary Bandar Laddu — a sweet made with chickpea flour, ghee, and sugar — is a culinary icon of Machilipatnam.', gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #b45309 100%)', emoji: '🍬' },
  { title: 'Manginapudi Beach', desc: 'A serene black-sand beach on the Bay of Bengal, known for its calm waters and stunning sunrises.', gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #075985 100%)', emoji: '🏖️' },
];

const places = [
  { title: 'Manginapudi Beach', desc: 'A tranquil stretch of black sand beach, perfect for morning walks and watching the Bay of Bengal.', gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #075985 100%)', emoji: '🌊' },
  { title: 'Panduranga Swamy Temple', desc: 'An ancient and revered temple dedicated to Lord Panduranga, drawing devotees from across Andhra Pradesh.', gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #9a3412 100%)', emoji: '🛕' },
  { title: 'Dutch Cemetery', desc: "A historic colonial-era cemetery that stands as a testament to Machilipatnam's rich trading history with the Dutch.", gradient: 'linear-gradient(135deg, #1c1917 0%, #44403c 50%, #292524 100%)', emoji: '🏛️' },
];

function CityCard({ title, desc, gradient, emoji }) {
  return (
    <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}
      style={{ borderRadius: '1rem', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ aspectRatio: '4/3', background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
        <span style={{ fontSize: '3rem' }}>{emoji}</span>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>{title}</span>
      </div>
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', color: text }}>{title}</h3>
        <p style={{ color: muted, fontSize: '0.87rem', lineHeight: 1.65 }}>{desc}</p>
      </div>
    </motion.article>
  );
}

export default function Machilipatnam() {
  const navigate = useNavigate();

  return (
    <div style={{ background: bg, color: text, minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        background: 'rgba(250,246,240,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '0 1.5rem', height: '60px',
        display: 'flex', alignItems: 'center', gap: '1rem'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: accent, fontSize: '0.88rem', fontWeight: 500 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: text, fontWeight: 500 }}>SSR Hospitality</span>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '400px', overflow: 'hidden', marginTop: '60px' }}>
        <div className="ken-burns" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, hsl(200,60%,12%) 0%, hsl(190,50%,20%) 30%, hsl(210,55%,15%) 60%, hsl(195,65%,10%) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 40% 50%, rgba(20,120,160,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(10,80,120,0.2) 0%, transparent 50%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>ANDHRA PRADESH, INDIA</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', fontWeight: 600, lineHeight: 1 }}>
              Machilipatnam
            </h1>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '780px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>HISTORY & HERITAGE</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text, margin: '0.75rem 0 1.25rem' }}>
            A City Steeped in History
          </h2>
          <p style={{ color: muted, lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1rem' }}>
            Machilipatnam — also known as Masulipatnam or Bandar — is one of the oldest port cities on India's eastern coast.
            It served as a major trading hub for the Dutch, British, and French East India Companies during the 17th and 18th centuries,
            leaving behind a rich colonial legacy visible in its architecture and cemeteries.
          </p>
          <p style={{ color: muted, lineHeight: 1.85, fontSize: '0.95rem' }}>
            Today, the city is celebrated for its vibrant Kalamkari textile tradition, its iconic Bandar Laddu sweet, and the
            serene Manginapudi Beach. It remains a cultural and commercial heart of Krishna district in Andhra Pradesh.
          </p>
        </motion.div>
      </section>

      {/* Famous For */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 4rem)', background: 'rgba(0,0,0,0.03)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>ICONIC HIGHLIGHTS</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: text, marginTop: '0.5rem' }}>Famous For</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {famousFor.map(card => <CityCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>EXPLORE</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: text, marginTop: '0.5rem' }}>Places to Visit</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {places.map(card => <CityCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      {/* Local Food */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 4rem)', background: 'rgba(0,0,0,0.03)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1rem', background: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #b45309 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '4rem' }}>🍬</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>Bandar Laddu</span>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>LOCAL FLAVOURS</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: text, lineHeight: 1.2 }}>Taste of Machilipatnam</h2>
            <p style={{ color: muted, lineHeight: 1.8, fontSize: '0.95rem' }}>
              No visit to Machilipatnam is complete without tasting the legendary Bandar Laddu — a golden, ghee-rich sweet
              that has been crafted here for centuries. The city's coastal location also means fresh seafood is always on the menu,
              with local restaurants serving authentic Andhra-style fish curries and prawn dishes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>STAY WITH US</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text }}>Experience Machilipatnam with SSR</h2>
          <p style={{ color: muted, maxWidth: '450px', fontSize: '0.93rem', lineHeight: 1.7 }}>Choose your perfect stay — warm heritage comfort or elevated luxury.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => navigate('/residency')} style={{ background: accent, color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.875rem 1.75rem', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', minHeight: '48px' }}>
              SSR Residency
            </button>
            <button onClick={() => navigate('/prime')} style={{ background: 'hsl(222, 47%, 11%)', color: '#CBD5E1', border: '1px solid rgba(203,213,225,0.3)', borderRadius: '0.5rem', padding: '0.875rem 1.75rem', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', minHeight: '48px' }}>
              SSR Prime
            </button>
          </div>
        </motion.div>
      </section>

      <footer style={{ background: 'hsl(20, 10%, 15%)', color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '1.5rem', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} SSR Hospitality, Machilipatnam. All rights reserved.
      </footer>
    </div>
  );
}
