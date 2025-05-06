import { Routes } from '@angular/router';
import { Paths } from './const/Paths';
import { Home } from './page/home/home.component';
import { Headphones } from './page/headphones/headphones.component';
import { Laptops } from './page/laptops/laptops.component';
import { Monitors } from './page/monitors/monitors.component';
import { Login } from './page/login/login.component';
import { Register } from './page/register/register.component';
import { All } from './page/all/all.component';
import { Favorites } from './page/favorites/favorites.component';

export const routes: Routes = [
    { path: Paths.HOME, component: Home },
    { path: Paths.HEADPHONES, component: Headphones },
    { path: Paths.LAPTOPS, component: Laptops},
    { path: Paths.MONITORS, component: Monitors },
    { path: Paths.ALL, component: All },
    { path: Paths.FAVORITES, component: Favorites },
    { path: Paths.LOGIN, component: Login },
    { path: Paths.REGISTER, component: Register }
];
