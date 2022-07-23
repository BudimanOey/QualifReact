import { useQuery } from "@apollo/client/react";
import { createContext } from "react";
import { GET_ANIME } from "./getAnimeQuery.js";

export const AnimeContext = createContext();

export default function AnimeListProvider({children}){
    
    const {loading,error,data} = useQuery(GET_ANIME, {
        variables:{
            page:1,
            perPage: 30
        }
    })
    
    if(loading) return (
        <div>
            Loading data...
        </div>
    )
    else if(error) return (
        <div>
            Error Getting data!
        </div>
    )
    
    return (
        <AnimeContext.Provider value={data}>
            {children}
        </AnimeContext.Provider>
    )
}
