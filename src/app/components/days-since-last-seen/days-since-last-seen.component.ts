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
		{name: 'Adam', days: '0'},
		{name: 'Allen', days: '0'},
		{name: 'Brandon', days: '0'},
		{name: 'Chris', days: '1'},
		{name: 'Denny', days: '1'},
		{name: 'Dylan', days: '0'},
		{name: 'Greg', days: '0'},
		{name: 'Joe', days: '0'},
		{name: 'Jon', days: '0'},
		{name: 'Josh', days: '0'},
		{name: 'Korry', days: '1'},
		{name: 'Kayle', days: '3'},
		{name: 'Matthew', days: '0'},
		{name: 'Mike', days: '0'},
		{name: 'Paul', days: '20'},
		{name: 'Ry', days: '0'},
		{name: 'Timmy', days: '0'},
		{name: 'Tyler', days: '15'},
		{name: 'Wayne', days: '24'},
	]
}
