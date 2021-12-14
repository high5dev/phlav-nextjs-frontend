import React from "react";
import Link from "next/link";
import { PhoneOutlined } from '@ant-design/icons';
import styles from "../../../styles/Home.module.css";

const Police = () => (

  <div  className={styles.phone_17}>
  <div className={styles.phone_card}>
  <h1>17</h1>
          <span>{"Gendarmerie nationale, police"}</span>
  </div>
  <Link href="/">
    <a className={styles.call}><PhoneOutlined /></a>
  </Link>
</div>

);

export default Police;
