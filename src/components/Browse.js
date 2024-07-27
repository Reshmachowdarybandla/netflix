import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRated from "../hooks/useTopRated";
const Browse = () =>{
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRated();
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