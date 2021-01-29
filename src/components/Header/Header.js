import React from "react";
import SearchInput from "../SearchInput/SearchInput";

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <SearchInput placeholder="Search for games" />
      <div>signin / cart</div>
    </div>
  );
};

export default Header;
