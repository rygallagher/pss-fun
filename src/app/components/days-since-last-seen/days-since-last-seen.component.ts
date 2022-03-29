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
		{name: 'Adam', days: '64'},
		{name: 'Allen', days: '0'},
		{name: 'Brandon', days: '0'},
		{name: 'Chris', days: '0'},
		{name: 'Denny', days: '--'},
		{name: 'Dylan', days: '0'},
		{name: 'Greg', days: '0'},
		{name: 'Joe', days: '0'},
		{name: 'Jon', days: '0'},
		{name: 'Josh', days: '0'},
		{name: 'Korry', days: '0'},
		{name: 'Kayle', days: '1'},
		{name: 'Matthew', days: '0'},
		{name: 'Mike', days: '--'},
		{name: 'Nick', days: '0'},
		{name: 'Paul', days: '11'},
		{name: 'Ry', days: '0'},
		{name: 'Timmy', days: '0'},
		{name: 'Tyler', days: '6'},
		{name: 'Wayne', days: '15'},
	]
}
