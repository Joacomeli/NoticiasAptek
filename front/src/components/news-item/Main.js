import React, { useEffect, useState } from "react";
import "../news-list/Main";

export default function Main({titulo, descripcion, imagen, fecha}) {
    


    return (
        <div className="news">
            
            <div className="items">
                <img src={imagen} alt="imagen" className="imagen" />
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <p>{fecha}</p>
            </div>
        </div>        

    );
}