import React from "react";
import {Link} from 'react-router-dom'

import Button from "./Button"

const Users = ({ article }) => {

    const preview = article.content.substring(0, 100)

    return (
        <div className=" flex flex-col bg-gray-50 border-2 rounded p-5 text-justify drop-shadow-2xl w-[350px]">
            <h2 className="text-gray-400 text-m text-center p-5 bold font-medium">{article.title}</h2>
            <p className="text-gray-300 text-sm text-center px-5 bold text-justify font-medium">CATEGORY : News</p>
            <p className="text-gray-400 text-sm text-center p-5 text-justify italic font-medium">{preview}...</p>
            <small className="text-gray-400 text-xs text-center px-5 py-1 italic text-justify font-medium"> Written by {article.author}</small>
            <small className="text-gray-400 text-xs text-center px-5 py-1 text-justify font-medium"> Date : {article.date}</small>          
            <Link className="flex justify-center" to={`/${article.slug}`}>
                <Button type="button" text='Read'/>
            </Link>
        </div>
    )
}

export default Users