import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

// Picsum gives reliable, fast, no-auth images — warm room & cool room
const RESIDENCY_IMG = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=75';
const PRIME_IMG     = 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1200&q=75';

// Fallback gradients if images fail
const RES_GRAD  = 'linear-gradient(160deg,#3b1f0e 0%,#7c3a1e 50%,#2a1208 100%)';
const PRIME_GRAD= 'linear-gradient(160deg,#0b1120 0%,#1a2d4a 50%,#060d1a 100%)';

function HeroSide({ side, width, onEnter, onLeave, img, fallback, badge, badgeColor, title1, title2, subtitle, btnLabel, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);
  const isPrime = side === 'prime';

  return (
    <motion.section
      animate={{ width }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ position: 'relative', overflow: 'hidden', flexShrink: 0, cursor: 'default' }}
      aria-label={`SSR ${isPrime ? 'Prime' : 'Residency'}`}
    >
      {/* Background image */}
      {!imgFailed ? (
        <img
          src={img}
          alt=""
          aria-hidden="true"
          onError={() => setImgFailed(true)}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
        />
      ) : (
        <div style={{ position: 'absolute', inset: 0, background: fallback }} />
      )}

      {/* Overlay — stronger on the content side */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isPrime
          ? 'linear-gradient(to left,  rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)'
          : 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)',
      }} />

      {/* Content — vertically centered, left or right aligned */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: isPrime ? 'flex-end' : 'flex-start',
        padding: '0 2.75rem',
        paddingTop: '4rem',   /* clear the brand header */
        paddingBottom: '4rem',/* clear the explore button */
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column',
          maxWidth: '280px',
          textAlign: isPrime ? 'right' : 'left',
          alignItems: isPrime ? 'flex-end' : 'flex-start',
        }}>
          {/* Badge */}
          <span style={{
            display: 'inline-block',
            color: badgeColor,
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '2rem',
            background: isPrime
              ? 'linear-gradient(135deg, rgba(192,192,192,0.12) 0%, rgba(220,220,220,0.06) 100%)'
              : 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(255,215,0,0.07) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: isPrime
              ? '1px solid rgba(192,192,192,0.55)'
              : '1px solid rgba(212,175,55,0.65)',
            boxShadow: isPrime
              ? '0 0 12px rgba(192,192,192,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              : '0 0 12px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}>
            {badge}
          </span>

          {/* Big serif heading */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.0,
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}>
            {title1}<br />{title2}
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'rgba(255,255,255,0.62)',
            fontSize: '0.8rem',
            lineHeight: 1.65,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            marginBottom: '1.75rem',
          }}>
            {subtitle}
          </p>

          {/* Glass CTA button */}
          <button
            onClick={onClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.28)',
              color: '#fff',
              borderRadius: '2rem',
              padding: '0.6rem 1.3rem',
              fontSize: '0.8rem',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              minHeight: '40px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
          >
            {btnLabel} <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

