import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { DoctorComponent } from './doctor';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'doctor',
        component: DoctorComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Doctor] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);