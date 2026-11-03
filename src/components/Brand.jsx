export default function Brand({ small = false }) {
  return <span className={`brand ${small ? 'brand-small' : ''}`}><img src="/pulse-symbol.svg" alt="" width="35" height="35" /><span>PULSE<span className="brand-period">.</span></span></span>;
}
