import { useEffect, useState } from 'react'

const EMAIL = 'equity@madisonhunter.14kglobal'
const plan = [
  ['Define Your Goals', 'Our financial advisors help you set clear, measurable goals, build a realistic budget and forecast, and create a plan that strengthens your financial health and tax efficiency.'],
  ['Build Your Growth Plan', 'We turn your ideas into an actionable financial strategy, with cash flow projections, cost analysis and investor-ready financial models that support long-term business growth.'],
  ['Drive Profitable Growth', 'With accurate books, monthly reporting and data-driven insights, we help you improve margins, manage working capital and make confident decisions in a competitive US market.'],
  ['Accounting Services', 'Accurate financials fuel smart decisions. Our accounting services cover bookkeeping, payroll, financial reporting and tax preparation, so you get clean, tax-ready books every month.'],
]

const cur = () => location.pathname.replace(/\/$/, '') || '/'

function Link({ to, go, className, children }) {
  return <a href={to} className={className} onClick={e => { e.preventDefault(); go(to) }}>{children}</a>
}

function Feature({ label, title, children, img, flip }) {
  return (
    <div className={'feature' + (flip ? ' flip' : '')}>
      <div className="feature-text">
        <p className="label">{label}</p>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {img && <img src={img} alt="accounting-experts" loading="lazy" />}
    </div>
  )
}

