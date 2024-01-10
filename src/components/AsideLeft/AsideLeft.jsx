import React, { useEffect } from 'react';
import "../../styles/AsideRIght.css"

const AsideLeft = () => {

    const url = 'https://noticias-economia-espanol.p.rapidapi.com/api/v1/news/americaeconomia';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7ca99c9209mshc75808f70be92e1p133aa3jsn0c317be38284',
            'X-RapidAPI-Host': 'noticias-economia-espanol.p.rapidapi.com'
        }
    };

    async function callApi() {

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        callApi()

    }, [])


    return (
        <div className="container-AsideRL">
            <article className="articles">
                <h4 className="article-title">
                    Noticias Diarias Finanzas
                </h4>
                <p className="article-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, blanditiis! Temporibus iure, voluptate necessitatibus facere illum deleniti alias quibusdam voluptatibus exercitationem assumenda id ducimus corporis. Nobis ipsa debitis quisquam animi.
                </p>
            </article>

        </div>
    )
}

export default AsideLeft;