import "./style.css";

document.querySelector("#app").innerHTML = `
    <div class="header">
      <div class="navbar">
       <h2>SaintStream</h2>
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
          <span><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1"/></span>
          </div>
          <div class="notify">
            <span><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/appointment-reminders.png" alt="appointment-reminders"/></span>
          </div>
          <div class="profile">
            <img src="/images/profile pic1.jpg" alt="profile"/>
          </div>
          <span><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-down.png" alt="chevron-down"/></span>
        </div>
      </div>
    </div>
      <div class="main">
        <button id="btn1">Season3</button>
        <h2>The Mandolorian</h2>
        <small id="time">2h40m.2022.Fantasy.Actions</small>
        <p id="paragraph-one">The third season of the American television series <br>The Mandalorian stars
           Pedro Pascal as the title characher, a bounty hunter <br> traveling to
            Mandaloore to redeem his past transgressions with his adopted son <br> Grogu and being aided
             on their journey by the fellow Mandolorian Bo-Katan Kryze.
            </p>
         <br><br>
      <div class="button">  
        <button id="btn2"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/circled-play.png" alt="circled-play"/>Play Now</button>
        <button id="btn3"><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/circled-play.png" alt="circled-play"/>Watch Trailer</button>
        <button id="btn4"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bookmark-ribbon.png" alt="bookmark-ribbon"/>Add Watchlist</button>
      </div>  
      </div>
    </div>
     <br><br>
    <div class="logo">
      <img class="brand-logo" src="/images/disney icon.jpg" alt="logo1"/>
      <img class="brand-logo" src="/images/netflix.jpg" alt="logo2"/>
      <img class="brand-logo" src="/images/HBOmax.jpg" alt="logo3"/>
      <img class="brand-logo" src="/images/PIXAR.jpg" alt="logo4"/>
      <img class="brand-logo" src="/images/MARVEL.jpg" alt="logo5"/>
      <img class="brand-logo" src="/images/STARWARS.jpg" alt="logo6"/>
      <img class="brand-logo" src="/images/national geography.jpg" alt="logo7"/>
    </div>
    <section>
      <div class="sec1" id="movies">
        
      </div>
      </section>
      <section>
    <div class="pop swiper">
      <h3>Popular of the week</h3>
      <hr><hr>
      <div class="popular swiper-wrapper">
        <div class="week swiper-slide">
          <h1>1</h1>
          <img  src="/images/pic11.jpg" alt="pic11"/>
          <div class="sub-one">
          <button id="btn5">PG-13</button>
          <h4></h4>
          <p><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/movie--v1.png" alt="movie--v1"/>Horror.Thriller</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.5 | Movie</small>
          </div>
        </div>
        <div class="week2 swiper-slide">
          <h1>2</h1>
          <img  src="/images/pic22.jpg" alt="pic2"/>
          <div class="sub-two">
          <button id="btn6">PG-13</button>
          <h4>GOTG 3</h4>
          <p><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/movie--v1.png" alt="movie--v1"/>| Superhero.Action</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.9 | Movie</small>
          </div>
        </div>
        <div class="week3  swiper-slide ">
          <h1>3</h1>
          <imgsrc="/images/pic33.jpg" alt="pic33"/>
          <div class="sub-three">
          <button id="btn7">PG-13</button>
          <h4>The Flash</h4>
          <p><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/movie--v1.png" alt="movie--v1"/>| Comedy.Action</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>3.7 | Movie</small>
          </div>
        </div>
        <div class="week4 swiper-slide">
          <h1>4</h1>
          <img  src="/images/pic44.jpg" alt="pic44"/>
          <div class="sub-four">
          <button id="btn11">PG-13</button>
          <h4>The Main</h4>
          <p><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/movie--v1.png" alt="movie--v1"/>| Comedy.Action</p>
          <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.4 | Movie</small>
          </div>
        </div>
         <div class="week5 swiper-slide ">
          <h1>5</h1>
           <img  src="/images/pic55.jpg" alt="pic55"/>
          <div class="sub-five">
           <button id="btn11">PG-13</button>
           <h4>The Main</h4>
           <p><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/movie--v1.png" alt="movie--v1"/>| Comedy.Action</p>
           <small><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.4 | Movie</small>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>

       <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
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
          <h1>Our platform is trusted<br>by millions & features<br>best updated movies<br>all around the world.</h1>
          <br><br>
          <small>Privacy policy| Term of service| Language</small>
        </div>
        <div class="media">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Influence</a></li>
            <li><a href="#">Release</a></li>
          </ul> 
          <br><br>
          <div class="media-logo">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png" alt="instagram-new"/>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png" alt="facebook--v1"/>
            <img width="50" height="50" src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/FFFFFF/external-Tweet-chat-bubbles-basicons-solid-edtgraphics.png" alt="external-Tweet-chat-bubbles-basicons-solid-edtgraphics"/>
            <img width="50" height="50" src="https://img.icons8.com/glyph-neue/64/FFFFFF/google-logo.png" alt="google-logo"/>
          </div> 
          <small>2023</small>      
        </div>
      </div>
    </footer>
    
`;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
    
  const swiper = new Swiper('.pop', {
    slidePreView: 4,
    spaceBetween: 30,
    centeredSlides: true,
     autoplay: { 
       delay: 2500,
     disableOnInteraction: false,
     },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const movies = document.querySelector("#movies");

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
  .then((data) => {
    console.log(data);
    const results = data.results;
    if (Array.isArray(results)) {
      for (let index = 0; index < results.length; index++) {
        movies.innerHTML += `
          <div>
            <h1>${results[index].original_title}</h1>
            <img src="https://image.tmdb.org/t/p/w500${results[index].poster_path}" alt="${results[index].original_title}" />
          </div>
        `;
      }
    } else {
      console.error('Results is not an array:', results);
    }
  })
  .catch((err) => console.error(err));


