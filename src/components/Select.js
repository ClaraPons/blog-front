import React from "react";

const Select = ({label, handleChange, options, value}) => {
    return (
       <>
        <section className="flex justify-center py-0.5">
            <div className="py-4 bg-gray-50 px-5 rounded">
                <label className="block mb-2.5 text-m"  htmlFor="city-select">{label}</label>

                <select onChange={handleChange} value={value} className="border border-slate-300 rounded w-[200px] p-1 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500" name="cities" id="city-select">
                <option value=''>Select an option</option>
                <option value={options.value}>{options.text}</option>
                        {/* {options.map((option) => {
                            return (
                                <option key={option.value} value={option.value}>{option.text}</option>
                            )
                        })} */}
                </select>
            </div>
        </section>
    </>
    )
}

export default Select