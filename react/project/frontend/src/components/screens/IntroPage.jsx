import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState({ products: 0, quality: 0, categories: 0 });

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);

    // Animate counters
    setTimeout(() => {
      let p = 0, q = 0, c = 0;
      const interval = setInterval(() => {
        p = Math.min(p + 1, 22);
        q = Math.min(q + 2, 100);
        c = Math.min(c + 1, 2);
        setCount({ products: p, quality: q, categories: c });
        if (p === 22 && q === 100 && c === 2) clearInterval(interval);
      }, 30);
    }, 800);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  const slideRight = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(36px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <div style={s.page}>

      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:0.15; } 50% { opacity:0.35; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* Background decorations */}
      <div style={s.bgCircle1} />
      <div style={s.bgCircle2} />
      <div style={s.bgDots} />

      {/* Top red bar */}
      <div style={s.topBar} />

      {/* ── LEFT CONTENT ── */}
      <div style={s.left}>

        {/* Logo + name */}
        <div style={{ ...s.logoRow, ...fade(0.1) }}>
          <img src="/logo.png" alt="VetCraft logo" style={s.logo} />
          <div>
            <div style={s.brandName}>VetCraft Healthcare</div>
            <div style={s.brandSub}>Serving Humanity..... Caring Animals</div>
          </div>
        </div>

        {/* Badge */}
        <div style={{ ...s.badge, ...fade(0.25) }}>
          Trusted Veterinary Solutions
        </div>

        {/* Headline */}
        <h1 style={{ ...s.headline, ...fade(0.35) }}>
          <span style={s.red}>Quality Products</span>
          <br />for Animals
        </h1>

        {/* Red divider */}
        <div style={{ ...s.divider, ...(visible ? { width: "80px" } : { width: "0px" }), transition: "width 1s ease 0.5s" }} />

        {/* About card */}
        <div style={{ ...s.aboutCard, ...fade(0.55) }}>
          <div style={s.cardLine} />
          <p style={s.para}>
            VetCraft Healthcare is a young and dedicated animal healthcare company offering a wide range of <strong>animal treatment</strong> and <strong>feed supplement products</strong> — made with care, tested for quality.
          </p>
          <p style={s.para}>
            We work with passion to improve the lives of cattle, livestock, and animals across the country. Our products are designed keeping the animal's health, safety, and recovery at the center.
          </p>
          <p style={{ ...s.para, marginBottom: 0 }}>
            With a robust product system and a dedicated team, we are firmly growing in the Veterinary Industry — because <em style={{ color: "#CC1111" }}>every animal deserves the best care.</em>
          </p>
        </div>

        {/* Stats */}
        <div style={{ ...s.statsRow, ...fade(0.75) }}>
          {[
            { number: `${count.products}+`, label: "Products" },
            { number: `${count.quality}%`, label: "Quality Assured" },
            { number: `${count.categories}+`, label: "Categories" },
            { number: "∞", label: "Animal Care" },
          ].map((item, i) => (
            <div key={i} style={s.statBox}>
              <div style={s.statNum}>{item.number}</div>
              <div style={s.statLbl}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ ...fade(0.9) }}>
          <button
            style={s.cta}
            onMouseEnter={e => { e.currentTarget.style.background = "#aa0e0e"; e.currentTarget.style.letterSpacing = "1.5px"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#CC1111"; e.currentTarget.style.letterSpacing = "0.5px"; }}
            onClick={() => navigate("/products")}
          >
            Explore Our Products &nbsp;→
          </button>
        </div>

      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={s.right}>

        {/* Spinning ring behind logo */}
        <div style={s.spinRing}>
          <div style={s.spinRingInner} />
        </div>

        {/* Big logo centered */}
        <div style={{ ...s.logoCircle, ...fade(0.3) }}>
          <img src="/logo.png" alt="VetCraft" style={s.bigLogo} />
        </div>

        {/* Category pills */}
        <div style={s.pillsWrap}>
          {[
            "Animal Feed Supplement",
            "Antibiotics",
            "Pain & Fever",
            "Antiparasitics",
            "Hormones & Vitamins",
            "Wound Care",
          ].map((cat, i) => (
            <div key={i} style={{ ...s.pill, ...slideRight(0.5 + i * 0.1) }}>
              <span style={s.pillDot} />
              {cat}
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom scrolling tagline ── */}
      <div style={s.marqueeWrap}>
        <div style={s.marqueeTrack}>
          {Array(6).fill("● Serving Humanity  ● Caring Animals  ● Best Quality Products  ● Trusted Veterinary Solutions  ").join(" ")}
        </div>
      </div>

    </div>
  );
};

const s = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#ffffff",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "70px 5vw 80px",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
    gap: "40px",
  },
  topBar: {
    position: "absolute", top: 0, left: 0, right: 0, height: "5px",
    background: "linear-gradient(90deg, #CC1111 0%, #ff5555 50%, #CC1111 100%)",
    zIndex: 20,
  },
  bgCircle1: {
    position: "absolute", top: "-120px", left: "-120px",
    width: "500px", height: "500px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(204,17,17,0.07) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  bgCircle2: {
    position: "absolute", bottom: "-80px", right: "20%",
    width: "360px", height: "360px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(204,17,17,0.05) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  bgDots: {
    position: "absolute", inset: 0,
    backgroundImage: "radial-gradient(rgba(204,17,17,0.07) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    pointerEvents: "none",
    opacity: 0.6,
  },

  // LEFT
  left: {
    flex: "0 0 54%",
    maxWidth: "580px",
    position: "relative",
    zIndex: 2,
  },
  logoRow: {
    display: "flex", alignItems: "center", gap: "14px",
    marginBottom: "28px",
  },
  logo: {
    width: "58px", height: "58px", objectFit: "contain",
    filter: "drop-shadow(0 3px 10px rgba(204,17,17,0.25))",
    borderRadius: "50%",
  },
  brandName: {
    fontSize: "21px", fontWeight: "700", color: "#CC1111",
    letterSpacing: "0.3px", fontFamily: "Georgia, serif",
  },
  brandSub: {
    fontSize: "11px", color: "#999", letterSpacing: "1px",
    textTransform: "uppercase", marginTop: "3px",
  },
  badge: {
    display: "inline-block",
    background: "#fff0f0", color: "#CC1111",
    border: "1px solid #ffcccc", borderRadius: "20px",
    padding: "5px 18px", fontSize: "11px",
    letterSpacing: "1.2px", textTransform: "uppercase",
    fontWeight: "700", marginBottom: "18px",
  },
  headline: {
    fontSize: "clamp(34px, 4.5vw, 58px)",
    fontWeight: "800", color: "#1a1a1a",
    lineHeight: 1.1, margin: "0 0 4px",
    fontFamily: "Georgia, serif",
  },
  red: { color: "#CC1111" },
  divider: {
    height: "4px", background: "#CC1111",
    borderRadius: "2px", margin: "18px 0 22px",
  },
  aboutCard: {
    background: "#fff", border: "1px solid #f5e0e0",
    borderRadius: "14px", padding: "22px 22px 18px 28px",
    marginBottom: "26px", position: "relative",
    boxShadow: "0 4px 20px rgba(204,17,17,0.07)",
  },
  cardLine: {
    position: "absolute", left: 0, top: "18px", bottom: "18px",
    width: "4px", background: "#CC1111", borderRadius: "0 3px 3px 0",
  },
  para: {
    fontSize: "14.5px", color: "#4a4a4a",
    lineHeight: "1.8", margin: "0 0 11px",
  },
  statsRow: {
    display: "flex", gap: "10px",
    marginBottom: "28px", flexWrap: "wrap",
  },
  statBox: {
    flex: "1 1 75px", background: "#fff",
    border: "1px solid #f0e0e0", borderRadius: "10px",
    padding: "14px 10px", textAlign: "center",
    boxShadow: "0 2px 10px rgba(204,17,17,0.05)",
  },
  statNum: {
    fontSize: "24px", fontWeight: "800",
    color: "#CC1111", fontFamily: "Georgia, serif",
  },
  statLbl: {
    fontSize: "10px", color: "#999",
    textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "4px",
  },
  cta: {
    background: "#CC1111", color: "#fff",
    border: "none", borderRadius: "50px",
    padding: "15px 38px", fontSize: "15px",
    fontWeight: "700", cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "background 0.25s ease, letter-spacing 0.25s ease",
    boxShadow: "0 6px 22px rgba(204,17,17,0.3)",
    fontFamily: "sans-serif",
  },

  // RIGHT
  right: {
    flex: "0 0 38%",
    display: "flex", flexDirection: "column",
    alignItems: "center", gap: "28px",
    position: "relative", zIndex: 2,
  },
  spinRing: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    width: "240px", height: "240px", borderRadius: "50%",
    border: "1.5px dashed rgba(204,17,17,0.25)",
    animation: "spinSlow 25s linear infinite",
    pointerEvents: "none",
  },
  spinRingInner: {
    position: "absolute", inset: "20px", borderRadius: "50%",
    border: "1px dashed rgba(204,17,17,0.15)",
  },
  logoCircle: {
    width: "190px", height: "190px", borderRadius: "50%",
    background: "#fff8f8",
    border: "2px solid rgba(204,17,17,0.12)",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 12px 40px rgba(204,17,17,0.12)",
    position: "relative", zIndex: 3,
  },
  bigLogo: {
    width: "145px", height: "145px",
    objectFit: "contain", borderRadius: "50%",
  },
  pillsWrap: {
    display: "flex", flexDirection: "column",
    gap: "9px", width: "100%",
    alignItems: "flex-end",
  },
  pill: {
    background: "#fff", border: "1px solid #f0cccc",
    color: "#CC1111", borderRadius: "50px",
    padding: "8px 18px", fontSize: "12.5px",
    fontWeight: "600", letterSpacing: "0.2px",
    boxShadow: "0 2px 8px rgba(204,17,17,0.08)",
    whiteSpace: "nowrap",
    display: "flex", alignItems: "center", gap: "8px",
  },
  pillDot: {
    width: "7px", height: "7px", borderRadius: "50%",
    background: "#CC1111", flexShrink: 0, display: "inline-block",
  },

  // Marquee
  marqueeWrap: {
    position: "absolute", bottom: 0, left: 0, right: 0,
    height: "36px", background: "#CC1111",
    overflow: "hidden", display: "flex", alignItems: "center",
    zIndex: 10,
  },
  marqueeTrack: {
    display: "inline-block",
    whiteSpace: "nowrap",
    color: "#fff", fontSize: "11px",
    letterSpacing: "1.5px", fontWeight: "600",
    animation: "marquee 30s linear infinite",
  },
};

export default IntroPage;