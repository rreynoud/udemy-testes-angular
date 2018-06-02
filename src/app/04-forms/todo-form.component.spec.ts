import { TodoFormComponent } from './todo-form.component';
import { FormBuilder, FormControl } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    const formBuilder: FormBuilder = new FormBuilder();
    component = new TodoFormComponent(formBuilder);
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
