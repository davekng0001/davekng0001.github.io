import { Component, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css']
  })
  export class ToDoInputComponent {

    todoList: string[] = [];
    testList = [];
    valueT = '';

    itemAdded(){

      
      this.todoList.push(this.valueT);
      console.log(this.valueT);
      this.valueT='';
    }

    itemRemoved($event:MessageEvent){

      let indexV = Number(($event.target as Element).id);
      console.log(indexV);
      this.todoList.splice(indexV,1);
  
    }
   
  }
