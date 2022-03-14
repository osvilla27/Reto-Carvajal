import { Component, OnInit } from '@angular/core';
import { Color } from './color.model';
import { ColorService } from './colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors?: Color[];
  currentColor: Color = {};
  currentIndex = -1;
  
  constructor(private colorService: ColorService) { }
  ngOnInit() {
    this.retrieveColors();
  }
  retrieveColors(): void {
    this.colorService.getAll()
    .subscribe({
        next: (data) => {
          this.colors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  setColor(id :number): void {
    for(var color in this.currentColor){
      console.log(typeof color, "hola")
    }
    return }

}
