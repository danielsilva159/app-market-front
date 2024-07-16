import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserInterface from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: UserInterface) {
    return this.http.post(`${environment.BASE_URL}/user`, user);
  }
}
