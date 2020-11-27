
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Chat';
  public form:FormGroup;
  isCollapsed = false;
  bounce: any;
  alerts: any[] = [{}];
  constructor( private fb:FormBuilder) 
  {
    this.form = this.fb.group({
      texto:['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

  }
  add(): void {
    this.alerts.push({
      msg: this.form.controls['texto'].value,
      data: `${new Date().toLocaleTimeString()}`
    });
  }
 
}
