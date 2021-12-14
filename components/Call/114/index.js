import React from "react";
import Link from "next/link";
import { PhoneOutlined } from "@ant-design/icons";
import styles from "../../../styles/Home.module.css";

const Malentendants = () => (

    <div  className={styles.phone_114}>
    <div className={styles.phone_card}>
    <h1>114</h1>
            <span>{"SMS, sourds et malentendants"}</span>
    </div>
    <Link href="/">
      <a className={styles.call}><PhoneOutlined /></a>
    </Link>
  </div>


);

export default Malentendants;
