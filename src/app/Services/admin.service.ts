import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.models';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';
export const ROLE = 'role';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public adminConnected;
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllAdmins() {
    return this.http.get<Admin[]>(`${this.baseUrl}admins`);
  }

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}signup`, admin)
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, data.username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
            sessionStorage.setItem(ROLE, data.authorities[0].authority);
            return data;
          }
        )
      );
  }

  login(admin: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}signin`, admin)

      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, data.username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
            sessionStorage.setItem(ROLE, data.authorities[0].authority);
            return data;
          }
        )
      );
  }

  getAdminDetails(username): Observable<Object> {
    return this.http.get<Admin>(`${this.baseUrl}admin/${username}`);

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  getAuthenticatedRole() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(ROLE);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(ROLE);

  }

  updateAdmin(admin, username): Observable<Object> {
    return this.http.get(`${this.baseUrl}admin/${username}`, admin);
  }
  deleteAdmin(username: String): Observable<Object> {
    return this.http.get<Admin>(`${this.baseUrl}deleteadmin/${username}`);
  }
}
