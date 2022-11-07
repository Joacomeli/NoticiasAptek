
import React, { useEffect, useState } from "react";
import NewsItem from "../news-item/Main";
import axios from "axios";

export default function Main({ }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get("https://newsapi.org/v2/everything?q=football&apiKey=3987b346c5db472f80332fdc2d788b2b");
            console.log(response);
            setArticles(response.data.articles);
        }
        getNews();
    }, []);

    return (
        <div className="news-list">
            <h1>Nuevas Noticias</h1>
            <div className="main-section">
                <h1 className="header">{articles[0].title}</h1>
                <img src={articles[0].urlToImage} alt="imagen" className="imagen" />
                <p className="fecha">{articles.fecha}</p>
                <p className="description">{articles[0].description}</p>

            </div>
        </div>

    );
}