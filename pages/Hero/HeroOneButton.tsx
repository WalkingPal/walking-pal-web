import { ReactNode } from 'react';
import styles from "./HeroOneButton.module.scss";

// type IHeroOneButtonProps = {
//   title: ReactNode;
//   description: string;
//   button: ReactNode;
// };

const HeroOneButton = () => (
  <header className="text-center">
    <h1 className={styles.main1}>
      Empowering Walking
    </h1>
    <div className={styles.main2}>Get you walking buddy anytime, anywhere!</div>

    <button className={styles.main3}>Register</button>
  </header>
);

export { HeroOneButton };
