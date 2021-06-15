import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu-facil',
    loadChildren: () => import('./menu-facil/menu-facil.module').then( m => m.MenuFacilPageModule)
  },
  {
    path: 'modo-facil-animales',
    loadChildren: () => import('./modo-facil-animales/modo-facil-animales.module').then( m => m.ModoFacilAnimalesPageModule)
  },
  {
    path: 'modo-intermedio-animales',
    loadChildren: () => import('./modo-intermedio-animales/modo-intermedio-animales.module').then( m => m.ModoIntermedioAnimalesPageModule)
  },
  {
    path: 'modo-dificil-animales',
    loadChildren: () => import('./modo-dificil-animales/modo-dificil-animales.module').then( m => m.ModoDificilAnimalesPageModule)
  },
  {
    path: 'menu-intermedio',
    loadChildren: () => import('./menu-intermedio/menu-intermedio.module').then( m => m.MenuIntermedioPageModule)
  },
  {
    path: 'menu-dificil',
    loadChildren: () => import('./menu-dificil/menu-dificil.module').then( m => m.MenuDificilPageModule)
  },
  {
    path: 'comida-dificil',
    loadChildren: () => import('./comida-dificil/comida-dificil.module').then( m => m.ComidaDificilPageModule)
  },
  {
    path: 'comida-intermedio',
    loadChildren: () => import('./comida-intermedio/comida-intermedio.module').then( m => m.ComidaIntermedioPageModule)
  },
  {
    path: 'comida-facil',
    loadChildren: () => import('./comida-facil/comida-facil.module').then( m => m.ComidaFacilPageModule)
  },
  {
    path: 'medicina-facil',
    loadChildren: () => import('./medicina-facil/medicina-facil.module').then( m => m.MedicinaFacilPageModule)
  },
  {
    path: 'medicina-intermedio',
    loadChildren: () => import('./medicina-intermedio/medicina-intermedio.module').then( m => m.MedicinaIntermedioPageModule)
  },
  {
    path: 'medicina-dificil',
    loadChildren: () => import('./medicina-dificil/medicina-dificil.module').then( m => m.MedicinaDificilPageModule)
  },
  {
    path: 'hardware-facil',
    loadChildren: () => import('./hardware-facil/hardware-facil.module').then( m => m.HardwareFacilPageModule)
  },
  {
    path: 'hardware-intermedio',
    loadChildren: () => import('./hardware-intermedio/hardware-intermedio.module').then( m => m.HardwareIntermedioPageModule)
  },
  {
    path: 'hardware-dificil',
    loadChildren: () => import('./hardware-dificil/hardware-dificil.module').then( m => m.HardwareDificilPageModule)
  },
  {
    path: 'banderas-facil',
    loadChildren: () => import('./banderas-facil/banderas-facil.module').then( m => m.BanderasFacilPageModule)
  },
  {
    path: 'banderas-intermedio',
    loadChildren: () => import('./banderas-intermedio/banderas-intermedio.module').then( m => m.BanderasIntermedioPageModule)
  },
  {
    path: 'banderas-dificil',
    loadChildren: () => import('./banderas-dificil/banderas-dificil.module').then( m => m.BanderasDificilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
