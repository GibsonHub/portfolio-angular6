import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
    links: Array<object>;

    constructor() {
        this.links.push({
            url: 'http://www.google.com'
        });
    }
    ngOnInit() {
    }
}
