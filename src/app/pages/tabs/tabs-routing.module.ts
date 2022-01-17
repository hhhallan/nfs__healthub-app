import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../user/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'tabac',
        loadChildren: () => import('../categorie/tabac/tabac.module').then(m => m.TabacPageModule)
      },
      {
        path: 'alcool',
        loadChildren: () => import('../categorie/alcool/alcool.module').then(m => m.AlcoolPageModule)
      },
      {
        path: 'livre',
        loadChildren: () => import('../categorie/livre/livre.module').then(m => m.LivrePageModule)
      },
      {
        path: 'nutrition',
        loadChildren: () => import('../categorie/nutrition/nutrition.module').then(m => m.NutritionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
