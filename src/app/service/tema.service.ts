import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogfmerim.herokuapp.com/temas')
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://blogfmerim.herokuapp.com/temas/${id}`)
  }

  getByDescricaoTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogfmerim.herokuapp.com/temas/descricao/${descricao}`)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogfmerim.herokuapp.com/temas', tema)
  }

 putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogfmerim.herokuapp.com/temas', tema)
  }

  deleteTema(id: number){
    return this.http.delete(`https://blogfmerim.herokuapp.com/temas/${id}`)
  }

}