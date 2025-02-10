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
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg',
    'assets/image6.jpg'
  ];
  values: number[] = [0,0,0,0,0,0]; 
}
