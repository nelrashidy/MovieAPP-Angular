import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private service: MovieApiServiceService) { }


  prefixImg: string = "https://image.tmdb.org/t/p/original"
  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchForm');
    this.service.getSearchMovie(this.searchForm.value).subscribe((data) => {
      console.log(data, "searchvalue");
      this.searchResult = data.results;
    });
  }

}
