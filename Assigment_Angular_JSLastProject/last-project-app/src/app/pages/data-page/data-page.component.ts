import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.css'
})
export class DataPageComponent {

    constructor(private dataService: DataService) { }

    printAllLogins(): void {

        // Get all logins from data service, and print them in console.
        const logins = this.dataService.getLogins();
        console.log("All logins:", logins);
    }
}
