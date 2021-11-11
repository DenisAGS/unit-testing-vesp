import { TodoService } from './todo.service'

export class TodosComponent {
  todos : any[] = [];
  message : any;

  constructor(private service: TodoService)  {}

  ngOnInit() {
    this.service.getTodos().subscribe( t =>
       this.todos = t)
  }

  add () {
    var newTodo = 1;
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);

  }

}
