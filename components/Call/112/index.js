import React from "react";
import Link from "next/link";
import { PhoneOutlined } from '@ant-design/icons';
import styles from "../../../styles/Home.module.css";

const UrgenceEuropéen = () => (
    <div  className={styles.phone_112}>
    <div className={styles.phone_card}>
    <h1>112</h1>
            <span>{"Numéro d'appel d'urgence"}</span>
    </div>
    <Link href="/">
      <a className={styles.call}><PhoneOutlined /></a>
    </Link>
  </div>
);

export default UrgenceEuropéen;
