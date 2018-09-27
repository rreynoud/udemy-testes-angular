import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {from, Observable, throwError} from 'rxjs';
import {User} from './User';
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [TodoService],
      imports: [HttpClientModule]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set todos property with the items returned from the server', inject([TodoService], (service: TodoService) => {
    const todos = [
      {id: 1, title: 'a'},
      {id: 2, title: 'b'},
      {id: 3, title: 'c'},
    ];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  }));

  it('should call the server to save the changes when a new todo item is added', inject([TodoService], (service: TodoService) => {
    const spy = spyOn(service, 'add').and.callFake(() => {
      return new Observable();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  }));

  it('should add the new todo returned from the server', inject([TodoService], (service: TodoService) => {
    let todo = {id: 1};

    spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  }));

  it('should set the messa property if server returns an error when a adding a new todo', inject([TodoService], (service: TodoService) => {
    let todo: User = {id: 1};
    const msg = 'deu ruim';
    spyOn(service, 'add').and.returnValue(throwError(msg));

    component.add();

    expect(component.message).toBe(msg);
  }));


  xit('should load todos from the server', () => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(from([1, 2, 3]));
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  });

});

