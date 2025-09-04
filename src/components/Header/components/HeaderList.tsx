import React from "react";
import styles from "../../Menu/MenuList/MenuList.module.css";

const HeaderList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={styles.navegacao}>{children}</ul>;
};

export default HeaderList;
