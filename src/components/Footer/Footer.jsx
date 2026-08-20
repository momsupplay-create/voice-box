import { ORG_NAME, ORG_TAGLINE } from '../../constants/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p className="app-footer__org-name">{ORG_NAME}</p>
      <p className="app-footer__org-tagline">{ORG_TAGLINE}</p>
    </footer>
  );
}
