import { useState, useEffect } from "react";
import Button from "../components/Button";
import H1 from '../components/H1'
import Input from '../components/Input'
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import { useNavigate } from "react-router-dom";

import { postArticle, createSelectOptions } from '../api/articles'


const NewArticle = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const [options, setOptions] = useState('')

    useEffect(() => {
        fetchdateBis()
    }, [])

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleChangeCat = (e) => {
        setCategory(e.target.value)
    }

    const fetchdateBis = async () => {
        const data = await createSelectOptions()
        console.log(data);

        let optionsMap = data.map((r) => {
            return {
                value: r.name, 
                text: r.name
            }
        })

        setOptions(optionsMap);

    }

    // console.log(options)


    const fetchdata = async (e) => {
        e.preventDefault()

        const body = {
            title, 
            author, 
            content,  
        }

        const data = await postArticle(body)
        // console.log(data);
        // navigate('/')
    }

    return (
        <>
            <H1>Create a new article</H1> 
            <form onSubmit={fetchdata}>
                <section className="flex flex-wrap gap-2.5 justify-center ">
                    <Input label="Title" type="text" placeholder="Enter Title" handleChange={handleChangeTitle} value={title}/>
                    <Input label="Author" type="text" placeholder="Enter Author" handleChange={handleChangeAuthor} value={author}/>
                    <Select label="Categories" handleChange={handleChangeCat} options={options} value={category}/>
                </section>
                    <Textarea label="Article" placeholder="Your content..." handleChange={handleChangeContent} value={content}/>
                <Button type="submit" text="Send" />
            </form>
        </>
    )
}

export default NewArticle