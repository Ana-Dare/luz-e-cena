import styles from "./Link.module.css";

const Link = ({ children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a className={styles.link}>{children}</a>;
};

export default Link;
