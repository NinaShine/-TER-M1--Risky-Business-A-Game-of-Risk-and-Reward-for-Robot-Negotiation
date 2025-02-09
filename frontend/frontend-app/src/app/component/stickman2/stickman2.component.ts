import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stickman2',
  templateUrl: './stickman2.component.html',
  styleUrls: ['./stickman2.component.css']
})
export class Stickman2Component implements OnInit {
  @Input() scenario: any;
  url2: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    switch (this.scenario.individuB) {
      case 'homme grande taille':
        this.url2 = 'assets/hommegt.png';
        break;
      case 'femme grande taille':
        this.url2 = 'assets/femmegt.png';
        break;
      case 'enfant pas genré':
        this.url2 = 'assets/enfant.png';
        break;
      case 'vieux pas genré':
        this.url2 = 'assets/vieux.png';
        break;
      case 'homme petite taille':
        this.url2 = 'assets/hommepetit.png';
        break;
      case 'femme petite taille':
        this.url2 = 'assets/femmepetit.png';
        break;
      case 'robot':
        this.url2 = 'assets/robot.png';
        break;
    }
    console.log('Stickman2Component reçoit les data:', this.scenario);
  }
}
