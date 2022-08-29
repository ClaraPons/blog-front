import { useState, useEffect } from "react"
import Grid from "../components/Grid"
import ArticleCard from '../components/ArticleCard'

import { getArticles } from '../api/articles'

const Home = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchdata()
    },[])

    const fetchdata = async () => {
        const data = await getArticles()
        setArticles(data)
    }

    // console.log(articles);

    return(
        <>
            <Grid>
                {articles.map((article) =>{
                    return <ArticleCard article={article} />
                })}
            </Grid>
        </>
    )
}

export default Home