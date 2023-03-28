import React, { Suspense } from "react";
import Image from "next/image";
import bg from "../asset/broken.jpg";
import News_card_hori from "@/components/News_card_hori";

async function getData() {
  const res = await fetch(
    "http://api.mediastack.com/v1/news?access_key=313b3f328ad7e6614ca4e04bf7f017f5&keywords=general&categories= science,business,entertainment,health,sports,technology&countries=us",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Recent_news_Section({ styles }) {
  const data = await getData();

  const recentNews = await Promise.all([data]);

  console.log("-=-=-=-===-=");
  console.log(recentNews);
  console.log("-=-=-=-===-=");
  return (
    <Suspense fallback={<div>Loading data</div>}>
      {recentNews == null ? (
        <div>loading</div>
      ) : "error" in recentNews ? (
        <div>Something went wrong refresh the page</div>
      ) : (
        <div className={styles.recentNews}>
          <h1 className={styles.sectionTitle}>Recent News</h1>
          <div className={styles.rnewsSec}>
            <div className={styles.firstrnews}>
              <Image
                fill
                src={
                  recentNews[0].data[0].image === null
                    ? bg
                    : recentNews[0].data[0].image
                }
                className={styles.firstrnewsimg}
                alt="img"
              />
              <div className={styles.rcontent}>
                <h3>
                  {recentNews[0].data[0].category} -{" "}
                  <b>{recentNews[0].data[0].published_at.slice(0, 10)}</b>
                </h3>
                <h2>{recentNews[0].data[0].title}</h2>
              </div>
            </div>
            <div className={styles.otherrnews}>
              {recentNews[0].data.slice(1, 9).map((val, index) => {
                return (
                  <News_card_hori
                    key={index}
                    styles={styles}
                    label={val.title}
                    date={val.published_at.slice(0, 10)}
                    img={val.image}
                    cat={val.category}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
}
