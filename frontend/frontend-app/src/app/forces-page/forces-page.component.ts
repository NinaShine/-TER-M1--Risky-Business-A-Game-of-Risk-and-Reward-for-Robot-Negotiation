import { Component } from '@angular/core';
import { SliderComponent } from '../component/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forces-page',
  imports: [SliderComponent, CommonModule],
  templateUrl: './forces-page.component.html',
  styleUrl: './forces-page.component.css'
})
export class ForcesPageComponent {
  images: string[] = [
    'assets/stick.png',
    'assets/stick.png',
    'assets/stick.png',
    'assets/stick.png',
    'assets/stick.png',
    'assets/stick.png'
    
  ];
  values: number[] = [0,0,0,0,0,0]; 
}
