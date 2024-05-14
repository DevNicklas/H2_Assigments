import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {
    loginForm!: FormGroup

    constructor(private formBuilder: FormBuilder, private dataService: DataService) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onLoginFormSubmit() {
        if(this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        console.error("The login is wrongfully fulfilled");
    }
}
