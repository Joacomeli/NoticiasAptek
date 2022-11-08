import React, { useEffect, useState } from "react";
import NewsItem from "../news-item/Main";
import { APICall } from "../../API";

export default function Main({}) {
  const [articles, setArticles] = useState([]);
  const [dataList, setdataList] = useState([]);
  const [FullDataList, setFullDataList] = useState([]);
  const [pagination, setpagination] = useState({});

  useEffect(() => {
    const getNews = async () => {
      APICall.getnoticias("true").then((res) => {
        if (res.data && res.data.length > 0) {
          console.log(res.data);
          let arrayItems = res.data;
          setArticles(res.data);
          setdataList(arrayItems);
          setFullDataList(arrayItems);
          setpagination({
            ...pagination,
            totalQuantity: arrayItems.length,
            pages: Math.ceil(arrayItems.length / pagination.quantityPerPage),
          });
        }
      });
    };
    getNews();
  }, []);

  return (
    <div className="news-list">
      <h2>Bienvenido a la sección de noticias</h2>
      <div className="main-section">
        {articles.map((articles) => (
          <section className="card ">
            <NewsItem
              titulo={articles.titulo}
              descripcion={articles.descripcion}
              imagen={articles.imagen}
              fecha={articles.fecha}
              estado={articles.estado}
            />
          </section>
        ))}
        ,
      </div>
    </div>
  );
}
