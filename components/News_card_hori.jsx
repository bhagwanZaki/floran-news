import React from "react";
import Image from "next/image";

function News_card_hori({styles,label,img,date,cat}) {
  return (
    <div className={styles.rnewsCard}>
      {img !== null ?
      <img src={img} className={styles.rCardimg} alt="img" /> :<></>
      }
      <div className={styles.ccontent}>
        <h3>{cat} - <b>{date}</b></h3>
        <h2>{label}</h2>
      </div>
    </div>
  );
}

export default News_card_hori;
