import React from "react";


const Input = ({label, type, value, placeholder, handleChange, errors, required}) => {

    // console.log({error.msg})
    const hasErrors = errors.length > 0

    return (
        <section className="flex justify-center py-0.5">
            <div className="py-4 bg-gray-50 px-5 rounded w-[300px]">
                <label className="block mb-2 text-m ">{label}</label>
                <input className={`border border-slate-300 rounded w-[250px] p-1 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500 required:ring-red-20 ${hasErrors ? ("border-red-300 text-red-500") : ("")}`} type={type} value={value} placeholder={placeholder} onChange={handleChange} required={required}/>
                {hasErrors && <p className="flex m-t-10 text-red-500 text-sm">{errors.map(err=>err.msg)}</p>}
            </div>
        </section>
    )
}

export default Input