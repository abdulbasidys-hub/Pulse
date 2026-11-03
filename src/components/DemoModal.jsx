import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Brand from './Brand';

export default function DemoModal({ open, onClose }) {
  const dialog = useRef(null);
  const [created, setCreated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState('1250');
  const [purpose, setPurpose] = useState('Brand identity');
  useEffect(() => {
    if (open && !dialog.current.open) dialog.current.showModal();
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText('https://pulse.example/demo/brand-identity');
      setCopied(true);
    } catch { setCopied(false); }
  }

  return <dialog ref={dialog} className="demo-dialog" onCancel={onClose} onClick={e => { if (e.target === dialog.current) onClose(); }} aria-labelledby="demo-title">
    <div className="modal-header"><Brand small/><button className="icon-button" aria-label="Close demo" onClick={onClose}><Icon name="close"/></button></div>
    <span className="eyebrow">THE PULSE EXPERIENCE</span>
    <h2 id="demo-title">{created ? 'One link. All set.' : 'Meet your next payment link.'}</h2>
    <p className="modal-description">Explore a little of what PULSE could feel like. This is a fictional prototype; no payments are processed.</p>
    {!created ? <form onSubmit={e => { e.preventDefault(); setCreated(true); setCopied(false); }}><label htmlFor="purpose">What’s the payment for?</label><input id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} required maxLength={60}/><label htmlFor="amount">Demo amount</label><div className="amount-input"><input id="amount" type="number" min="1" max="1000000" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} required/><span>USDC</span></div><button className="button button-lime" type="submit">Create demo link <Icon name="arrow" size={18}/></button></form> : <div className="demo-result"><div className="demo-result-top"><span className="notification-check"><Icon name="check"/></span><span>Demo link created</span></div><h3>{Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <small>USDC</small></h3><p>{purpose}</p><div className="demo-link-output"><span>pulse.example/demo/brand-identity</span><button className="icon-button" onClick={copyLink} aria-label="Copy illustrative demo link"><Icon name={copied ? 'check' : 'copy'} size={18}/></button></div><p className="copy-feedback" role="status">{copied ? 'Illustrative link copied. This address cannot receive payments.' : 'Illustrative address only — this link cannot receive payments.'}</p><button className="button button-outline" onClick={() => setCreated(false)}>Try another demo <Icon name="arrow" size={17}/></button></div>}
    <p className="modal-footnote">A concept project by Nightfall. No account or wallet needed.</p>
  </dialog>;
}
