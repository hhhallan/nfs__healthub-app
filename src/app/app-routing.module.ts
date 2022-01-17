import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/user/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'tabac',
    loadChildren: () => import('./pages/categorie/tabac/tabac.module').then( m => m.TabacPageModule)
  },
  {
    path: 'livre',
    loadChildren: () => import('./pages/categorie/livre/livre.module').then( m => m.LivrePageModule)
  },
  {
    path: 'alcool',
    loadChildren: () => import('./pages/categorie/alcool/alcool.module').then( m => m.AlcoolPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./pages/categorie/nutrition/nutrition.module').then( m => m.NutritionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
