
    const createSelectOptions = async () => {
        const request = await fetch(`http://localhost:5007/categories/`)
        const response = await request.json()

        return response;
    }


    const postCategory = async () => {
        const request = await fetch(`http://localhost:5007/categories/`)
    }

export {createSelectOptions}