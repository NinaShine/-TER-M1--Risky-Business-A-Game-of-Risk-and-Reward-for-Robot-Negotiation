import { Routes } from '@angular/router';
import { ImgTextComponent } from './component/img-text/img-text.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HomePageEngComponent } from './component/home-page-eng/home-page-eng.component';
import { HomePageEspComponent } from './component/home-page-esp/home-page-esp.component';

export const routes: Routes = [
    { path: '', component : HomePageComponent},
    { path : 'img-text', component : ImgTextComponent},
    { path: 'home-page-eng', component: HomePageEngComponent},
    { path: 'home-page-esp', component: HomePageEspComponent}
];
