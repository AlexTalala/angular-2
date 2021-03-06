import {Component} from "@angular/core";

const todos = [
    {
        title: "Изучать JavaScript",
        completed: true
    },
    {
        title: "Изучать Angular 2",
        completed: false
    },
    {
        title: "Написать приложение",
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;

    toggle(todo: any){
        todo.completed = !todo.completed;
    }
}