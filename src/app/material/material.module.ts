import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
    exports:[
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
    ]
})

export class MaterialModule{}