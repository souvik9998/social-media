import React from 'react'
import post1 from '../assets/post1.avif'
import profilePicture from '../assets/post1Profile.jpg';
import person1 from '../assets/person1.avif'
import person2 from '../assets/person2.avif'
const Post = () => {
  return (
    <>
        <div className='font-inter bg-[#EAEAEA] w-full h-fit flex flex-col gap-5 rounded-[35px] shadow p-6'>
          <div className='w-full flex gap-2'>
            <div className='w-[10%] '><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
            <div className='w-[90%] h-12 flex flex-col justify-around'>
              <div className='font-bold'>Hrit Saha</div>
              <div className='font-medium text-sm'>Dinhata,15 MINS AGO</div>
            </div>
          </div>
          <div>
            <img className='object-cover rounded-[25px]' src={post1}></img>
          </div>
          <div>
            <div className='flex gap-3 items-center'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
              </div>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='flex relative w-[12%]'>
              <div><img className='w-7 h-7 border border-white rounded-full object-cover left-0' src={person1}></img></div>
              <div><img className='w-7 h-7 border border-white absolute left-5 rounded-full object-cover' src={person2}></img></div>
              <div><img className='w-7 h-7 border border-white absolute left-10 rounded-full object-cover' src={profilePicture}></img></div>
            </div>
            <div className='font-semibold text-[#5C5A5A] text-sm'>Souvik and 5 others liked</div>
          </div>
        </div>  
    </>
  )
}

export default Post
