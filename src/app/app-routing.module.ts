import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysSinceLastSeenComponent } from './components/days-since-last-seen/days-since-last-seen.component';
import { DylanVsJonComponent } from './components/dylan-vs-jon/dylan-vs-jon.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'dylan-vs-jon',
        component: DylanVsJonComponent,
    },
    {
        path: 'days-since-last-seen',
        component: DaysSinceLastSeenComponent,
    }, 
    {
        path: '',
        component: HomeComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
