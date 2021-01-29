import React from "react";

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <div>logo</div>
      <div>search bar</div>
      <div>signin / cart</div>
    </div>
  );
};

export default Header;
