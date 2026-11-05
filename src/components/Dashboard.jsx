import product from '../data/product-demo.json';

function ProductPreview({ variant, onDemo }) {
  const view = product.views[variant];
  const button = view.requestButton;
  const buttonStyle = {
    left: `${button.x / view.width * 100}%`,
    top: `${button.y / view.height * 100}%`,
    width: `${button.width / view.width * 100}%`,
    height: `${button.height / view.height * 100}%`,
  };
  return <div className={`${variant}-product-preview`}>
    <div className={`canonical-product canonical-${variant}`}>
      <img className="canonical-product-image" src={view.asset} width={view.width} height={view.height}
        alt={`PULSE ${variant} dashboard concept. Total received: ${product.totalWhole}${product.totalDecimals} ${product.currency}. Incoming: ${product.incoming} ${product.currency}. Illustrative demo data.`}/>
      <button type="button" className="product-request-hotspot" style={buttonStyle}
        aria-label={`Create a demo payment link in the ${variant} preview`} onClick={onDemo}/>
    </div>
    <p className="canonical-preview-caption"><span/>{variant === 'mobile' ? 'Mobile app concept' : 'Product preview'} · Illustrative demo data</p>
  </div>;
}

export default function Dashboard({ onDemo }) {
  return <><ProductPreview variant="desktop" onDemo={onDemo}/><ProductPreview variant="mobile" onDemo={onDemo}/></>;
}
