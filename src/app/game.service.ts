import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
 
  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  addGame(game: Game){
    return this.http.post<Game>(`${this.url}add`, game)
  }

  // Get Users - Read
  getGames(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'games')
  }

  // Get User by Id - Read
  getGameById(id: number): Observable<Game>{
    return this.http.get<Game>(`${this.url}game/${id}`)
  }

  // Update User - Update
  updateGame(id?: number ,game?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, game)
  }

  // Delete User - Delete
  deleteGame(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}
