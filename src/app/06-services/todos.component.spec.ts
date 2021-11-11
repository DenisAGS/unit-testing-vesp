import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, from, empty } from 'rxjs';
//import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach( () => {
    service = new TodoService(null as any);
    component = new TodosComponent(service);

  });

  it('should set todos property with the items returned from the server', () =>   {
    let todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake( ()=> {
      return from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);

  });

  it('should call the server the changes when a new...', () =>   {
    let spy = spyOn(service, 'add').and.callFake( t => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('should add the new todo returned from the server', () =>   {
    let todo = 10;
    let spy = spyOn(service, 'add').and.returnValue( from([ todo ]) );


    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });
   //it('should set the message property if server returns an error ...', () => {
		//let error =  'error from the server';
    	//let spy = spyOn(service, 'add').and.returnValue( throw(myerror) );
	    //component.add();

  	    //expect(component.message).toBe(error);

    //});

});

