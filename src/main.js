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
            <li><a href="./detail.html">About</a></li>
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
      <div class="main1">
        <button id="btn1">Season3</button>
        <h2>The Mandolorian</h2>
        <small id="time">2h40m.2022.Fantasy.Actions</small>
        <p id="paragraph-one">The third season of the American television series <br>The Mandalorian stars
           Pedro Pascal as the title characher, a bounty hunter <br> traveling to
            Mandaloore to redeem his past transgressions with his adopted son <br> Grogu and being aided
             on their journey by the fellow Mandolorian Bo-Katan Kryze.
            </p>
         <br><br>
      <div class="button1">  
        <button id="btn2"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/circled-play.png" alt="circled-play"/>Play Now</button>
        <button id="btn3"><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/circled-play.png" alt="circled-play"/>Watch Trailer</button>
        <button id="btn4"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bookmark-ribbon.png" alt="bookmark-ribbon"/>Add Watchlist</button>
      </div>  
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
      <>
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
          <img src="/images/pic33.jpg" alt="pic33"/>
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
      <div class="galary-sub">
        <div class="galaxy">
          <h3>Explore by genre</h3>
          <h1>Guardian of The Galaxy;<br>Volume 3</h1>
          <p><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>4.6 | 2h40m.2022.Superhero.Actoin</p>
          <br>
          <button id="btn8"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/play-button-circled--v1.png" alt="play-button-circled--v1"/>Play Now</button>
          <button id="btn9"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/000000/bookmark-ribbon.png" alt="bookmark-ribbon"/>Add Watchlist</button>
          <br>
           <img width="40" height="40" src="https://img.icons8.com/sf-black/64/FFFFFF/back.png" alt="back"/>
           <img width="40" height="40" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/forward.png" alt="forward"/>
         <div class="container">
          <div class="container1">
            <h3>jhhh</h3>
          </div>
          <div class="container2">
            <h3>hhhh</h3>
          </div>
          <div class="container3">
            <h3>hhh</h3>
          </div>
          <div class="container4">
            <h3>jjj</h3>
          </div>
          <div class="container5">
            <h3>hhh</h3>
          </div>
        </div>
        </div>
      </div>
    </section>
    <br><br>
    <footer>
      <div class="clossing">
        <div class="plateform">
          <h1>Our platform is trusted<br>by millions & features<br>best updated movies<br>all around the world.</h1>
          <br><br>
          <small>Privacy policy | Term of service | Language</small>
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
          <small><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/copy-ai.png" alt="copy-ai"/>2023</small>      
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
  



  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options
  )
    .then((res) => res.json())
    .then(({ results }) => {
      console.log(results);
      const topRatedMovies = document.getElementById("top-rated");
  
      for (let index = 0; index < results.length; index++) {
        topRatedMovies.innerHTML += `
        <div class="img-container">
              <h2>${results[index].original_title} </h2>
        <img src="https://image.tmdb.org/t/p/w500${results[index].poster_path}" alt="${results[index].original_title}" />
        <p><span id="star">&#11088;</span>${results[index].vote_count}   <span id="thumbs">&#128077</span></p>
        </div>
  
        `;
        // const img =document.createElement("img");
        // img.className = "image-poster";
  
        // topRatedMovies.appendChild(img);
      }
    })
    .catch((err) => console.error(err));
  