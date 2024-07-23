import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () =>{
    useNowPlayingMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {/*
              Main container 
                - videoBackground
                - video title
              secondary container
               - movie list 
               - movie cards
             */}
        </div>
    )
}

export default Browse;