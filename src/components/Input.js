import React from "react";


const Input = ({label, type, value, placeholder, handleChange}) => {

    // console.log({error.msg})

    return (
        <section className="flex justify-center py-0.5">
            <div className="py-4 bg-gray-50 px-5 rounded w-[300px]">
                <label className="block mb-2 text-m ">{label}</label>
                <input className="border border-slate-300 rounded w-[250px] p-1 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500" type={type} value={value} placeholder={placeholder} onChange={handleChange} />
            </div>
        </section>
    )
}

export default Input