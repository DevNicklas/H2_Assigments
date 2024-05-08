import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.css'
})
export class DataPageComponent {

    constructor(private dataService: DataService) {

    }

    printAllLogins(): void {
        const logins = this.dataService.getLogins();
        console.log(logins);
    }
}
