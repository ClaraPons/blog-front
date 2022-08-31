import { useState, useEffect } from "react";

import Button from "../components/Button";
import H1 from '../components/H1'
import Input from '../components/Input'

const NewCategory = () => {

    const [name, setName] = useState()

    const handleChangeName = (e) => {
        console.log(e.target.value);
    }



    return (
        <>
            <H1>New Category</H1>
        </>
    )
}

export default NewCategory