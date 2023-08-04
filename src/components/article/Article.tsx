import dayjs from "dayjs";
import { iArticle } from "../../types/Article";
import './Article.scss'
import { useState } from "react";
import errorOnLoadPhoto from '../../assets/cannot-load-photo.png'
import { override } from "./spinnerStyle";
import Spinner from "../../elements/Spinner";
import { v1 as uuidv1 } from 'uuid';

const Article = ({ data, isArticleLoading }: iArticle) => {
    const { author, body, date, heading, mainImage } = data
    const [imageData, setImageData] = useState({ src: mainImage?.value?.leadImage.url, alt: mainImage?.value?.leadImageCaption?.value })

    const handleError = () => {
        setImageData({ src: errorOnLoadPhoto, alt: "Cannot load" })
    };

    if (isArticleLoading) return <Spinner isLoading={isArticleLoading} override={override} />

    return (
        <article className='article'>
            <h1 className='article__heading'>{heading?.value}</h1>
            {body.values?.length && body.values.map((value) => (
                <p key={uuidv1()} dangerouslySetInnerHTML={{ __html: value }} />
            ))}
            <img className='article__image' src={imageData.src} alt={imageData.alt} onError={handleError} />
            <time className='article__time' dateTime={date?.value}>{dayjs(date?.value).format('YYYY-MM-DD HH:MM')}</time>
            <p className='article__author'>{author.value}</p>
        </article>
    )
}

export default Article
