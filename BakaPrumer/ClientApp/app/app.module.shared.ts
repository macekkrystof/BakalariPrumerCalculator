import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { PrumerComponent } from './components/prumer/prumer.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    declarations: [
        AppComponent,
        PrumerComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        LoadingModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'prumer', pathMatch: 'full' },
            { path: 'prumer', component: PrumerComponent },
            { path: '**', redirectTo: 'prumer' }
        ])
    ]
})
export class AppModuleShared {
}
