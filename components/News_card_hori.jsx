import React from "react";
import Image from "next/image";
import bg from "../asset/broken.jpg";

function News_card_hori({ styles, label, img, date, cat }) {
  return (
    <div className={styles.rnewsCard}>
      <Image
        width={100}
        height={100}
        src={img === null ? bg : img}
        className={styles.rCardimg}
        alt="img"
      />
      <div className={styles.ccontent}>
        <h3>
          {cat} - <b>{date}</b>
        </h3>
        <h2>{label}</h2>
      </div>
    </div>
  );
}

export default News_card_hori;
