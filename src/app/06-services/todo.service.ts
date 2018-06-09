import {from, Observable} from 'rxjs';
import {User} from './User';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo): Observable<User> {
    return from(todo);//this.http.post<User>('...', todo);
  }

  getTodos(): Observable<User[]> {
    return this.http.get<User[]>('...');
  }

  delete(id): Observable<User> {
    return this.http.delete<User>('...');
  }
}
