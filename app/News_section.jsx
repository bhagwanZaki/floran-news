import React, { Suspense } from "react";
import styles from "../css/news.module.css";
import bg from "../asset/broken.jpg";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "http://api.mediastack.com/v1/news?access_key=39683cbc5dfdc897065c465506016b13&keywords=general&categories= science,business,entertainment,health,sports,technology&countries=us&sort=popularity",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function News_section() {
  const data = await getData();

  const news = await Promise.all([data]);
  const NewsItem = ({ label, date, catergory, img, url }) => {
    return (
      <Link target={"_blank"} href={url} className={styles.newsItem}>
        {img !== null ? (
          <img src={img} className={styles.newsImg} alt="img" />
        ) : (
          <Image src={bg} className={styles.newsImg} alt="img" />
        )}
        <div className={styles.content}>
          <h3>
            {catergory} - {date}
          </h3>
          <h1>{label}</h1>
        </div>
      </Link>
    );
  };

  return (
    <Suspense fallback={<div>Loading</div>}>
      {news == null ? (
        <div>loading</div>
      ) : "error" in news ? (
        <div>Something went wrong refresh the page</div>
      ) : (
        <section className={styles.newSection}>
          <div className={styles.upper}>
            <h1>Popular News</h1>
            <Link className={styles.viewAll} href={"popular"}>
              View All
            </Link>
          </div>
          <div className={styles.newsContainer}>
            {news[0].data.slice(0, 8).map((val, index) => {
              return (
                <NewsItem
                  key={index}
                  label={val.title}
                  date={val.published_at.slice(0, 10)}
                  catergory={val.category}
                  img={val.image}
                  url={val.url}
                />
              );
            })}
          </div>
        </section>
      )}
    </Suspense>
  );
}
