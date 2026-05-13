/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;
const C = window.CLIENT;

// ============================================================
// BRAND LOCKUP — real Vance logo image
// ============================================================
function BrandLockup({ height = 96 }) {
  return (
    <a href="#top" className="flex items-center" aria-label={C.legalName}>
      <img
        src="img/vance_logo_square.png"
        alt={C.legalName}
        style={{ height, width: 'auto', display: 'block' }}
      />
    </a>
  );
}

// ============================================================
// NAV
// ============================================================
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[96px]">
          <BrandLockup />
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${C.phoneRaw}`} className="hidden sm:inline-flex btn btn-primary text-sm" style={{padding: '0.65rem 1.2rem'}}>
              <window.Icon name="phone" size={15} />
              <span className="font-mono">{C.phone}</span>
            </a>
            <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              <window.Icon name={mobileOpen ? 'x' : 'menu'} size={22} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 flex flex-col gap-3 bg-white">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-700 py-1">{l.label}</a>
            ))}
            <a href={`tel:${C.phoneRaw}`} className="btn btn-primary text-sm mt-2 w-full">
              <window.Icon name="phone" size={15} />
              <span className="font-mono">{C.phone}</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero({ rotateWords, typeSpeed }) {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-blue-50 blur-3xl opacity-60"></div>
        <div className="absolute top-40 -left-20 w-[360px] h-[360px] rounded-full bg-blue-100/40 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <span className="chip">{C.serviceArea} · Family-Owned · {C.city}, {C.state}</span>
            <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[4.4rem] leading-[1.02] mt-7 text-gray-900">
              Need help with your<br />
              <window.TypingEffect texts={rotateWords} typingSpeed={typeSpeed} />
              <span>?</span>
            </h1>
            <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-xl">
              <span className="font-mono text-gray-900 font-semibold">{C.reviewCount}</span> five-star Google reviews,
              <span className="font-mono text-gray-900 font-semibold"> Family-owned</span> Greater Houston HVAC since 1997 — Fulshear-based, serving Katy, Sugar Land, Richmond &amp; the whole West Houston metro.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`tel:${C.phoneRaw}`} className="btn btn-primary btn-lg">
                <window.Icon name="phone" size={17} />
                <span>Call <span className="font-mono">{C.phone}</span></span>
              </a>
              <a href="#estimate" className="btn btn-ghost btn-lg">
                Get Free Estimate
                <window.Icon name="arrowRight" size={16} />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2">
                <window.Stars value={5} size={14} />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">{C.rating}</span> · {C.reviewCount} reviews</span>
              </div>
              <TrustItem text="TX Licensed TACLA29217E" />
              <TrustItem text="Family-Owned Since 1997" />
              <TrustItem text="24/7 Emergency Service" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-1.5 text-gray-700">
      <window.Icon name="check" size={14} className="text-blue-600" stroke={3} />
      <span>{text}</span>
    </div>
  );
}

// ============================================================
// LEAD FORM
// ============================================================
function LeadForm() {
  // LeadCapture embed — funnel 9E2N4z7Dwm. The script auto-injects the form
  // into wherever it lives in the DOM. We inject it via useEffect (React
  // strips inline <script> tags from JSX) and mount it inside the card so
  // it visually sits where the old form was.
  const embedRef = useRef(null);

  useEffect(() => {
    if (!embedRef.current) return;
    // Reset on remount so we don't end up with duplicate forms.
    embedRef.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://my.leadcapture.io/embed.min.js';
    script.async = true;
    script.setAttribute('data-funnel', '9E2N4z7Dwm');
    embedRef.current.appendChild(script);
  }, []);

  // The LeadCapture funnel renders its own headline / subheadline / card chrome,
  // so we drop the outer Vance chip + h3 to avoid duplicating the copy. The
  // CSS in styles.css flattens the embed's card so the surrounding Vance card
  // stays the sole visual frame.
  return (
    <div id="estimate" style={{ borderRadius: '1.5rem' }}>
      <div ref={embedRef} className="leadcapture-embed" style={{ minHeight: 460 }} />
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="form-label">{label}</label>
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
      {children}
    </div>
  );
}

// ============================================================
// TRUST BAR
// ============================================================
function TrustBar() {
  const items = [
    { icon: 'star', text: `${C.rating} · ${C.reviewCount} Google reviews` },
    { icon: 'shieldCheck', text: 'TX Licensed TACLA29217E' },
    { icon: 'mapPin', text: `${C.serviceRadiusMiles}-mile radius from ${C.city}` },
    { icon: 'zap', text: '24/7 Emergency' },
    { icon: 'receipt', text: 'Free Install Estimates' }
  ];
  return (
    <section className="bg-gray-50 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-wrap items-center justify-between gap-y-4">
          {items.map((it, i) => (
            <React.Fragment key={it.text}>
              <div className="flex items-center gap-2.5 text-gray-700">
                <window.Icon name={it.icon} size={17} className="text-blue-600" />
                <span className="text-sm font-medium">{it.text}</span>
              </div>
              {i < items.length - 1 && <span className="hidden lg:block w-px h-5 bg-gray-300" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES — Spotlight Cards
// ============================================================
function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="chip">What We Do</span>
          <h2 className="font-display text-4xl lg:text-6xl mt-5 text-gray-900">Everything in your home that heats, cools, or breathes.</h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">From a noisy condenser at 11pm in July to a full system replacement — one family-owned crew, one Houston phone number, accountable from quote to walk-through.</p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {C.services.map((s, i) => (
            <div key={s.title} className="reveal shine-border" data-delay={i * 70}>
              <window.SpotlightCard style={{ height: '100%' }}>
                <div className="p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 grid place-items-center text-blue-600">
                      <window.Icon name={s.icon} size={22} />
                    </div>
                    {s.price && (
                      <span className="text-[0.7rem] font-semibold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                        {s.price}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl mt-6 text-gray-900" style={{letterSpacing: '-0.02em'}}>{s.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-gray-600 leading-relaxed flex-grow">{s.description}</p>
                </div>
              </window.SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SPONSORS / CERTIFICATIONS — Vance-specific
// ============================================================
function Sponsors() {
  const items = [
    { key: 'ruud', label: 'Ruud Pro Partner', sub: 'Authorized installer' },
    { key: 'txlic', label: 'TX HVAC Licensed', sub: 'TACLA #00029217E' },
    { key: 'bbb', label: 'BBB Listed', sub: 'Rosenberg, TX' },
    { key: 'family', label: 'Family-Owned', sub: 'Greater Houston Since 1997' }
  ];
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center reveal">
          <span className="chip">Certifications & Partnerships</span>
          <h2 className="font-display text-3xl lg:text-4xl mt-5 text-gray-900 leading-[1.1]">
            Backed by the brands Houston homeowners already trust.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {items.map((it, i) => (
            <div key={it.key} className="card p-7 flex flex-col items-center text-center reveal" data-delay={i * 70}
              style={{ minHeight: '210px', justifyContent: 'space-between' }}>
              <div className="flex-1 grid place-items-center w-full">
                <SponsorMark kind={it.key} />
              </div>
              <div className="mt-4">
                <div className="font-semibold text-gray-900 text-sm">{it.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorMark({ kind }) {
  if (kind === 'ruud') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Inter, sans-serif' }}>
        <div style={{
          background: '#C8202E', color: '#fff', padding: '8px 14px', borderRadius: 4,
          fontWeight: 900, fontSize: '1.35rem', letterSpacing: '0.04em',
          fontStyle: 'italic',
          boxShadow: 'inset 0 -3px 0 rgba(0,0,0,0.18)'
        }}>RUUD</div>
        <div style={{ textAlign: 'left', lineHeight: 1.05 }}>
          <div style={{ fontWeight: 900, fontSize: '0.78rem', color: '#0E2A5C', letterSpacing: '-0.01em' }}>PRO ✓</div>
          <div style={{ fontWeight: 700, fontSize: '0.65rem', color: '#374151', letterSpacing: '0.1em', marginTop: 2 }}>PARTNER</div>
        </div>
      </div>
    );
  }
  if (kind === 'txlic') {
    // Texas state outline + license #
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>
        <svg viewBox="0 0 60 60" width="58" height="58" aria-hidden="true">
          {/* Stylized Texas outline */}
          <path d="M12 14 L34 14 L34 10 L42 10 L42 14 L48 14 L48 28 L46 32 L44 36 L42 42 L38 48 L34 52 L28 50 L24 48 L20 48 L16 44 L14 40 L10 38 L10 32 L8 28 L10 22 L12 18 Z"
            fill="#0E2A5C" stroke="#0E2A5C" strokeWidth="1" strokeLinejoin="round" />
          <text x="30" y="34" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10" fill="#fff" letterSpacing="0.04em">TEXAS</text>
        </svg>
        <div style={{ fontWeight: 900, fontSize: '0.72rem', color: '#0E2A5C', letterSpacing: '0.08em', marginTop: 6 }}>TDLR LICENSED</div>
        <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: '0.65rem', color: '#6b7280', marginTop: 3 }}>TACLA00029217E</div>
      </div>
    );
  }
  if (kind === 'bbb') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{
          background: '#003366', color: '#fff', padding: '6px 14px', borderRadius: 6,
          fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.04em'
        }}>BBB</div>
        <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#003366', letterSpacing: '0.02em', lineHeight: 1, marginTop: 10 }}>LISTED</div>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#003366', letterSpacing: '0.12em', marginTop: 4 }}>BUSINESS</div>
      </div>
    );
  }
  if (kind === 'family') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>
        <svg viewBox="0 0 60 60" width="56" height="56" aria-hidden="true">
          <path d="M30 6 L52 22 L52 50 L36 50 L36 36 L24 36 L24 50 L8 50 L8 22 Z"
            fill="#C8202E" stroke="#7f1620" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="30" cy="20" r="3" fill="#fff"/>
        </svg>
        <div style={{ fontWeight: 900, fontSize: '0.85rem', color: '#7f1620', letterSpacing: '-0.01em', marginTop: 4 }}>FAMILY-OWNED</div>
        <div style={{ fontSize: '0.65rem', color: '#6b7280', fontWeight: 700, letterSpacing: '0.06em', marginTop: 2 }}>EST. 1997</div>
      </div>
    );
  }
  return null;
}

// ============================================================
// WHY US
// ============================================================
function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="chip">Why Vance</span>
          <h2 className="font-display text-4xl lg:text-6xl mt-5 text-gray-900">What Houston homeowners keep saying.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {C.pillars.map((p, i) => (
            <div key={p.title} className="card p-9 text-center reveal" data-delay={i * 100}>
              <div className="w-14 h-14 rounded-full bg-blue-50 grid place-items-center text-blue-600 mx-auto">
                <window.Icon name={p.icon} size={24} stroke={2} />
              </div>
              <h3 className="font-display text-xl mt-6 text-gray-900">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// OUR WORK — photo gallery
// ============================================================
function OurWork() {
  const [active, setActive] = useState(null);
  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="chip">Our Work</span>
            <h2 className="font-display text-4xl lg:text-6xl mt-5 text-gray-900 leading-[1.04]">Real installs. Real homes. Across Greater Houston.</h2>
          </div>
          <p className="text-gray-600 max-w-md">Every photo here is a job we did ourselves — no stock images, no AI renders. Click any photo to expand.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {C.gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setActive(i)}
              className="reveal group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] focus:outline-none"
              data-delay={i * 50}
              style={{ border: '1px solid #e5e7eb' }}
            >
              <img src={g.src} alt={g.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {g.caption}
              </div>
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <window.Icon name="expand" size={12} className="text-gray-700" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          items={C.gallery}
          index={active}
          onClose={() => setActive(null)}
          onNav={(d) => setActive(a => (a + d + C.gallery.length) % C.gallery.length)}
        />
      )}
    </section>
  );
}

function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNav]);
  const item = items[index];
  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm grid place-items-center p-6" onClick={onClose}>
      <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center text-white" onClick={onClose}>
        <window.Icon name="x" size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNav(-1); }} className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center text-white">
        <window.Icon name="arrowRight" size={22} className="rotate-180" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNav(1); }} className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center text-white">
        <window.Icon name="arrowRight" size={22} />
      </button>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption} className="w-full max-h-[80vh] object-contain rounded-xl" />
        <div className="text-center text-white text-sm mt-4 font-medium">{item.caption} · <span className="text-white/60 font-mono">{index + 1} / {items.length}</span></div>
      </div>
    </div>
  );
}

// ============================================================
// SERVICE AREAS — Greater Houston map
// ============================================================
function ServiceAreas() {
  const totalCities = C.serviceAreas.reduce((n, g) => n + g.cities.length, 0);
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="reveal">
            <span className="chip">Where We Work</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-5 text-gray-900 leading-[1.05]">
              {totalCities}+ towns inside a {C.serviceRadiusMiles}-mile radius of {C.city}.
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We dispatch out of the Fulshear / Pecan Grove area, covering the West Houston corridor — Katy, Sugar Land, Richmond, Rosenberg, Missouri City, Sienna, and everything in between. Most service calls reached in under an hour.
            </p>
            <div className="mt-10 space-y-4">
              {C.serviceAreas.map((g, i) => (
                <div key={g.name} className="card p-6 reveal" data-delay={i * 70}>
                  <div className="flex items-center gap-3">
                    <window.Icon name="mapPin" size={18} className="text-blue-600" />
                    <h3 className="font-display text-base text-gray-900" style={{letterSpacing: '-0.01em'}}>{g.name}</h3>
                    <span className="ml-auto text-xs font-mono text-gray-400">{g.cities.length} towns</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{g.cities.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal sticky top-28" data-delay="120">
            <HoustonMap />
          </div>
        </div>
      </div>
    </section>
  );
}

// Texas + Houston service-area map image (client-provided).
function HoustonMap() {
  return (
    <div className="relative grid place-items-center" style={{ minHeight: '480px' }}>
      <img
        src="img/houston-map.png"
        alt={`Texas state with Vance service area highlighted around ${C.city} in the Greater Houston metro`}
        className="block max-w-full"
        style={{ maxHeight: '620px', width: 'auto' }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap" style={{ boxShadow: '0 8px 20px -8px rgba(29,78,216,0.5)' }}>
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-white opacity-70 animate-ping"></span>
          <span className="relative w-2 h-2 rounded-full bg-white"></span>
        </span>
        <span className="text-xs font-bold tracking-wide">HQ · {C.city}, {C.state}</span>
      </div>
    </div>
  );
}

// ============================================================
// TALK TO TECH
// ============================================================
function TalkToTech() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center reveal">
        <div className="relative inline-block">
          <window.InitialsAvatar name={C.ownerName} size={96} />
          <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 ring-4 ring-white grid place-items-center">
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </span>
        </div>
        <div className="mt-7"><span className="chip gray">Direct Line</span></div>
        <h2 className="font-display text-4xl lg:text-5xl mt-5 text-gray-900 leading-[1.05]">
          Talk to {C.ownerName} — today.
        </h2>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          Not a call center. Not a "we'll get back to you." The Vance family has lived in Pecan Grove for 34+ years and run the business themselves — the principal you're hiring is the one walking through your door.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#estimate" className="btn btn-primary btn-lg">
            Get a Free Estimate
            <window.Icon name="arrowRight" size={16} />
          </a>
          <a href={`tel:${C.phoneRaw}`} className="btn btn-ghost btn-lg">
            <window.Icon name="phone" size={16} />
            <span className="font-mono">{C.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// REVIEWS — vertical scrolling testimonials columns
// ============================================================
function Reviews() {
  const all = C.reviews;
  const col1 = all.filter((_, i) => i % 3 === 0);
  const col2 = all.filter((_, i) => i % 3 === 1);
  const col3 = all.filter((_, i) => i % 3 === 2);
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="chip">Reviews</span>
          <h2 className="font-display text-4xl lg:text-6xl mt-5 text-gray-900 leading-[1.02]">
            <span className="font-mono text-blue-600">{C.reviewCount}</span> five-star reviews. Here's why.
          </h2>
          <p className="mt-5 text-lg text-gray-600">Real reviews from Houston-area customers — Google, Angi, Nextdoor &amp; vanceairandheat.com.</p>
        </div>
      </div>

      <div className="testimonials-stage mt-16 reveal">
        <window.TestimonialsColumn items={col1} duration={42} />
        <window.TestimonialsColumn items={col2} duration={50} className="hidden md:block" />
        <window.TestimonialsColumn items={col3} duration={46} className="hidden lg:block" />
      </div>

      <div className="text-center mt-12 reveal">
        <a href={`https://www.google.com/search?q=${encodeURIComponent(C.legalName + ' ' + C.city + ' ' + C.state)}`} target="_blank" rel="noopener" className="btn btn-ghost text-sm">
          Read all {C.reviewCount} on Google
          <window.Icon name="arrowRight" size={14} />
        </a>
      </div>
    </section>
  );
}

