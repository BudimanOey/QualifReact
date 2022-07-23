import { useContext, useState } from "react";
import Header from "../components/Header";
import { AnimeContext } from "../lib/AnimeListProvider";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../lib/useLocalStorageHooks";


export default function Home() {
  const animeData = useContext(AnimeContext)
  const [ search, setSearch ] = useState("")
  
  const searchAnimeList = animeData.Page.media.filter((e) =>{
    if(search) return e.title.romaji.toLowerCase().includes(search.toLowerCase())
    else return animeData
  })

    return (
      <div className="flex flex-col">
        <Header/>

        <div className="w-full pl-14 pr-14 pt-8 bg-gray-100">
          <div className="relative mb-10">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" onChange={(e) => { setSearch(e.target.value) }} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
          </div>

          <div className="grid grid-cols-2 gap-10 pb-10">
            {searchAnimeList.map((e)=>{
              return (
                <Link key={e.id} to={`/desc/${e.id}`}>
                  <div className="flex flex-col mb-10 items-center text-center text-2xl drop-shadow-xl hover:scale-105 ease-in-out duration-300" >
                    <img src={e.coverImage.large} alt="img" className="h-96 w-64 mb-5 border-solid border-2 border-indigo-600 rounded-lg object-cover"/>
                    <h1 className="w-auto">{e.title.romaji}</h1>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    );
  }
  