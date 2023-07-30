import React from 'react';
import  { useEffect, useState } from 'react';
import Navbar from './Navbar';


const apiKey=process.env.REACT_APP_NASA_KEY;

function Nasaphoto() {
    const [photoData,setPhotoData]= useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res =await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }

    }, []);

    if(!photoData) return <div />
    return(
        <>
        <Navbar />
        

        <div className="nasa-photo">
            {photoData.media_type === "image"  ? 
            (
            <img 
            src={photoData.url}
            alt={photoData.title}
            className='photo'
            />
            ) : (
                <iframe>
                title="space-vedio"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                </iframe>
            )
            }
            <div className='nasa-info'>
                <h1>{photoData.title}</h1>
                <p className='date'>{photoData.date}</p>
                <p className='explanation'>{photoData.explanation}</p>

            </div>

        </div>
        </>

    );
}

export default Nasaphoto