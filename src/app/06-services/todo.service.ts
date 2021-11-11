import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo:any) {
    return this.http.post('...', todo).pipe(map(r => r as number));
  }

  getTodos() { 
    return this.http.get('...').pipe(map(r => r as number[]));
  }

  delete(id:any) {
    return this.http.delete('...').pipe(map(r => r as [] ));
  }
}