import styles from './BrandBanner.module.css';
import BurgerMotorsports from '../assets/brands/burger-motorsports.webp';
import CtsTurbo from '../assets/brands/cts_turbo.webp';
import HandR from '../assets/brands/h-and-r.webp';
import Vr from '../assets/brands/logo_vr.webp';

function Brand(src) {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
}

export default function BrandBanner() {
  return (
    <div className={styles.brandsContainer}>
      <Brand src={BurgerMotorsports} />
      <Brand src={CtsTurbo} />
      <Brand src={HandR} />
      <Brand src={Vr} />
    </div>
  );
}
