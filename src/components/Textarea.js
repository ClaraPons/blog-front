import React from 'react'

const Textarea = ({ label, value, placeholder, handleChange,}) => {
  return (
    <section className="flex justify-center py-0.5 pt-2">
        <div className="py-4 bg-gray-50 px-5 rounded w-[860px]">
            <label className='block mb-2 text-m'>{label}</label>
            <textarea
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500'
                rows='15'
            />
        </div>
    </section>
  )
}

export default Textarea