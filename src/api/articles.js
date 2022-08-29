const getArticles = async () => {
    const request = await fetch (`http://localhost:5007/article/`)
    const response = await request.json()

    return response
}

    const postArticle = async (body) => {
        const request = await fetch(`http://localhost:5007/article/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const response = await request.json()

        console.log(response);
    }

export { postArticle, getArticles}