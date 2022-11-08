import React, { useEffect, useState } from "react";
import NewsItem from "../news-item-gestion/Main";
import { APICall } from "../../API";

export default function Main({}) {
  const [articles, setArticles] = useState([]);
  const [dataList, setdataList] = useState([]);
  const [FullDataList, setFullDataList] = useState([]);
  const [pagination, setpagination] = useState({});
  
  
  useEffect(() => {
    const getNews = async () => {
      APICall.getnoticias().then((res) => {
        if (res.data && res.data.length > 0) {
          console.log(res.data);
          let arrayItems = res.data;
          setArticles(res.data)
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

  useEffect(() => {
    fetchDatanoticias();
  }, []);

  const fetchDatanoticias = async () => {
    APICall.getnoticias().then((res) => {
      if (res.data && res.data.length > 0) {
        console.log(res.data);
        let arrayItems = res.data;
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

  const updateNews = (id,articles) => {
    articles.estado = !articles.estado;
    APICall.editNoticias(id,articles).then((res) => {
      console.log(res);
      fetchDatanoticias();
    }
    ).catch(e=>{
      console.log(e)
    }
    )
  }
  

  return (
    <div className="news-list">
      <h2>Bienvenido a la sección de gestión de noticias</h2>
      <div className="main-section">
        {articles.map((articles) => (
          <section className="card ">
            <NewsItem
              titulo={articles.titulo}
              avatar={articles.avatar}
              fecha={articles.fecha}
              estado={articles.estado}
              descripcion={articles.descripcion}
              imagen={articles.imagen}
              updateNews={()=>updateNews(articles._id,articles)}
            />
          </section>
        ))}
        ,
      </div>
    </div>
  );
}
