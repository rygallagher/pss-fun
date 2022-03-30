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
		{name: 'Adam', days: '65'},
		{name: 'Allen', days: '1'},
		{name: 'Brandon', days: '0'},
		{name: 'Chris', days: '1'},
		{name: 'Denny', days: '--'},
		{name: 'Dylan', days: '0'},
		{name: 'Greg', days: '0'},
		{name: 'Joe', days: '0'},
		{name: 'Jon', days: '1'},
		{name: 'Josh', days: '0'},
		{name: 'Korry', days: '0'},
		{name: 'Kayle', days: '2'},
		{name: 'Matthew', days: '0'},
		{name: 'Mike', days: '--'},
		{name: 'Nick', days: '0'},
		{name: 'Paul', days: '12'},
		{name: 'Ry', days: '0'},
		{name: 'Timmy', days: '0'},
		{name: 'Tyler', days: '7'},
		{name: 'Wayne', days: '16'},
	]
}
