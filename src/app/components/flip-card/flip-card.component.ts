
import { Component, OnInit, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

// import { QuoteService } from './quote.service';
import { ProjectListService } from '../../services/project-list.service';

@Component({
    selector: 'app-flipcard',
    templateUrl: './flip-card.component.html',
    styleUrls: ['./flip-card.component.scss'],
    providers: [ ProjectListService ]
})
export class FlipCardComponent implements OnInit {

    @Input()
    title: string;
    @Input()
    frontBody: string;
    @Input()
    backBody: string;
    @Input()
    image: string;
    @Input()
    header: string;
    @Input()
    footer: string;
    @Input()
    infoButtonText: string;
    @Input()
    infoButtonURL: string;
    @Input()
    tech: Array<string>;
    @Input()
    target: string;
    @Input()
    role: string;
    @Input()
    details: string;

    constructor(private list: ProjectListService) { }

    ngOnInit() {
    }

}
