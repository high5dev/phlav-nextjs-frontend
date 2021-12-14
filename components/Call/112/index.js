import React from "react";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

const UrgenceEuropéen = () => (
    <div  className={styles.phone_112}>

    <Link href="/">
      <a>112 - {"Numéro d'appel d'urgence"} </a>
    </Link>
  </div>
);

export default UrgenceEuropéen;
