/* function viewMovie(movieTitle, movieYear, isOlder) {
    return `
            <section>
                <h2>${movieTitle}</h2>
                <h3>${movieYear}</h3>
                <h4>${isOlder}</h4>
            </section>
        `;
} */


function viewMovie(movieTitle, movieYear) {

    let isNewer = "This film is older than 2000";

    if (movieYear >= 2000) {
        isNewer = "This film is newer than 2000"
    };

    return `
            <section>
                <h2>${movieTitle}</h2>
                <h3>${movieYear}</h3>
                <h4>${isNewer}</h4>
            </section>
        `;
}

function logMovieObject(movieObject) {
    console.log(movieObject);
    console.log(movieObject.title);
}



function _load() {

    const rootElement = document.getElementById('root');
    let a = 5;
    /* 
        console.log(movies[0].title);
        console.log(movies[1].title);
        console.log(movies[a].title);
        console.log(movies[movies.length - 1].title); */

    for (const movie of movies) {

        //console.log(movie.title);

        /*         if (movie.year >= 2000) {
                    console.log(movie.title);
                    rootElement.insertAdjacentHTML("beforeend", viewMovie(movie.title, movie.year, "This movie is newer than 2000"));
                } else {
                    rootElement.insertAdjacentHTML("beforeend", viewMovie(movie.title, movie.year, "This movie is older than 2000"));
                } */
        logMovieObject(movie);

        rootElement.insertAdjacentHTML("beforeend", viewMovie(movie.title, movie.year));
    };

    /*     for (let index = 0; index < movies.length; index++) {
    
            let movie = movies[index];
    
            console.log(index);
    
            console.log(movie.title);
            
        } */

}
window.addEventListener("load", _load);