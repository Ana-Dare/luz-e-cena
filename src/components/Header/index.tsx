import Logo from "../Logo";
import HeaderActions from "./components/HeaderActions";
import HeaderFormFilters from "./components/HeaderFormFilters";
import HeaderLink from "./components/HeaderLink";
import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.cabecalho}> 
      <HeaderList>
        <HeaderListItem>
          <Logo src="/logo.png" />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLink />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
