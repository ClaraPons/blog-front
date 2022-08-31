const getArticles = async () => {
    const request = await fetch (`http://localhost:5007/articles/`)
    const response = await request.json()

    return response
}

    const postArticle = async (body) => {
        const request = await fetch(`http://localhost:5007/articles/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const response = await request.json()

        return {
            status: request.status,
            result: response
          }
    }

    const getArticle = async (slug) => {
        const request = await fetch (`http://localhost:5007/articles/${slug}`)
        const response = await request.json()

        return response
    }

export { postArticle, getArticles, getArticle}