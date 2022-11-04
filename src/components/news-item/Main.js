import React, { useEffect, useState } from "react";
import "../news-list/Main";

export default function Main({title, description, url, urlToImage}) {
    


    return (
        <div className="news">
            
            <div className="items">
                <img src={urlToImage} alt="imagen" className="imagen" />
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url}>Ver más</a>
            </div>
        </div>        

    );
}