// ============================================================
// CTA BANNER
// ============================================================
function CTABanner() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#2563eb' }}>
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-60"></div>
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-400 blur-3xl opacity-30"></div>
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative">
        <span className="chip white">No Cool? No Heat?</span>
        <h2 className="font-display text-4xl lg:text-6xl mt-6 text-white leading-[1.02]">We answer the phone — even at 2am in August.</h2>
        <p className="mt-6 text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
          {C.yearsInBusiness}+ years across the Greater Houston metro. Family-owned, 24/7 emergency service. Skip the form when it's urgent — we're standing by.
        </p>
        <div className="mt-10">
          <a href={`tel:${C.phoneRaw}`} className="btn btn-white btn-lg" style={{padding: '1.2rem 2.2rem', fontSize: '1.15rem'}}>
            <window.Icon name="phone" size={18} />
            <span className="font-mono font-bold">{C.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  const stats = [
    { v: `${C.yearsInBusiness}+`, l: 'Years serving Houston', sub: `Since ${C.yearFounded}` },
    { v: `${C.reviewCount}+`, l: 'Five-star reviews', sub: 'Verified Google' },
    { v: `${C.serviceRadiusMiles}mi`, l: 'Service radius', sub: `From ${C.city}` },
    { v: '24/7', l: 'Emergency service', sub: '7 days a week' }
  ];
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal">
            <span className="chip">About {C.businessName}</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-5 text-gray-900 leading-[1.05]">A neighbor who happens to fix HVAC.</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{C.ownerBio}</p>
            <div className="mt-7 flex items-center gap-4">
              <window.InitialsAvatar name={C.ownerName} size={48} />
              <div>
                <div className="font-semibold text-gray-900">Randy &amp; Teresa Vance</div>
                <div className="text-sm text-gray-500">Owner-Operators</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal" data-delay="100">
            {stats.map((s, i) => (
              <div key={i} className="card p-7" style={{ minHeight: '170px' }}>
                <div className="font-display text-5xl text-blue-600" style={{letterSpacing: '-0.04em'}}>{s.v}</div>
                <div className="mt-3 font-semibold text-gray-900">{s.l}</div>
                <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center reveal">
          <span className="chip">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-5 text-gray-900">Quick answers.</h2>
        </div>
        <div className="mt-12 reveal">
          {C.faq.map((item, i) => (
            <div key={i} className={`accordion-item ${open === i ? 'open' : ''}`}>
              <button className="accordion-trigger" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <window.Icon name="chevDown" size={20} className="chev" />
              </button>
              <div className="accordion-content"><div>{item.a}</div></div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500 reveal">
          Still have questions? <a href={`tel:${C.phoneRaw}`} className="text-blue-600 font-semibold hover:underline">Call us at <span className="font-mono">{C.phone}</span></a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MOBILE DOCK
// ============================================================
function MobileDock() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const ids = ['top', 'services', 'reviews', 'work'];
    const onScroll = () => {
      let cur = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="m-dock" aria-label="Mobile navigation">
      <button className={`m-dock-item ${active === 'top' ? 'active' : ''}`} onClick={() => go('top')}>
        <window.Icon name="home" size={20} />
        <span>Home</span>
      </button>
      <button className={`m-dock-item ${active === 'services' ? 'active' : ''}`} onClick={() => go('services')}>
        <window.Icon name="wrench" size={20} />
        <span>Services</span>
      </button>
      <a href={`tel:${C.phoneRaw}`} className="m-dock-fab" aria-label={`Call ${C.phone}`}>
        <window.Icon name="phone" size={22} />
        <span>CALL</span>
      </a>
      <button className={`m-dock-item ${active === 'reviews' ? 'active' : ''}`} onClick={() => go('reviews')}>
        <window.Icon name="star" size={20} fill="currentColor" stroke={0} />
        <span>Reviews</span>
      </button>
      <button className={`m-dock-item ${active === 'work' ? 'active' : ''}`} onClick={() => go('estimate')}>
        <window.Icon name="receipt" size={20} />
        <span>Quote</span>
      </button>
    </nav>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <BrandLockup />
            <p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-xs">
              Family-owned heating &amp; cooling, serving the Greater Houston area within a {C.serviceRadiusMiles}-mile radius of {C.city} since 1997.
            </p>
            <a href={`tel:${C.phoneRaw}`} className="btn btn-primary text-sm mt-6" style={{padding: '0.7rem 1.3rem'}}>
              <window.Icon name="phone" size={14} />
              <span className="font-mono">{C.phone}</span>
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">Services</div>
            <ul className="space-y-2.5 text-sm">
              {C.services.map(s => (
                <li key={s.title}><a href="#services" className="text-gray-700 hover:text-blue-600">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <window.Icon name="phone" size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="font-mono">{C.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <window.Icon name="mapPin" size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{C.city}, {C.state} (Pecan Grove area)<br/><span className="text-gray-500 text-xs">{C.serviceRadiusMiles}-mile service radius</span></span>
              </li>
              <li className="flex items-start gap-3">
                <window.Icon name="clock" size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>24/7 Emergency<br/><span className="text-gray-500 text-xs">Office: Mon–Fri 7am–5pm</span></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {C.legalName}. TX Licensed TACLA00029217E. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <window.Stars value={5} size={12} />
            <span><span className="font-mono font-semibold text-gray-700">{C.rating}</span> · {C.reviewCount} reviews</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://www.leadportalapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors tracking-wide"
          >
            Powered by LeadPortal
          </a>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// TWEAKS
// ============================================================
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#0E2A5C",
  "typeSpeed": 90,
  "rotateWords": "AC Repair, Heating, New Install, Maintenance, Heat Pumps",
  "density": "regular",
  "headlineWeight": 900
}/*EDITMODE-END*/;

// ============================================================
// APP
// ============================================================
function App() {
  const t = TWEAK_DEFAULTS;
  window.useScrollReveal();

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.primaryColor);
    r.style.setProperty('--headline-weight', t.headlineWeight);
    r.setAttribute('data-density', t.density);
  }, [t.primaryColor, t.headlineWeight, t.density]);

  const words = (t.rotateWords || '').split(',').map(s => s.trim()).filter(Boolean);
  const safeWords = words.length ? words : C.rotatingWords;

  return (
    <div className="hvac-themed">
      <Nav />
      <main>
        <Hero rotateWords={safeWords} typeSpeed={t.typeSpeed} />
        <TrustBar />
        <Services />
        <Sponsors />
        <WhyUs />
        <ServiceAreas />
        <TalkToTech />
        <Reviews />
        <OurWork />
        <CTABanner />
        <About />
        <FAQ />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
