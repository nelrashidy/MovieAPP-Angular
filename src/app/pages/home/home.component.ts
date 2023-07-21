import { Component , OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService , private router: ActivatedRoute) { }
  prefixImg: string = "https://image.tmdb.org/t/p/original"
  bannerResult: any = [];
  trendingResult: any = [];
  actionResult: any = [];
  comedyResult: any = [];
  animeResult: any = [];
  adventureResult: any = [];
  scifiResult: any = [];
  documentriesResult: any = [];
  thrillerResult: any = [];





  ngOnInit(): void {
    this.bannerData();
    this.trendingMoviesData();
    this.actionMovieData();
    this.animeMovieData();
    this.comedyMovieData();
    this.adventureMovieData();
    this.scifiMovieData();
    this.documentriesData();
    this.thrillerMovieData();



  }


  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((data) => {
      this.bannerResult = data.results;
      // console.log(data, 'bannerresult#');
      // console.log(this.bannerResult);
    });
  }

  trendingMoviesData() {
    this.service.trendingMovies().subscribe((data) => {
      this.trendingResult = data.results.slice(0,10);
      // console.log(this.trendingResult, 'trend');
    })
  }

  actionMovieData() {
    this.service.getActionMovies().subscribe((data) => {
      this.actionResult = data.results.slice(0,11);
      console.log(data, "action")
    });
  }
  animeMovieData() {
    this.service.getAnimeMovies().subscribe((data) => {
      this.animeResult = data.results.slice(0,11);
      console.log(data, "anime")
    });
  }

  comedyMovieData() {
    this.service.getComedyMovies().subscribe((data) => {
      this.comedyResult = data.results.slice(0,11);

      console.log(data, "comedy")
    });
  }

  thrillerMovieData() {
    this.service.getThrillerMovies().subscribe((data) => {
      this.thrillerResult = data.results.slice(0,11);
      console.log(data, "thriller")

    });
  }

  adventureMovieData() {
    this.service.getAdventureMovies().subscribe((data) => {
      this.adventureResult = data.results.slice(0,11);
      console.log(data, "adventure")

    });
  }
  scifiMovieData() {
    this.service.getSciFiMovies().subscribe((data) => {
      this.scifiResult = data.results.slice(0,11);
      console.log(data, "scifi")
    });
  }

  documentriesData() {
    this.service.getDocumentries().subscribe((data) => {
      this.documentriesResult = data.results.slice(0,11);
      console.log(data, "documentries")
    });
  }



}
