import React from 'react'

import { download } from '../assets';
import { downloadImage } from '../utils';


const Card = ({_id,name, prompt, photo }) => {
  return (
    <div className='bg-[#252526] align-right rounded-xl group relative shadow-card 
    hover:shodow-cardhover card'>
      <img 
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='card-button'>
        <p className='text-white text-sm overflow-y-auto prompt'>
          {prompt}
        </p>

        <div className='mt-5 flex justify-between items-center
         gap-2'>
          <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full object-cover
               bg-orange-700 flex justify-center items-center 
               text-white text-xs font-bold'>
                {name[0]}
              </div>
              <p className='text-white text-sm'>{name}</p>
          </div>

          <button type="button" onClick={() => downloadImage(_id, photo)} className='outline-none bg-transparent'>
            <img src={download} alt="download" className='w-6
             h-6 object-contain invert' />
          </button>

         </div>
      </div>
    </div>
  )
}

export default Card