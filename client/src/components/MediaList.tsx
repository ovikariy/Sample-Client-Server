import React, { useEffect, useState } from 'react';
import { Media } from '../types/media';

export const MediaList = () => {
    const [titles, setTitles] = useState<Media[]>([]);
    useEffect(() => {
        getTitles().then((titlesResp) => {
            setTitles(titlesResp);
        })
    }, [])

    return (
        <>
        <h1 style={{marginLeft: 10}}>Top 7 movies on IMDB </h1>
            {titles?.map((item, index) => {
                return <div key={index}>
                    <img src={item.thumbnail} alt={item.title} style={{margin: 10, verticalAlign:'middle'}} />
                    {index + 1 + '. ' + item.title}
                </div>
            })}
        </>
    )
}

export const getTitles = async () => {
    const requestOptions = {
        method: 'GET'
    };

    const resp = await fetch('https://localhost:7170/titles', requestOptions);
    const titles = await resp.json();
    return titles;
}