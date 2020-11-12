import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass'],
  
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected:boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit();
  }

}
