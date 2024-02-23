class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      let pg = [];
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating === "PG") {
          pg.push(movies[i]);
        }
      }
      return pg;
    }
  }
  let ipArray = [];
  ipArray.push(new Movie("AVANGES", "MARVEL Productions", "PG"));
  ipArray.push(new Movie("Joker", "DC PRODUCTION", "PG"));
  ipArray.push(new Movie("Toy Story 4", " Pixar Animation Studios", "G"));
  ipArray.push(new Movie("batman", " dc production", "r"));
  ipArray.push(new Movie("ironman", " marvel production", "PG"));
  
  console.log(Movie.getPG(ipArray));
