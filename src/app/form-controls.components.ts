
import { Component, Input } from '@angular/core';

// Radio buttons
@Component({
    selector: 'radio-button',
    template: `
     <div class="form-group">
        <label >{{prop.label}}</label>
        <div class="radio" *ngFor="let opt of prop.opts">
          <label><input type="radio"  [(ngModel)]="model[prop.name]" [name]="prop.name" [value]="opt.value">{{opt.label}}</label>
        </div>
    </div>
    `
})
export class RadioButtonComponent {
    @Input() prop:any = {};
    @Input() model:any;
    constructor() { }
}

// Select control 
@Component({
    selector: 'select-box',
    template: `
     <div class="form-group">
          <label for="sel1">{{prop.label}}</label>
          <select class="form-control" [(ngModel)]="model[prop.name]" [name]="prop.name">
            <option *ngFor="let opt of prop.opts" [value]="opt.value">{{opt.label}}</option>
          </select>
        </div>
    `
})
export class SelectBoxComponent {
    @Input() prop:any = {};
    @Input() model:any;
    constructor() { }
}


// checkbox control
@Component({
    selector: 'check-box',
    template: `
     <div class="form-group">
        <label >{{prop.label}}</label>
         <div class="checkbox" *ngFor="let opt of prop.opts">
            <label><input type="checkbox" [(ngModel)]="model[opt.name]">{{opt.label}}</label>
        </div>
     </div>
    `
})
export class CheckBoxComponent {
    @Input() prop:any = {};
    @Input() model:any;
    constructor() {}
}

// text,email,tel,textarea,password, 
@Component({
    selector: 'text-box',
    template: `
     <div class="form-group">
        <label >{{prop.label}}</label>
        <input *ngIf="!prop.multi" type="{{prop.type}}" class="form-control"  [id]="prop.name" [name]="prop.name" [(ngModel)]="model[prop.name]">
        <textarea *ngIf="prop.multi" class="form-control" rows="5" [id]="prop.name" [name]="prop.name" [(ngModel)]="model[prop.name]"></textarea>
      </div> 
    `
})
export class TextBoxComponent {
    @Input() prop:any = {};
    @Input() model:any;
    constructor() {
    }
}

// control builder
@Component({
    selector: 'control-builder',
    template: ` 
        <div [ngSwitch]="prop.type">
             <check-box *ngSwitchCase="'check'" [prop]="prop" [model]="model"></check-box>
             <radio-button *ngSwitchCase="'radio'" [prop]="prop" [model]="model"></radio-button>
             <select-box *ngSwitchCase="'select'" [prop]="prop" [model]="model"></select-box>
             <text-box *ngSwitchDefault [prop]="prop" [model]="model" ></text-box>
        </div>
    `
})
export class ControlBuilderComponent {
    @Input() prop:any = {};
    @Input() model:any;
    constructor() { 
        
    }
}

@Component({
    selector: 'form-builder',
    template: `
    <form>
        <control-builder *ngFor="let prop of formJson" [prop]="prop" [model]="model"></control-builder>
        <button type="submit" class="btn btn-default">Submit</button>
    </form>
    `
})
export class FormBuilderComponent {
    @Input() formJson:any = {};
    @Input() model:any;
    constructor() { }
}