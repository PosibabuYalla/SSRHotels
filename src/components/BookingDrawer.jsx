import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const RESIDENCY_ROOMS = ['Standard AC Room', 'Deluxe Room', 'Family Room'];
const PRIME_ROOMS = ['Premium Room', 'Executive Suite', 'Deluxe Suite'];

export default function BookingDrawer({ isOpen, onClose, property = 'residency' }) {
  const isPrime = property === 'prime';
  const rooms = isPrime ? PRIME_ROOMS : RESIDENCY_ROOMS;
  const waNumber = isPrime ? '919059695599' : '919584848666';
  const accent = isPrime ? '#CBD5E1' : 'hsl(12, 58%, 34%)';
  const bg = isPrime ? 'hsl(222, 47%, 11%)' : 'hsl(36, 33%, 97%)';
  const text = isPrime ? '#ffffff' : 'hsl(20, 10%, 15%)';
  const border = isPrime ? 'rgba(100,116,139,0.4)' : 'rgba(0,0,0,0.1)';
  const inputBg = isPrime ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';

  const [form, setForm] = useState({
    name: '', phone: '', checkin: '', checkout: '', room: rooms[0], message: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const propertyName = isPrime ? 'SSR Prime' : 'SSR Residency';
    const msg = encodeURIComponent(
      `Hello, I want to book a room at ${propertyName}:\nName: ${form.name}\nPhone: ${form.phone}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nRoom Type: ${form.room}\nMessage: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/${waNumber}?text=${msg}`, '_blank');
  };

  const inputStyle = {
    background: inputBg,
    border: `1px solid ${border}`,
    color: text,
    borderRadius: '0.5rem',
    padding: '0.625rem 0.875rem',
    width: '100%',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
  };

  const labelStyle = { fontSize: '0.8rem', fontWeight: 500, color: isPrime ? '#94a3b8' : 'hsl(20,5%,45%)', marginBottom: '0.3rem', display: 'block' };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 50 }}
          />
          <motion.aside
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '420px',
              background: bg, zIndex: 51, overflowY: 'auto',
              borderLeft: `1px solid ${border}`, padding: '2rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem'
            }}
            role="dialog" aria-modal="true" aria-label="Book Your Stay"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', color: text }}>Book Your Stay</h2>
              <button onClick={onClose} aria-label="Close booking drawer"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: text, padding: '0.5rem' }}>
                <X size={22} />
              </button>
            </div>
            <p style={{ fontSize: '0.85rem', color: isPrime ? '#94a3b8' : 'hsl(20,5%,45%)' }}>
              Fill in your details and we'll connect you via WhatsApp.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle} htmlFor="bd-name">Full Name *</label>
                <input id="bd-name" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Your full name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="bd-phone">Phone Number *</label>
                <input id="bd-phone" name="phone" required type="tel" value={form.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="bd-checkin">Check-in *</label>
                  <input id="bd-checkin" name="checkin" required type="date" value={form.checkin} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="bd-checkout">Check-out *</label>
                  <input id="bd-checkout" name="checkout" required type="date" value={form.checkout} onChange={handleChange} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="bd-room">Room Type</label>
                <select id="bd-room" name="room" value={form.room} onChange={handleChange} style={inputStyle}>
                  {rooms.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle} htmlFor="bd-msg">Message (optional)</label>
                <textarea id="bd-msg" name="message" value={form.message} onChange={handleChange}
                  placeholder="Any special requests..." rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit"
                style={{
                  background: '#25D366', color: '#fff', border: 'none', borderRadius: '0.5rem',
                  padding: '0.875rem 1.25rem', fontWeight: 600, fontSize: '0.95rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif', marginTop: '0.5rem', minHeight: '48px'
                }}>
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
