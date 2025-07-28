import { Contact } from './contact/contact';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Apout } from './apout/apout';
import { Portfollio } from './portfollio/portfollio';
export const routes: Routes = [
{path:"", component:Home},
{path:'#',component:Home},
{path:'apout',component:Apout}
,
{path:'contact',component:Contact}
,
{path:'portfollio',component:Portfollio}



];

