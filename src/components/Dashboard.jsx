import Brand from './Brand';
import Icon from './Icon';

const transactions = [
  { initials: 'OS', name: 'Orbit Studio', note: 'Brand identity', amount: '1,250.00', status: 'Received', color: 'lavender' },
  { initials: 'AC', name: 'Alex Chen', note: 'Website design', amount: '850.00', status: 'Pending', color: 'peach' },
  { initials: 'NC', name: 'Nova Creative', note: 'Design retainer', amount: '2,400.00', status: 'Received', color: 'mint' },
];

export default function Dashboard({ onDemo }) {
  return <div className="product-scene">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="dashboard">
      <aside className="dashboard-sidebar" aria-hidden="true">
        <Brand small />
        <div className="sidebar-nav"><span className="selected"><Icon name="grid" size={14}/> Overview</span><span><Icon name="activity" size={14}/> Transactions</span><span><Icon name="link" size={14}/> Payment links</span></div>
        <div className="sidebar-bottom"><span className="avatar small">JD</span><span>Jamie Davis<small>Personal workspace</small></span></div>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-top"><span>Workspace <span className="slash">/</span> <strong>Overview</strong></span><div><Icon name="search" size={14}/><Icon name="bell" size={14}/><span className="avatar tiny">JD</span></div></div>
        <div className="dashboard-content">
          <div className="dashboard-heading"><div><h3>Your money, in motion.</h3><p>Here's your payment activity at a glance.</p></div><span className="demo-pill">DEMO</span></div>
          <div className="balance-card"><div><span>Total received <Icon name="wallet" size={13}/></span><strong>8,450<span>.00</span> <small>USDC</small></strong><p><span className="balance-dot"/> All-time demo activity</p></div><div className="balance-symbol"><img src="/pulse-symbol.svg" alt=""/></div></div>
          <div className="mini-stats"><div><span>Incoming payments</span><strong>850.00 <small>USDC</small></strong><span className="stat-note"><i/> 1 payment pending</span></div><div><span>Payment links</span><strong>03 <small>active links</small></strong><span className="stat-note blue"><Icon name="link" size={10}/> Ready to share</span></div></div>
          <div className="transaction-title"><h4>Recent activity</h4><span>Illustrative data</span></div>
          <div className="transactions">{transactions.map(t => <div className="transaction" key={t.name}><span className={`avatar ${t.color}`}>{t.initials}</span><div className="transaction-person"><strong>{t.name}</strong><span>{t.note}</span></div><div className="transaction-amount"><strong>{t.amount} <small>USDC</small></strong><span className={t.status.toLowerCase()}>{t.status === 'Received' && <Icon name="check" size={9}/>} {t.status}</span></div></div>)}</div>
          <button className="dashboard-create" onClick={onDemo}><Icon name="plus" size={12}/> Create payment link</button>
        </div>
      </div>
    </div>
    <div className="payment-notification"><span className="notification-check"><Icon name="check" size={18}/></span><div><strong>Payment received</strong><span>Orbit Studio · 1,250.00 USDC</span></div><span className="notification-time">just now<small>Demo</small></span></div>
    <div className="floating-link"><span className="floating-link-icon"><Icon name="link" size={19}/></span><span>Your next payment.<br/><strong>Just a link away.</strong></span><Icon name="diagonal" size={17}/></div>
    <p className="scene-caption"><span/> Product preview · Illustrative demo data</p>
  </div>;
}
