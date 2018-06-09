import {TodoService} from './todo.service';
import {Component, OnInit} from '@angular/core';
import {User} from './User';

@Component({
  selector: 'app-todos',
  template: `asdasd`
})
export class TodosComponent implements OnInit {
  todos: User[] = [];
  message;

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() {
    const newTodo: User = {title: '... '};
    this.service.add(newTodo).subscribe(t =>
      this.todos.push(t), err => this.message = err
    );
    console.log(this.service.add(newTodo));
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }
}
