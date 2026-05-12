import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Landmark, Waves, Palette, UtensilsCrossed, MapPin, Clock, Camera, Compass } from 'lucide-react';
import Footer from '../components/Footer';

const accent = 'hsl(12, 58%, 34%)';
const bg     = 'hsl(36, 33%, 97%)';
const text   = 'hsl(20, 10%, 15%)';
const muted  = 'hsl(20, 5%, 45%)';
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const famousFor = [
  {
    title: 'Kalamkari Art',
    desc: 'Birthplace of Kalamkari — intricate hand-painted cotton textiles depicting mythological scenes, recognised globally.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    icon: <Palette size={20} />,
  },
  {
    title: 'Bandar Laddu',
    desc: 'The legendary Bandar Laddu — a golden ghee-rich sweet crafted here for centuries — is a culinary icon of the city.',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    icon: <UtensilsCrossed size={20} />,
  },
  {
    title: 'Manginapudi Beach',
    desc: 'A serene black-sand beach on the Bay of Bengal, known for its calm waters and breathtaking sunrises.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    icon: <Waves size={20} />,
  },
];

const places = [
  {
    title: 'Manginapudi Beach',
    desc: 'A tranquil stretch of black sand, perfect for morning walks and watching the Bay of Bengal come alive.',
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    icon: <Waves size={20} />,
  },
  {
    title: 'Panduranga Swamy Temple',
    desc: 'An ancient revered temple dedicated to Lord Panduranga, drawing devotees from across Andhra Pradesh.',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    icon: <Landmark size={20} />,
  },
  {
    title: 'Dutch Cemetery',
    desc: "A historic colonial-era cemetery that stands as a testament to Machilipatnam's rich trading history with the Dutch.",
    img: 'https://images.unsplash.com/photo-1548625149-720754874e4e?auto=format&fit=crop&w=800&q=80',
    icon: <Camera size={20} />,
  },
];

const quickFacts = [
  { icon: <MapPin size={18} />, label: 'District', value: 'Krishna, Andhra Pradesh' },
  { icon: <Compass size={18} />, label: 'Coast', value: 'Bay of Bengal' },
  { icon: <Clock size={18} />, label: 'Best Time', value: 'Oct – Feb' },
  { icon: <Landmark size={18} />, label: 'Known For', value: 'Kalamkari, Bandar Laddu' },
];

function CityCard({ title, desc, img, icon }) {
  return (
    <motion.article
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={fadeUp} transition={{ duration: 0.5 }}
      style={{ borderRadius: '1rem', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.92)', borderRadius: '2rem', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: accent, fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          {icon} {title}
        </div>
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
      <section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', marginTop: '60px' }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80"
          alt="Machilipatnam coastline"
          className="ken-burns"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
              <MapPin size={13} /> ANDHRA PRADESH, INDIA
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', fontWeight: 600, lineHeight: 1 }}>
              Machilipatnam
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
              Port City · Heritage · Culture · Coast
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts strip */}
      <section style={{ background: accent, padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {quickFacts.map(({ icon, label, value }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff' }}>
              <span style={{ opacity: 0.8 }}>{icon}</span>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', opacity: 0.7, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>{label}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="https://images.unsplash.com/photo-1548625149-720754874e4e?auto=format&fit=crop&w=900&q=80" alt="Machilipatnam heritage" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>HISTORY & HERITAGE</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text, lineHeight: 1.2 }}>
              A City Steeped in History
            </h2>
            <p style={{ color: muted, lineHeight: 1.85, fontSize: '0.95rem' }}>
              Machilipatnam — also known as Masulipatnam or Bandar — is one of the oldest port cities on India's eastern coast.
              It served as a major trading hub for the Dutch, British, and French East India Companies during the 17th and 18th centuries,
              leaving behind a rich colonial legacy visible in its architecture and cemeteries.
            </p>
            <p style={{ color: muted, lineHeight: 1.85, fontSize: '0.95rem' }}>
              Today, the city is celebrated for its vibrant Kalamkari textile tradition, its iconic Bandar Laddu sweet, and the
              serene Manginapudi Beach — a cultural and commercial heart of Krishna district.
            </p>
          </motion.div>
        </div>
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
            <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80" alt="Bandar Laddu sweets" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>LOCAL FLAVOURS</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: text, lineHeight: 1.2 }}>
              Taste of Machilipatnam
            </h2>
            <p style={{ color: muted, lineHeight: 1.8, fontSize: '0.95rem' }}>
              No visit is complete without the legendary Bandar Laddu — a golden, ghee-rich sweet crafted here for centuries.
              The city's coastal location also means fresh seafood is always on the menu, with local restaurants serving
              authentic Andhra-style fish curries and prawn dishes.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Bandar Laddu', 'Prawn Curry', 'Fish Fry', 'Pesarattu'].map(item => (
                <span key={item} style={{ background: '#fff', border: `1px solid rgba(0,0,0,0.1)`, borderRadius: '2rem', padding: '0.35rem 0.9rem', fontSize: '0.8rem', color: muted, fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <UtensilsCrossed size={12} color={accent} /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: accent, fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600 }}>STAY WITH US</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: text }}>
            Experience Machilipatnam with SSR
          </h2>
          <p style={{ color: muted, maxWidth: '450px', fontSize: '0.93rem', lineHeight: 1.7 }}>
            Choose your perfect stay — warm heritage comfort or elevated luxury.
          </p>
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

      <Footer property="residency" />
    </div>
  );
}
