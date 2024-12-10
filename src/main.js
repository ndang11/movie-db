import "./style.css";


document.querySelector("#app").innerHTML = `
   <div class="header">
      <div class="navbar">
      <div class="icon">
      <h2>SaintStream</h2>
        </div>
        <div class="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Movie Release</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div class="search">
          <div class="left">
          <span></span>
          </div>
          <div class="notify">
            <span></span>
          </div>
          <div class="profile">
            <img src="/images/profile pic1.jpg" alt="profile"/>
          </div>
          <span><img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/50/expand-arrow.png" alt="expand-arrow"/></span>
        </div>
      </div>
      <div class="main">
        <button id="btn1">Season3</button>
        <h3></h3>
        <small id="time">2h40m.2022.Fantasy.Actions</small>
        <p id="paragraph-one">The third season of the American television series <br>The Mandalorian stars
           Pedro Pascal as the title characher, a bounty hunter traveling to
            Mandaloore to redeem his past transgressions with his adopted son Grogu and being aided
             on their journey by the fellow Mandolorian Bo-Katan Kryze.
            </p>
        <button id="btn2"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/circled-play.png" alt="circled-play"/>Play Now</button>
        <button id="btn3"><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/circled-play.png" alt="circled-play"/>Watch Trailer</button>
        <button id="btn4"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"style="fill:#FFFFFF;"><path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47  L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path></svg>Add Watchlist</button>
      </div>
    </div>
    <div class="logo">
      <img src="/images/disney icon.jpg" alt="logo1">
      <img src="/images/netflix.jpg" alt="logo2">
      <img src="/images/HBOmax.jpg" alt="logo3">
      <img src="/images/PIXAR.jpg" alt="logo4">
      <img src="/images/MARVEL.jpg" alt="logo5">
      <img src="/images/STARWARS.jpg" alt="logo6">
      <img src="/images/national geography.jpg" alt="logo7">
    </div>
    <section>
      <div class="sec1" id="movies">
        
      </div>
      <div class="popular">
      <h3></h3>
        <div class="week">
          <h1>1</h1>
          <img src="" alt="pic1"/>
          <button id="btn5">PG-13</button>
          <h4></h4>
          <p><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/movie--v1.png" alt="movie--v1"/>Horror.Thriller</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.5 | Movie</small>
        </div>
        <div class="week2">
          <h1>2</h1>
          <img src="" alt="pic2"/>
          <button id="btn6">PG-13</button>
          <h4>GOTG 3</h4>
          <p><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/movie--v1.png" alt="movie--v1"/>| Superhero.Action</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.9 | Movie</small>
        </div>
        <div class="week3">
          <h1>3</h1>
          <img src="" alt="pic3"/>
          <button id="btn7">PG-13</button>
          <h4>The Flash</h4>
          <p><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/movie--v1.png" alt="movie--v1"/>| Comedy.Action</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>3.7 | Movie</small>
        </div>
         <div class="week4">
          <h1>4</h1>
          <img src="" alt="pic2"/>
          <button id="btn11">PG-13</button>
          <h4>The Main</h4>
          <p><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/movie--v1.png" alt="movie--v1"/>| Comedy.Action</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.4 | Movie</small>
        </div>
      </div>
    </section>
    <section>
      <div class="release">
        <h3>Just Release</h3>
        <div class="release1">
          <img src="" id="photo1" alt="photo"/>
          <h3 id="dungeon"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Mystery.Movie</small>
        </div>
        <div class="release2">
          <img src="" id="photo2" alt="photo"/>
          <h3 id="Barie"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Season 1.Action.Drama</small>
        </div>
        <div class="release3">
          <img src="" id="photo3" alt="photo"/>
          <h3 id="super"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="release4">
          <img src="" id="photo4" alt="photo"/>
          <h3 id="slave"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Horror.Movie</small>
        </div>
        <div class="release5">
          <img src="" id="photo5" alt="photo"/>
          <h3 id="enola"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.8 | Action.Movie</small>
        </div>
      </div>
    </section>
    <section>
      <div class="watchlist">
        <h2>Your Watchlist</h2>
        <div class="watch1">
          <img src="" id="pic1" alt="pic"/>
          <h3 id="top"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="watch2">
          <img src="" id="pic2" alt="pic"/>
          <h3 id="spiderman"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="watch3">
        <img src="" id="pic3" alt="pic"/>
        <h3 id="black"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="watch4">
          <img src="" id="pic4" alt="pic"/>
          <h3 id="batman"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="watch5">
          <img src="" id="pic5" alt="pic"/>
          <h3 id="red"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
    </section>
    <section>
      <div class="like">
        <h2>Your Likes</h2>
        <div class="like1">
          <img src="" id="post1" alt="pos"/>
          <h3 id="thor"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="like2">
          <img src="" id="post2" alt="pos"/>
          <h3 id="green"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="like3">
          <img src="" id="post3" alt="pos"/>
          <h3 id="mechanic"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="like4">
          <img src="" id="post4" alt="pos"/>
          <h3 id="pirates"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
        <div class="like5">
          <img src="" id="post5" alt="pos"/>
          <h3 id="spider3"></h3>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | Action.Movie</small>
        </div>
      </div>
    </section>
    <section>
      <div class="galaxy">
        <h3>Explore by genre</h3>
        <h1>Guardian of The Galaxy; Volume 3</h1>
        <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | 2h40m.2022.Superhero.Actoin</small>
        <button id="btn8"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/play-button-circled--v1.png" alt="play-button-circled--v1"/>Play Now</button>
        <button id="btn9"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
          <path d="M 5.5 2 A 0.50005 0.50005 0 0 0 5 2.5 L 5 21.5 A 0.50005 0.50005 0 0 0 5.7089844 21.953125 L 12 19.050781 L 18.291016 21.953125 A 0.50005 0.50005 0 0 0 19 21.5 L 19 2.5 A 0.50005 0.50005 0 0 0 18.5 2 L 5.5 2 z M 6 3 L 18 3 L 18 20.71875 L 12.208984 18.046875 A 0.50005 0.50005 0 0 0 11.791016 18.046875 L 6 20.71875 L 6 3 z"></path>
          </svg>Add Watchlist</button>
      </div>
      <div class="arrow">
        <span><img width="26" height="26" src="https://img.icons8.com/metro/26/FAB005/back.png" alt="back"/></span>
        <span><img width="26" height="26" src="https://img.icons8.com/metro/26/FAB005/forward.png" alt="forward"/></span>
        <span><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FAB005/ellipsis.png" alt="ellipsis"/></span>
      </div>
    </section>
    <article>
      <div class="movie-img">
        <img src="" alt="picc"/>
        <h3>Superhero</h3>
        <img src="" alt="picc"/>
        <h3>Drama</h3>
        <img src="" alt="picc"/>
        <h3>Sitcom</h3>
        <img src="" alt="picc"/>
        <h3>Thriller</h3>
        <img src="" alt="picc"/>
        <h3>Comedy</h3>
        <img src="" alt="picc"/>
        <h3>Fantasy</h3>
      </div>
    </article>
    <footer>
      <div class="clossing">
        <div class="plateform">
          <h1>Our platform is trusted by millions & features best updated movies all around the world.</h1>
          <small>Privacy policy  Term of service  Language</small>
        </div>
        <div class="media">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Influence</a></li>
            <li><a href="#">Release</a></li>
          </ul> 
          <div class="media-logo">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FAB005/instagram-new--v1.png" alt="instagram-new--v1"/>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,300,150" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"></path></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32"style="fill:#1A1A1A;"><path d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875"></path></svg>
          </div>       
        </div>
      </div>
    </footer>
`;

const movies = document.getElementById("movies");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzcyNWUyYmM2ZmRmMGZjOTAzNjRlZmMxNjEzNzJlMiIsIm5iZiI6MTczMzczMjEwMi42NCwic3ViIjoiNjc1NmE3MDZlZTMzYjEwOTdhYzA4ZjYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9LrzzemMb0GRlu-C1MG1efQ-HnBC4BVTqgZww7kyWQk",
  },
};

fetch(
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  options
)
  .then((res) => res.json())
  .then(({ results }) => {
    for (let index = 0; index < results.length; index++) {
      movies.innerHTML += `
        <div>
          <h1>${results[index].original_title}</h1>
          <img src="https://image.tmdb.org/t/p/w500${results[index].poster_path}" alt="${results[index].original_title}" />
        </div>
      `;
    }
  })
  .catch((err) => console.error(err));