function Home({ go }) {
  return <>
    <section className="hero">
      <div className="hero-text">
        <h1>Top Business Consulting & Accounting Services in USA</h1>
        <Link to="/contact-5k" go={go} className="btn">Book Consultation!</Link>
      </div>
      <img src="/img/hero.jpg" alt="5k-advisory-top-accounting-firm-in-philadelphia-2026" />
    </section>

    <section className="dark">
      <div className="container">
        <h2>Achieve Success Through Strategic Planning</h2>
        <p className="intro">At Madison Hunter, we help US startups and small businesses grow with expert financial advisory and accounting services. From tax planning and cash flow management to risk management, we deliver the clarity and measurable results your business needs to thrive in 2026.</p>
        <div className="cards">
          {plan.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <p className="center"><Link to="/services" go={go} className="btn">View All Services</Link></p>
      </div>
    </section>

    <section className="light">
      <div className="container about">
        <img src="/img/about.jpg" alt="accounting-experts-reviewing-financial-reports-usa" loading="lazy" />
        <div>
          <h2 className="tagline">Integrity at the Core, Success as the Goal.</h2>
        </div>
      </div>
      <div className="container narrow">
        <h2>We’re Not Just Consultants! We’re Growth Partners with Certified Accounting Experts</h2>
        <p>Serving startups and small businesses across the USA, Madison Hunter brings financial advisory, <Link to="/accountant-or-bookkeeper-first" go={go}>accounting services</Link> and business consulting under one roof. From tax strategy and risk management to <Link to="/fractional-cfo-services-for-small-businesses" go={go}>fractional CFO</Link> support, our accounting experts give US businesses the tools to grow sustainably and stay compliant.</p>
        <h3>Comprehensive Accounting & Audit Readiness</h3>
        <p>From bookkeeping and payroll to tax strategy and internal audit readiness, we keep your financial records accurate, compliant and aligned with your long-term business goals.</p>
      </div>
    </section>

    <section className="why">
      <div className="container why-grid">
        <div>
          <h2>Why Choose</h2>
          <p className="sub">Financial & Accounting Advisory for US Startups</p>
          <p>We bring hands-on experience, sharp industry insight and dedicated support to every engagement. Whether you're a startup, a small business or a growing mid-market company, we help you navigate complex financial challenges and seize growth opportunities with confidence.</p>
        </div>
        <img src="/img/why.jpg" alt="accounting-experts" loading="lazy" />
      </div>
    </section>

    <section className="light">
      <div className="container">
        <Feature label="Strategic Growth Solutions" title="Financial Consulting That Moves the Needle" img="/img/about.jpg">
          Our financial consultants don’t believe in one-size-fits-all. We build customized strategies to improve profit margins, strengthen cash flow, and build resilience for every stage, from market entry to full-scale expansion.
        </Feature>
        <Feature label="Market-Leading Insights" title="Stay Ahead with Proactive Advisory" flip>
          We track IRS updates, federal and state tax changes, and industry trends so you don’t have to. As a US financial advisory firm serving clients nationwide, we help you anticipate change, plan ahead for tax season and outperform competitors.
        </Feature>
        <Feature label="Comprehensive Business Expertise" title="360° Business Consulting Services">
          From financial strategy and <Link to="/hr-advisory" go={go}>HR compliance</Link> to risk management, <Link to="/management-advisor" go={go}>business operations</Link> and virtual accounting services, we provide full-stack support that helps US businesses stay compliant, scale smartly, and focus on long-term value.
        </Feature>
        <Feature label="Market-Leading Insights" title="Your Success Is Our Mission" flip>
          Collaboration is at the heart of how we work. Our financial advisors, business consultants and <Link to="/accounting-service" go={go}>accounting professionals</Link> work alongside you with open communication, transparent pricing and regular check-ins, so every recommendation fits your goals.
        </Feature>
      </div>
    </section>

    <section className="cta" style={{ backgroundImage: 'linear-gradient(#2d2d38cc,#2d2d38cc),url(/img/cta-bg.jpg)' }}>
      <div className="container center">
        <h2>We’re here to turn your vision into success with the best strategies and execution. Let’s start today.</h2>
        <Link to="/contact-5k" go={go} className="btn">Book Consultation</Link>
      </div>
    </section>

    <section className="touch">
      <h2>Get In Touch</h2>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </section>
  </>
}

function Contact() {
  const [state, setState] = useState('idle')
  const submit = e => { e.preventDefault(); setState('sent') }
  return <>
    <section className="inner-hero" style={{ backgroundImage: 'linear-gradient(#2d2d38b3,#2d2d38b3),url(/img/inner-hero.jpg)' }}>
      <h1>Get In Touch</h1>
    </section>
    <section className="container contact">
      <div>
        <h2>Send us a message</h2>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <img src="/img/contact.jpg" alt="consultancy companies" />
      </div>
      {state === 'sent'
        ? <p className="ok">Thank you! Your message has been sent.</p>
        : <form onSubmit={submit}>
            <label>Name<input required name="name" autoComplete="name" /></label>
            <label>Email<input required type="email" name="email" autoComplete="email" /></label>
            <label>Subject<input required name="subject" /></label>
            <label>Message<textarea required rows="6" name="message" /></label>
            <button className="btn">SEND AWAY</button>
          </form>}
    </section>
  </>
}

export default function App() {
  const [path, setPath] = useState(cur)
  const go = to => { history.pushState({}, '', to); setPath(cur()); scrollTo(0, 0) }
  useEffect(() => { const f = () => setPath(cur()); addEventListener('popstate', f); return () => removeEventListener('popstate', f) }, [])
  const contact = path === '/contact-5k' || path === '/contact-us' || path === '/contact'
  useEffect(() => { document.title = contact ? 'Contact Us' : 'Top Business Consulting & Accounting Services in USA' }, [contact])
  return <>
    <a className="skip" href="#content">Skip to content</a>
    <header className="site-header">
      <Link to="/" go={go} className="logo"><img src="/img/logo.png" alt="Madison Hunter" width="111" height="53" /></Link>
      <nav>
        <Link to="/" go={go} className={!contact ? 'on' : ''}>Home</Link>
        <Link to="/contact-5k" go={go} className={contact ? 'on' : ''}>Contact Us</Link>
      </nav>
      <div className="head-right">
        <Link to="/contact-us" go={go} className="btn sm">Book Consultation</Link>
      </div>
    </header>
    <main id="content">{contact ? <Contact /> : <Home go={go} />}</main>
    <footer className="site-footer">
      <nav><Link to="/" go={go}>Home</Link><Link to="/contact-5k" go={go}>Contact Us</Link></nav>
      <p>Copyright © 2026 Madison Hunter</p>
    </footer>
  </>
}
