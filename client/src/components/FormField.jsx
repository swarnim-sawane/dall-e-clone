import React from 'react'
import '/src/style.css';


const FormField = ({labelName,type ,name ,placeholder ,value ,handleChange
  ,isSurpriseMe ,handleSurpriseMe}) => {
  return (
    <div>
      <div className='al flex items-center gap-2 mb-7'>
        <label htmlFor={name} className='block text-sm font medium 
        text-gray-900 '>{labelName}</label>

        {isSurpriseMe && (
          <button 
          type="button"
          onClick={handleSurpriseMe}
          class = "s-button mb-10">
            Surprise Mf
          </button>
        )}
      </div>
      <input 
      type = {type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      class = " input" />
      
    </div>
  )
}

export default FormField