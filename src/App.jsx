import { useEffect, useRef, useState } from 'react';
import Brand from './components/Brand';
import Icon from './components/Icon';
import Dashboard from './components/Dashboard';
import DemoModal from './components/DemoModal';

function Navigation({ onDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  return <header className="site-header"><div className="container nav-shell"><a href="#" className="brand-link" aria-label="PULSE home"><Brand showPeriod={false}/></a><nav id="main-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation"><a href="#why-pulse" onClick={() => setMenuOpen(false)}>Why Pulse</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><button className="mobile-cta" onClick={() => { setMenuOpen(false); onDemo(); }}>Explore the demo <Icon name="arrow" size={16}/></button></nav><button className="button button-lime nav-cta" onClick={onDemo}>Get started <Icon name="diagonal" size={16}/></button><button ref={menuButton} className="menu-button icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={24}/></button></div></header>;
}

function Hero({ onDemo }) {
  return <section className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="hero-eyebrow"><span className="live-dot"/> BUILT FOR A BORDERLESS WAY OF WORKING</div><h1>Your work<br/>is global.<br/><span>Your payments<br/>should be too.</span></h1><p>Request, receive, and track global payments in supported stablecoins. Built for freelancers and digital businesses moving beyond borders.</p><div className="hero-actions"><button className="button button-lime" onClick={onDemo}>Get started <Icon name="diagonal" size={18}/></button><a className="text-link" href="#how-it-works"><span className="play-icon">▷</span> See how it works</a></div><div className="hero-note"><span className="note-rule"/> A global payment idea. A Nightfall concept.</div></div><Dashboard onDemo={onDemo}/></div><div className="hero-bottom container"><span>Made for work that goes places.</span><div><span><Icon name="globe" size={16}/> Global by design</span><span><Icon name="wallet" size={16}/> Stablecoin powered</span><span><Icon name="grid" size={16}/> Clarity, in one place</span></div></div></section>;
}

function Problem() {
  return <section className="problem section" id="why-pulse"><div className="container"><div className="problem-intro"><span className="eyebrow">THE WORLD IS YOUR WORKSPACE</span><h2>Great work crosses borders.<br/><span>Payment clarity should follow.</span></h2><p>A client in one country. A project in another.<br className="desktop-break"/> Keeping track of it all shouldn’t be another job.</p></div><div className="problem-grid">{[
    ['01', 'Too many places to look.', 'Payment details scattered across chats, emails, and different tools.'],
    ['02', 'Too much left to guess.', 'Uncertainty around what’s been requested and what’s still on the way.'],
    ['03', 'Too little of the full picture.', 'More time piecing together activity. Less time focused on your work.'],
  ].map(([n, title, text]) => <div className="problem-item" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>;
}

function Features({ onDemo }) {
  return <section className="features section" id="features"><div className="container"><div className="section-heading"><div><span className="eyebrow">MEET YOUR PAYMENT WORKSPACE</span><h2>Less chasing.<br/>More moving forward.</h2></div><p>From the first link to the latest payment,<br className="desktop-break"/> keep the important things in view.</p></div><div className="feature-grid">
    <article className="feature-card feature-link"><div className="feature-copy"><span className="feature-icon"><Icon name="link"/></span><h3>A link. A simpler start.</h3><p>Create a payment link and give your client a clear place to begin.</p></div><div className="link-visual"><div className="link-preview"><span className="mini-pulse"><img src="/pulse-symbol.svg" alt=""/></span><span>Brand identity<small>Payment request · Demo</small></span><strong>1,250 <small>USDC</small></strong></div><button onClick={onDemo} className="link-visual-button"><span><Icon name="link" size={16}/> pulse.example / your-next-project</span><Icon name="diagonal" size={17}/></button></div><span className="feature-index">01 / PAYMENT LINKS</span></article>
    <article className="feature-card feature-receipts"><div className="feature-copy"><span className="feature-icon"><Icon name="wallet"/></span><h3>Global work. Stable receipts.</h3><p>Receive supported stablecoins, with payment details right where you need them.</p></div><div className="receipt-visual"><div className="receipt-check"><Icon name="check" size={25}/></div><span>Payment received</span><strong>1,250.00 <small>USDC</small></strong><div>Orbit Studio <span>·</span> Brand identity</div><small className="illustrative-label">Illustrative receipt</small></div><span className="feature-index">02 / STABLECOIN RECEIPTS</span></article>
    <article className="feature-card feature-tracking"><div className="feature-copy"><span className="feature-icon"><Icon name="activity"/></span><h3>Know what’s on its way.</h3><p>Follow incoming payments from a shared request to a received payment.</p></div><div className="tracking-visual"><div><span className="avatar peach">AC</span><span>Alex Chen<small>Website design</small></span><strong>850.00 <small>USDC</small></strong></div><div className="progress-track"><span className="complete"><Icon name="check" size={12}/></span><i/><span className="complete"><Icon name="check" size={12}/></span><i className="dashed"/><span className="pending-dot"/></div><div className="progress-labels"><span>Link created</span><span>Shared</span><span>Awaiting payment</span></div><span className="illustrative-label">Illustrative payment status</span></div><span className="feature-index">03 / INCOMING-PAYMENT TRACKING</span></article>
    <article className="feature-card feature-activity"><div className="feature-copy"><span className="feature-icon"><Icon name="grid"/></span><h3>The whole picture. One place.</h3><p>Keep your payment activity organized in one considered dashboard.</p></div><div className="activity-visual"><div className="activity-head"><span>Payment activity</span><span>Demo overview <Icon name="grid" size={12}/></span></div><div className="activity-row"><span className="avatar lavender">OS</span><span>Orbit Studio</span><span className="received"><Icon name="check" size={11}/> Received</span><strong>1,250.00</strong></div><div className="activity-row"><span className="avatar peach">AC</span><span>Alex Chen</span><span className="pending">Pending</span><strong>850.00</strong></div><div className="activity-row"><span className="avatar mint">NC</span><span>Nova Creative</span><span className="received"><Icon name="check" size={11}/> Received</span><strong>2,400.00</strong></div></div><span className="feature-index">04 / TRANSACTION DASHBOARD</span></article>
  </div></div></section>;
}

function HowItWorks({ onDemo }) {
  const steps = [
    { n: '01', icon: 'link', title: 'Create your link.', text: 'Add the payment details and create a link for your next project.' },
    { n: '02', icon: 'send', title: 'Send it their way.', text: 'Share the link with your client, wherever your conversation happens.' },
    { n: '03', icon: 'activity', title: 'Keep it in sight.', text: 'Track the incoming payment and see your activity come together.' },
  ];
  return <section className="how-section section" id="how-it-works"><div className="container"><div className="how-heading"><span className="eyebrow">A SIMPLE FLOW, FROM THE START</span><h2>From your work<br/>to your next payment.</h2><p>Three steps. One connected experience.</p></div><div className="steps">{steps.map(step => <article className="step" key={step.n}><div className="step-top"><span className="step-icon"><Icon name={step.icon} size={27}/></span><span className="step-number">{step.n}</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><button className="text-link dark-link" onClick={onDemo}>Try the interactive demo <Icon name="arrow" size={18}/></button><p className="how-note">A product concept. No real payments or wallet connection.</p></div></section>;
}

function Closing({ onDemo }) {
  return <section className="closing"><div className="container closing-inner"><div><span className="eyebrow">YOUR NEXT CHAPTER, WITHOUT BORDERS</span><h2>Good work goes places.<br/><span>Let your payments follow.</span></h2><p>Meet a clearer way to manage global payments.</p><button className="button button-lime" onClick={onDemo}>Explore the Pulse demo <Icon name="diagonal" size={18}/></button><small>Concept experience. No sign-up required.</small></div><div className="closing-symbol" aria-hidden="true"><img src="/pulse-symbol.svg" alt=""/><span className="closing-orbit"/></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><a className="brand-link" href="#" aria-label="PULSE home"><Brand/></a><p>Global work. Connected payments.</p></div><nav aria-label="Footer navigation"><a href="#why-pulse">Why Pulse</a><a href="#features">Features</a><a href="#how-it-works">How it works</a></nav><a className="back-to-top" href="#">Back to top <Icon name="diagonal" size={16}/></a></div><div className="footer-bottom"><span>A concept project by <strong>Nightfall.</strong></span><span>Fictional product. Built to explore what’s possible.</span><span>© {new Date().getFullYear()} PULSE Concept</span></div></div></footer>;
}

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation onDemo={openDemo}/><main id="main"><Hero onDemo={openDemo}/><Problem/><Features onDemo={openDemo}/><HowItWorks onDemo={openDemo}/><Closing onDemo={openDemo}/></main><Footer/><DemoModal open={demoOpen} onClose={() => setDemoOpen(false)}/></>;
}
