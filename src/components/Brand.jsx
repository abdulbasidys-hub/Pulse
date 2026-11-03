export default function Brand({ small = false, showPeriod = true }) {
  return <span className={`brand ${small ? 'brand-small' : ''}`}><img src="/pulse-symbol.svg" alt="" width="35" height="35" /><span>PULSE{showPeriod && <span className="brand-period">.</span>}</span></span>;
}
