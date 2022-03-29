import { Component } from '@angular/core';

interface Row {
    link: Link;
    description: string;
    date: Date;
}

interface Link {
    route: string;
    name: string;
}

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    rows: Row[] = [
        {
            link: {
                route: 'dylan-vs-jon',
                name: 'Dylan VS Jon',
            },
            description: 'Dylan & Jon\'s foosball scoreboard, featuring Tim.',
            date: new Date('March 22, 2022'),
        },
        {
            link: {
                route: 'days-since-last-seen',
                name: 'Days Since Last Seen',
            },
            description: 'The number of days since employees have last visited the Altoona office.',
            date: new Date('March 28, 2022'),
        }
    ]
}
