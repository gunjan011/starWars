import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FilmsService } from './films.service';
import { PeopleService } from './people.service';
import { ShipsService } from './ships.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Star Wars API';
  myForm: FormGroup;
  starwars: Object;

  constructor(
    private formBuilder: FormBuilder,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private shipsService: ShipsService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      menu: new FormControl(),
      getData: new FormControl(),
    })
  }
  submit() {
    if (this.myForm.value.menu === 'films') {
      this.filmsService.getFilms(this.myForm.value.getData)
        .subscribe(data => {
          this.starwars = data
        })
    } else if (this.myForm.value.menu === 'people') {
      this.peopleService.getPeople(this.myForm.value.getData)
        .subscribe(data => {
          this.starwars = data
        })
    } else if (this.myForm.value.menu === "ships") {
      this.shipsService.getShips(this.myForm.value.getData)
        .subscribe(data => {
          this.starwars = data
        })
    } else {
      console.log('Error')
    }

  }
}
