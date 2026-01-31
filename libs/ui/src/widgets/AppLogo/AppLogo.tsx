import Link from 'next/link';
import LogoIcon from '../../icons/Logo';
import './AppLogo.styles.scss';

interface Props {
  isVertical?: boolean;
}

export const AppLogo = ({ isVertical = false }: Props) => {
  const title = 'Travel Guide In UA';
  const slogan = 'Discover Ukraine Deeper';

  return (
    <Link href="/" className={`brand ${isVertical ? 'brand--vertical' : ''}`}>
      <LogoIcon className="brand__icon" aria-hidden="true" />

      <div className="brand__text">
        <h4 className="brand__title">{title}</h4>
        <p className="brand__slogan">{slogan}</p>
      </div>
    </Link>
  );
};