function MobileCard({ img, fallback, badge, badgeColor, title, sub, btn, to, navigate, isFirst, isLast }) {
  const [failed, setFailed] = useState(false);
  return (
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      {!failed
        ? <img src={img} alt="" aria-hidden="true" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        : <div style={{ position: 'absolute', inset: 0, background: fallback }} />
      }
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 100%)' }} />
      <div style={{
        position: 'absolute',
        top: isFirst ? '5.5rem' : '1.75rem',
        bottom: isLast ? '4rem' : 'auto',
        left: '1.5rem',
        right: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <span style={{ color: badgeColor, fontSize: '0.6rem', letterSpacing: '0.18em', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{badge}</span>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '0.75rem' }}>{title}</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', lineHeight: 1.6, maxWidth: '220px', fontFamily: 'Inter, sans-serif', marginBottom: '1.25rem' }}>{sub}</p>
        <button onClick={() => navigate(to)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', borderRadius: '2rem', padding: '0.55rem 1.1rem', fontSize: '0.78rem', fontWeight: 500, fontFamily: 'Inter, sans-serif', cursor: 'pointer', width: 'fit-content' }}>
          {btn} <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

export default function Landing() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const getWidth = (side) => {
    if (!hovered) return '50%';
    return hovered === side ? '58%' : '42%';
  };

  return (
    <main style={{
      height: '100dvh', minHeight: '560px',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
      background: '#0a0a0a',
    }}>

      {/* ── Top center brand ── */}
      <div style={{
        position: 'absolute', top: '1.6rem', left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        zIndex: 20, pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          color: 'rgba(255,255,255,0.92)',
          letterSpacing: '0.22em',
          fontWeight: 500,
        }}>
          SSR <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Hospitality</em>
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.6rem',
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.25em',
          marginTop: '0.2rem',
          textTransform: 'uppercase',
        }}>
          Your Comfort Stay · Machilipatnam
        </span>
      </div>

      {/* ── Desktop split ── */}
      <div
        style={{ display: 'flex', flex: 1 }}
        className="landing-desktop"
        onMouseLeave={() => setHovered(null)}
      >
        <HeroSide
          side="residency"
          width={getWidth('residency')}
          onEnter={() => setHovered('residency')}
          onLeave={() => setHovered(null)}
          img={RESIDENCY_IMG}
          fallback={RES_GRAD}
          badge="Heritage Collection"
          badgeColor="hsl(36,90%,68%)"
          title1="SSR"
          title2="Residency"
          subtitle="Rooted in Comfort. Built for Everyday Stays. Clean AC rooms in Godugupet — perfect for business, family, and quick stays."
          btnLabel="Enter Residency"
          onClick={() => navigate('/residency')}
        />

        {/* ── Center divider ── */}
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0,
          transform: 'translateX(-50%)',
          zIndex: 10, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div className="pulse-line" style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.25)' }} />
          <div style={{
            width: '180px', height: '180px', borderRadius: '50%', flexShrink: 0,
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            <img
              src="/mainlogo.png"
              alt="SSR Hospitality"
              style={{ width: '140px', height: '140px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div className="pulse-line" style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.25)' }} />
        </div>

        <HeroSide
          side="prime"
          width={getWidth('prime')}
          onEnter={() => setHovered('prime')}
          onLeave={() => setHovered(null)}
          img={PRIME_IMG}
          fallback={PRIME_GRAD}
          badge="Premium Collection"
          badgeColor="rgba(203,213,225,0.85)"
          title1="SSR"
          title2="Prime"
          subtitle="Modern Comfort. Elevated Stay. Premium rooms near Three Pillars Center — designed for comfort and convenience."
          btnLabel="Enter Prime"
          onClick={() => navigate('/prime')}
        />
      </div>

      {/* ── Mobile stacked ── */}
      <div className="landing-mobile" style={{ display: 'none', flexDirection: 'column', flex: 1 }}>
        <MobileCard img={RESIDENCY_IMG} fallback={RES_GRAD} badge="Heritage Collection" badgeColor="hsl(36,90%,68%)" title="SSR Residency" sub="Clean AC rooms in Godugupet, Machilipatnam." btn="Enter Residency" to="/residency" navigate={navigate} isFirst />
        <MobileCard img={PRIME_IMG} fallback={PRIME_GRAD} badge="Premium Collection" badgeColor="rgba(203,213,225,0.85)" title="SSR Prime" sub="Premium rooms near Three Pillars Center." btn="Enter Prime" to="/prime" navigate={navigate} isLast />
      </div>

      {/* ── Bottom explore button ── */}
      <div style={{
        position: 'absolute', bottom: '1.75rem',
        left: '50%', transform: 'translateX(-50%)',
        zIndex: 20,
      }}>
        <button
          onClick={() => navigate('/machilipatnam')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            background: 'rgba(20,20,20,0.55)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.85)',
            borderRadius: '2rem',
            padding: '0.6rem 1.3rem',
            fontSize: '0.75rem',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
            minHeight: '40px',
          }}
        >
          <MapPin size={13} /> Explore Machilipatnam <ArrowRight size={12} />
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .landing-desktop { display: none !important; }
          .landing-mobile  { display: flex !important; }
        }
      `}</style>
    </main>
  );
}
