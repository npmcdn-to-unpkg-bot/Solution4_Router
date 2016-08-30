﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Hero, HeroService }  from './hero.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
     moduleId:module.id
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;

    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getHero(id).then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/