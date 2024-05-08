import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private logins: { id: number, username: string }[] = [
        { id: 1, username: 'user1' },
        { id: 2, username: 'user2' },
        { id: 3, username: 'user3' }
    ]

    constructor() { }

    // Method to get all logins
    getLogins(): { id: number, username: string}[] {
        return this.logins;
    }

    // Method which adds a new login. Only dummy data, not actually used
    addLogin(username: string): void {
        const id = this.logins.length + 1;
        this.logins.push({ id, username });
    }

    // Method which edits a login
    editLogin(id: number, newUsername: string): void {
        const loginIndex = this.logins.findIndex(login => login.id === id);
        if (loginIndex !== -1) {
            this.logins[loginIndex].username = newUsername;
        }
    }
}
