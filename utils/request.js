const API_KEY=process.env.API_KEY;

export default {

    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorroeMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomancemovies:{
        title:'Romantic',
        url:`/discover/week?api_key=${API_KEY}&with_genres=10749`
    },
    fetchTopRated:{
        title:'TopRated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchDramaMovies:{
        title:'Drama',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=21`
    },

    fetchSifi:{
        title:'SiFi',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=38`
    },

    fetchkidsMovies:{
        title:'Kids',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=18`
    },


}