import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/style.css';

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  const generateImg = async () => {
      if(form.prompt){
        try {
          setgeneratingImg(true);
          const response = await fetch('https://dall-e-clone-ysmi.onrender.com/api/v1/dalle',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: form.prompt }),
          })

          const data = await response.json();
          setform({ ...form, photo: `data:image/jpeg;base64,${data.photo}`})

        } catch (error) {
          alert(error);
        } finally{
          setgeneratingImg(false);
        }
      } else {
        alert('Please enter a prompt...');
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if(form.prompt && form.photo) {
      setloading(true);

      try {
        const response = await fetch('https://dall-e-clone-ysmi.onrender.com/api/v1/post',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        })

        await response.json();
        navigate('/');
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image');
    }
  }

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }
  
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setform({ ...form, prompt: randomPrompt })

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
          <h1 className='style-text font-extrabold 
          text-[32px]'>Create</h1>
          <p className='style-text mt-2  text-[16px]
          max-w[500px]'>Create imaginative and visually stunning images 
          through DALL-E AI and share them with the community</p>
      </div>

      <form className='mt-16 max-w-3xl bold' onSubmit={handleSubmit}>
        <span className='al text-white'>Your Name</span>
        
        <div className='al flex flex-col gap-5'>
          <FormField 
            type = "text"
            name = "name"
            placeholder = "Enter your name"
            value = {form.name}
            handleChange={handleChange}
          />
          <span></span>
          <span></span>
          <span className='al text-white'>Enter your prompt or press this button</span>
          <span></span>
          <FormField 
            type = "text"
            name = "prompt"
            placeholder = "A plush toy robot sitting against a yellow wall"
            value = {form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <br></br>
        <br></br>
        <br></br>
        
          <div className='relative bg-black border border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:
          border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ?(
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain' />
                ): (
                  <img 
                  src={preview}
                  alt="preview"
                  className='invert w-9/12 h-9/12 object-contain opacity-40' />
                )}

                {generatingImg && (
                    <div className='rotate-90 absolute inset-0 z-0 flex justify-center
                     items-center bg-[rgba(0,0,0,0.5)] rounded-lg' >
                      <Loader />
                     </div>
                )}
          </div>
        </div>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <br></br>
        <br></br>
        <div className='mt-5 flex gap-5'>
          <button
          type="button"
          onClick={generateImg}
          class = "g-button"
          >
            {generateImg ? 'Generate' : 'Generating...'}
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        
        <div className='mt-10'>
                <p class=' style-text mt-2  text-[14px] '>Once you have created the image you want, you
                  can share it with the others in the community.
                </p>
                <br></br>
                <button
                type="submit"
                class="share-button">
                  Share with the community
                </button>
        </div>
      </form>
    </section>
  )
}


export default CreatePost



