﻿import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisService } from './crisis.service';
import { crisesRouting } from './crises.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        crisesRouting
    ],
    declarations: [
        CrisisListComponent,
        CrisisDetailComponent
    ],
    providers: [
        CrisisService
    ]
})
export class CrisesModule { }
