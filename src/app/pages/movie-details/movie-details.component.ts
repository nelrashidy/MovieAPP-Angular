import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }

  movieDetailsResult: any;
  movieVidResult: any;
  movieCastResult: any;


  prefixImg: string = "https://image.tmdb.org/t/p/original"


  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    console.log(getParamId, "getParamId")
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);

  }



  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((data) => {
      console.log(data, "moviedetails")
      this.movieDetailsResult = data;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVid(id).subscribe((data) => {
      data.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.movieVidResult = element.key;
        }
      });
    });
  }

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((data) => {
      this.movieCastResult = data.cast.slice(0, 4);
      console.log(data, "cast")

    });
  }
}
