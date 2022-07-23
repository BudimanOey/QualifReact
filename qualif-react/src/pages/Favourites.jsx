import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useLocalStorage } from "../lib/useLocalStorageHooks";


export default function Favourites() {
  const [fav, setFav] = useLocalStorage("fav", [])
  
    return (
      <div>
        <Header/>
        <div className="w-full h-screen pl-14 pr-14 pt-8 bg-gray-100">
          <div className="grid grid-cols-2 gap-10 pb-10">
            {fav.map((e)=>{
              return (
                <Link key={e.id} to={`/desc/${e.id}`}>
                  <div className="flex flex-col mb-10 items-center text-center text-2xl drop-shadow-xl hover:scale-105 ease-in-out duration-300" >
                    <img src={e.coverImage.large} alt="img" className="h-96 w-64 mb-5 border-solid border-2 border-indigo-600 rounded-lg object-cover"/>
                    <h1 className="w-64">{e.title.romaji}</h1>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    );
  }
  