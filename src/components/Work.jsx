import React from 'react'
import ecommerce from '../assets/project/ecommerce.png'
import game from '../assets/project/game.png'
import gallery from '../assets/project/galleryApp.png';
import weather from '../assets/project/weather.png'
import pokemon from '../assets/project/pokemon.png'
import movie from '../assets/project/movieApp.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-600'>Work</p> 
               <p className='py-6'>Check out some of my recent work</p>
            </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4'>

                
            <div style={{backgroundImage: `url(${gallery})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white traking-wider'>
                            Photo Gallery
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://gallerapp.netlify.app/" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/nikhil3113/gallery-app" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${ecommerce})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white traking-wider'>
                            Ecommerce Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://pralshar-bio-products.netlify.app/" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/nikhil3113/Bio-Feritizers-Ecommerce" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${game})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white traking-wider'>
                            ChoreDoor Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://choredoor-game.netlify.app/" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/nikhil3113/choreDoor" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${weather})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white traking-wider'>
                            Weathering
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://weathers-one.netlify.app/" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/nikhil3113/weather-app-react" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 <div style={{backgroundImage: `url(${pokemon})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white traking-wider'>
                            Pokedex
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://pokemon-adventure-check.netlify.app/" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/nikhil3113/pokemon-app" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${movie})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white traking-wider'>
                            Find My Movie
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://movie-tmdb-search.netlify.app/" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/nikhil3113/movieFinder" target='_blank'  rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                                 
            </div>
        </div>
    </div>
  )
}

export default Work