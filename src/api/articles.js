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

        console.log(response);
    }

    const createSelectOptions = async () => {
        const request = await fetch(`http://localhost:5007/categories/`)
        const response = await request.json()

        return response;
    }

export { postArticle, getArticles, createSelectOptions}