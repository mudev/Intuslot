import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '' , component: LoginComponent},
            { path: '**' , component: HomeComponent}
        ])    
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

