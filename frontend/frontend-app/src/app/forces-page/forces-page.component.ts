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
    'assets/enfant.png',
    'assets/femmegt.png',
    'assets/hommegt.png',
    'assets/femmegt.png',
    'assets/hommegt.png',
    'assets/vieux.png',
    'assets/robot.png',
    
  ];
  values: number[] = [0,0,0,0,0,0,0]; 

  descs: string[] = [
    "Enfant d'environ 10 ans",
    'Femme de petite corpulence',
    'Homme de petite corpulence',
    'Femme de grande corpulence',
    'Homme de grande corpulence',
    'Personne âgée',
    'Robot à taille humaine'
  ]
}
