import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients:ingredients[]=[
  new ingredients("Onian",45),
  new ingredients("Chile",45),
];

  constructor() { }

  ngOnInit(): void {
  }

}
