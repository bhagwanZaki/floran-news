"use client";

import React, { useEffect, useState } from "react";
import styles from "../../css/popular.module.css";
import bg from "../../asset/broken.jpg";
import Image from "next/image";
import Link from "next/link";
import Masonry from "@mui/lab/Masonry";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { visuallyHidden } from "@mui/utils";

async function getData(setData, setLoading, id) {
  console.log("api call start");
  const res = await axios
    .get(
      `http://api.mediastack.com/v1/news?access_key=39683cbc5dfdc897065c465506016b13&keywords=general&categories= science,business,entertainment,health,sports,technology&countries=us&sort=popularity&offset=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => {
      console.log(data);
      setLoading(false);
      setData(data);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
}

export default function page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function callAPI() {
      await getData(setData, setLoading, 0);
    }

    callAPI();
  }, []);

  const handleChange = async (e, v) => {
    console.log("calling api");
    console.log(v);
    setLoading(true);
    await getData(setData, setLoading, v);
  };
  const NavItem = ({ img, label, date, catrgory, url }) => {
    return (
      <Link href={url} className={styles.newsItem}>
        {img === null ? (
          <></>
        ) : (
          <Image
            fill
            objectFit="contain"
            src={img}
            className={styles.img}
            alt="img"
          />
        )}
        <div className={styles.content}>
          <h3>
            {catrgory} - <b>{date}</b>
          </h3>
          <h1>{label}</h1>
        </div>
      </Link>
    );
  };

  return (
    <section className={styles.popularSec}>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: 2 }}
          open={true}
          onClick={() => {}}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      <h1 className={styles.title}>Popular News</h1>
      <div className={styles.navContiner}>
        <Masonry
          columns={5}
          spacing={1}
          // defaultHeight={450}
          defaultColumns={5}
          defaultSpacing={1}
        >
          {loading === false ? (
            data.data.data.map((val, index) => {
              return (
                <NavItem
                  key={index}
                  img={val.image}
                  label={val.title}
                  date={val.published_at.slice(0, 10)}
                  url={val.url}
                />
              );
            })
          ) : (
            <></>
          )}
        </Masonry>
      </div>
      <div className={styles.pagdiv}>
        <Pagination count={3000} color="primary" onChange={handleChange} />
      </div>
    </section>
  );
}
