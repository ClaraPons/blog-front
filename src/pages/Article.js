import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import H1 from '../components/H1'
import UserArticle from "../components/UserArticle"


import {getArticle} from '../api/articles'

const Article = () => {

    const params = useParams()
    const [article, setArticle] = useState([])
    // console.log(params);

    useEffect(() => {
        fetchdata()
    },[])

    const fetchdata = async slug => {
        const data = await getArticle(params.slug)
        console.log(data);
        setArticle(data)
    }

    return (
        <>
            <H1>{article.title}</H1>
                <UserArticle article={article}/>
        </>
    )
}

export default Article