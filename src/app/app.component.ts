
import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    
    <div class="container">
        <pre>
        {{model | json}}
        </pre>
       <h1>Form Builder</h1>
       <form>
          <form-builder [formJson]="ctrls" [model]="model"></form-builder>
        </form>
  </div>
    `
})
export class AppComponent { 
    public model:any = {};
    public fname:string;

    public ctrls:any = 
    [
        {
            'name': 'email',
            'label': 'Email'
        },
    
        {
            'name': 'first_name',
            'label': 'First Name',
            'multi' : true
        },
        {
            'type': 'radio',
            'name': 'radio',
            'label': 'Radio',
            'opts': [
                { label: 'Option 1', value:'opt_1'},
                { label: 'Option 2', value: 'opt_2'}
            ]
        },
        {   'type': 'check',
            'name': 'opt',
            'opts': [
                {'name':'opt_1', label: 'Option 1'},
                {'name':'opt_2', label: 'Option 2'}
            ]
        },
        {
            'type': 'select',
            'name': 'select_1',
            'label': 'Select',
            'opts': [
                { label: 'Option 1', value:'opt_1'},
                { label: 'Option 2', value: 'opt_2'}
            ]
        }
    ];
        
    consturctor() {
    } 
}
