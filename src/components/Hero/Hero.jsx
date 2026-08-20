import { Link } from 'react-router-dom';
import { SERVICE_TAGLINE, HERO_SUBTEXT } from '../../constants/site';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div>
          <h1 className="hero__title">{SERVICE_TAGLINE}</h1>
          <p className="hero__subtext">{HERO_SUBTEXT}</p>
        </div>
        <Link to="/write" className="btn-cta hero__cta">
          의견 남기기
        </Link>
      </div>
    </section>
  );
}
