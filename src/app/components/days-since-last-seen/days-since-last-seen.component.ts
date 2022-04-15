import { Component } from '@angular/core';

interface Row {
    name: string;
    days: string;
}

@Component({
    selector: 'app-days-since-last-seen',
    templateUrl: './days-since-last-seen.component.html',
    styleUrls: ['./days-since-last-seen.component.scss']
})
export class DaysSinceLastSeenComponent  {
	rows: Row[] = [
		{name: 'Adam', days: '5'},
		{name: 'Allen', days: '0'},
		{name: 'Brandon', days: '0'},
		{name: 'Chris', days: '6'},
		{name: 'Denny', days: '0'},
		{name: 'Dylan', days: '0'},
		{name: 'Greg', days: '1'},
		{name: 'Joe', days: '2'},
		{name: 'Jon', days: '0'},
		{name: 'Josh', days: '0'},
		{name: 'Korry', days: '1'},
		{name: 'Kayle', days: '1'},
		{name: 'Matthew', days: '1'},
		{name: 'Mike', days: '0'},
		{name: 'Paul', days: '25'},
		{name: 'Ry', days: '0'},
		{name: 'Timmy', days: '0'},
		{name: 'Tyler', days: '20'},
		{name: 'Wayne', days: '29'},
	];
}
