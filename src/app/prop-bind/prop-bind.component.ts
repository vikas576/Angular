import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  // templateUrl: './prop-bind.component.html',
  template:`
            <h3> Property Binding</h3> 


            <input type="text" [id] ="myId" value="attribute"> // by property binding <br>  <br>
            <input type="text" id ="{{myId}}" value="attribute" [(ngModel)]="name">  // by string interpolation <br> <br>
            <input type="button" id ="{{myId}}" [disabled]="!allowNewServer" value="attribute" > <br><br>
            <input type="button" id ="{{myId}}" [disabled]="allowNewServer" value="attribute" > <br><br>
            <p> {{allowNewServer}} </p> //string interpolation==> evaluate value by string interpolation<br><br>
            <p [innerText]="allowNewServer"> </p> // print string by property binding<br><br>
          `,


          styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent implements OnInit {

  
  public  myId ="testid";
  
  allowNewServer = true; 
 
  constructor() { 
    setTimeout(() => {
      this.allowNewServer =false;
    }, 2500);
  }
  ngOnInit() {  }


}
