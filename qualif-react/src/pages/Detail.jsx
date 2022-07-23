import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { AnimeContext } from '../lib/AnimeListProvider';
import { useLocalStorage } from '../lib/useLocalStorageHooks';

export default function Detail() {
  const animeData = useContext(AnimeContext);

  const {id} = useParams();

  const currAnime = animeData.Page.media.find(e => e.id.toString() === id)
  const [ clicked, setClicked ] = useState(false)
  const [ fav, setFav ] = useLocalStorage("fav", []) 

  function setFavButton(){
    if(fav.filter(e => e.id == id).length > 0){
      const newArr = fav.filter(e => {
        return e.id != id;
      })   
      setFav(newArr)
    }else{
      setClicked(true)
      fav.push(currAnime)
      setFav(fav)
    }
  }

  useEffect(() => {
    if(fav.filter(e => e.id == id).length > 0){
      setClicked(true)
    }else{
      setClicked(false)
    }
  }, [fav])
  

  return (
    <div>
        <Header/>
        <div className='h-screen bg-gray-200 '>
            <div className='flex flex-col items-center content-center'>
              <h1 className='font-bold text-4xl w-96 text-center m-10'>{currAnime.title.romaji}</h1>
              <img src={currAnime.coverImage.large} />
              <p className='text-xl text-justify p-10 drop-shadow-lg'>{currAnime.description}</p>
            </div>
            <div className='text-2xl drop-shadow-lg text-justify pl-10 mb-10 text-color space-y-4'>
            <p>Episodes : {currAnime.episodes}</p>
            <p>Duration : {currAnime.duration} m</p>
            <p>Score : {currAnime.averageScore / 10}</p>
            </div>
            <div className='w-full flex justify-between text-center text-3xl pb-5 pl-10 pr-10'>
              <h2>Season Year: {currAnime.seasonYear}</h2>
              <button onClick={setFavButton}>
                <p className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${clicked ? "text-red-400" : "text-black-400"}`}>Favourite</p>
              </button>
            </div>
        </div>
    </div>
  )
}
