import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DylanVsJonComponent } from './components/dylan-vs-jon/dylan-vs-jon.component';
import { DaysSinceLastSeenComponent } from './components/days-since-last-seen/days-since-last-seen.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        DylanVsJonComponent,
        DaysSinceLastSeenComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTableModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTreeModule,
        MatMenuModule,
        MatRadioModule,
        MatChipsModule,
        MatSliderModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatTabsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
