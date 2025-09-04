import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterInstitucional from "./FooterInstitucional";
import FooterLogo from "./FooterLogo";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
        <FooterInstitucional />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
