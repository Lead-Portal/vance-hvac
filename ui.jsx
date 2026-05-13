/* global React */
const { useState, useEffect, useRef, useMemo } = React;

// ============================================================
// useScrollReveal
// ============================================================
window.useScrollReveal = function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const delay = parseFloat(el.dataset.delay || '0');
          setTimeout(() => el.classList.add('visible'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
};

// ============================================================
// Lucide-ish icons
// ============================================================
const ICONS = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  arrowRight: <path d="M5 12h14M12 5l7 7-7 7"/>,
  check: <path d="M20 6 9 17l-5-5"/>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  shieldCheck: (<>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </>),
  mapPin: (<>
    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </>),
  clock: (<>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </>),
  receipt: <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2zM8 7h8M8 11h8M8 15h6"/>,
  home: <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"/>,
  snowflake: <path d="M2 12h20M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07M9 4l3 3 3-3M9 20l3-3 3 3M4 9l3 3-3 3M20 9l-3 3 3 3"/>,
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17a7 7 0 0 0 7-7c0-2.4-1.5-4-2.5-5C13.5 3.5 11 1 11 1S8 4 8 7s3 4 3 6c0 1.5-1.5 1.5-2.5 1.5z"/>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
  wind: <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>,
  branch: (<>
    <line x1="6" y1="3" x2="6" y2="15"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </>),
  menu: <path d="M3 12h18M3 6h18M3 18h18"/>,
  x: <path d="M18 6 6 18M6 6l12 12"/>,
  chevDown: <path d="m6 9 6 6 6-6"/>,
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  expand: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
};

window.Icon = function Icon({ name, size = 20, stroke = 2, className = '', fill = 'none' }) {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill={fill} stroke="currentColor" strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {path}
    </svg>
  );
};

// ============================================================
// Stars
// ============================================================
window.Stars = function Stars({ value = 5, size = 16 }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <window.Icon key={i} name="star" size={size} fill={i < value ? '#f59e0b' : 'none'} stroke={i < value ? 0 : 1.5} />
      ))}
    </span>
  );
};

// ============================================================
// Initials avatar
// ============================================================
window.InitialsAvatar = function InitialsAvatar({ name, size = 40 }) {
  const initials = name.split(' ').slice(0, 2).map(s => s[0]).join('').toUpperCase();
  return (
    <span className="avatar-initial" style={{ width: size, height: size, fontSize: size * 0.36 }}>
      {initials}
    </span>
  );
};

// ============================================================
// Typing Effect — types each word, holds, clears, types next
// ============================================================
window.TypingEffect = function TypingEffect({
  texts,
  typingSpeed = 90,
  deleteSpeed = 45,
  holdAfter = 1400
}) {
  const [textIdx, setTextIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'holding' | 'deleting'

  useEffect(() => {
    const current = texts[textIdx % texts.length];
    let timer;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setPhase('deleting'), holdAfter);
      }
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, deleteSpeed);
      } else {
        setTextIdx((i) => (i + 1) % texts.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, phase, textIdx, texts, typingSpeed, deleteSpeed, holdAfter]);

  // reset when texts array changes
  useEffect(() => {
    setTextIdx(0);
    setDisplayed('');
    setPhase('typing');
  }, [texts.join('|')]);

  return (
    <span style={{
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      color: 'var(--accent, #2563eb)'
    }}>
      <span>{displayed}</span>
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '0.08em',
          height: '0.92em',
          background: 'currentColor',
          marginLeft: '0.06em',
          verticalAlign: '-0.05em',
          borderRadius: '1px',
          animation: 'te-blink 0.9s steps(2) infinite'
        }}
      />
    </span>
  );
};

// ============================================================
// Spotlight Card
// ============================================================
window.SpotlightCard = function SpotlightCard({ children, className = '', style = {} }) {
  const cardRef = useRef(null);
  useEffect(() => {
    const sync = (e) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty('--x', (e.clientX - r.left).toFixed(2));
      cardRef.current.style.setProperty('--y', (e.clientY - r.top).toFixed(2));
    };
    document.addEventListener('pointermove', sync);
    return () => document.removeEventListener('pointermove', sync);
  }, []);

  return (
    <div
      ref={cardRef}
      data-glow
      className={`spotlight-card ${className}`}
      style={{
        '--base': 220,
        '--spread': 180,
        '--radius': '20',
        '--size': '320',
        '--spotlight-size': 'calc(var(--size, 150) * 1px)',
        '--hue': 'calc(var(--base) + (var(--x, 0) / 600 * var(--spread, 0)))',
        position: 'relative',
        borderRadius: 'calc(var(--radius) * 1px)',
        background: '#fff',
        backgroundImage: `radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
          hsl(var(--hue, 220) 90% 96% / 0.95), transparent 70%
        )`,
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        overflow: 'hidden',
        ...style
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1.5px',
          background: `radial-gradient(
            calc(var(--spotlight-size) * 0.6) calc(var(--spotlight-size) * 0.6) at
            calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
            hsl(var(--hue, 220) 90% 60% / 0.9), transparent 60%
          )`,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

// ============================================================
// Testimonials Column — vertical infinite scroll
// ============================================================
window.TestimonialsColumn = function TestimonialsColumn({ items, duration = 18, className = '' }) {
  return (
    <div className={`testimonials-col ${className}`}>
      <div
        className="testimonials-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map(loop => (
          <React.Fragment key={loop}>
            {items.map((r, i) => (
              <div key={`${loop}-${i}`} className="card testimonial-card p-7">
                <window.Stars value={5} size={14} />
                <p className="mt-4 text-[0.95rem] text-gray-700 leading-relaxed">{r.text}</p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <window.InitialsAvatar name={r.name} />
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm truncate">{r.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-amber-400 grid place-items-center text-white text-[7px] font-bold flex-shrink-0">G</span>
                      {r.timeAgo || r.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
