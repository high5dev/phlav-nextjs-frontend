import React from "react";
import Link from "next/link";
import { PhoneOutlined } from "@ant-design/icons";
import styles from "../../../styles/Home.module.css";

const Samu = () => (
    
  <div className={styles.phone_15}>
    <div className={styles.phone_card}>
      <h1>15</h1>
      <span>{"Service d'aide médicale urgente (SAMU)"}</span>
    </div>
    <Link href="/">
      <a className={styles.call}>
        <PhoneOutlined />
      </a>
    </Link>
  </div>
);

export default Samu;
