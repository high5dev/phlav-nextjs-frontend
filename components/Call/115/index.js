import React from "react";
import Link from "next/link";
import { PhoneOutlined } from '@ant-design/icons';
import styles from "../../../styles/Home.module.css";

const Bedroom = () => (


  <div  className={styles.phone_115}>
  <div className={styles.phone_card}>
  <h1>115</h1>
          <span>{"Urgence sociale (Hébergement)"}</span>
  </div>
  <Link href="/">
    <a className={styles.call}><PhoneOutlined /></a>
  </Link>
</div>


);

export default Bedroom;
