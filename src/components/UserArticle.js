import React from "react";

const Users = ({ article }) => {


    return (
        <section className="flex justify-center">
        <div className=" flex flex-col bg-gray-50 border-2 rounded p-5 text-justify drop-shadow-2xl w-[1200px]">
            <p className="text-gray-400 text-sm text-center p-5 text-justify italic font-medium">{article.content}</p>
            <p className="text-gray-300 text-sm text-center px-5 bold text-justify font-medium">CATEGORY : {article.category}</p>
            <small className="text-gray-400 text-xs text-center px-5 py-1 italic text-justify font-medium"> Written by {article.author}</small>
            <small className="text-gray-400 text-xs text-center px-5 py-1 text-justify font-medium"> Date : {article.date}</small>          
        </div>
        </section>
    )
}

export default Users