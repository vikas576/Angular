import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  // templateUrl: './class-bind.component.html',
  template:`
            <h4 class="text-danger"> danger with simple text-danger class </h4>
            <h4 class="{{textSuccess}}"> success class with string interpolation </h4>
            <h4 [class]="textInfo"> Info with class property binding </h4>
            <h4 [class]="textInfo" class="text-big"> Property binding and class attribute used together=> class attr will elapsed. like here text-big is not working </h4> <br>
            <h4 [class.text-alert]="hasAlert"> conditionally use of single class "text-alert"==> for this class property is followed by class name.<p> //use single class conditoinally==> change the boolean value to display the effect of condition . </p> <p> //if true then text-alert class will apply otherwise the color of text will be black.</p> </h4> <br>
            <h4 [ngClass]="messageClasses" > use multiple class by  ngClass  directive of angular </h4>
            <h4 [className]="textSuccess"> use of ClassName attribute -- we can also put shorthand "class" instead of "className" </h4>
            <h4 [class.text-alert]="setMessageClass()"> use of muffets for class binding. </h4>

            `,
  // styleUrls: ['./class-bind.component.css']
  styles: [` 

  .text-danger{color:#ff0000;}    
  .text-success{color:#038a03;}   
  .text-primary{color:#0072ea;}   
  .text-info{color:#0072ea;}   
  .text-italic{font-style="italic";}  
  .text-alert{color:#d49f03;}       
  .text-big{font-size:30px;}
  .text-dark{font-weight:bold;}
  `],
})
export class ClassBindComponent implements OnInit {

  public textDanger= "text-danger";
  public textSuccess= "text-success";
  public textPrimary= "text-primary";
  public textInfo= "text-info";
  public textItalic= "text-italic";
  public textBig= "text-big";
  public textDark ="text-dark";

// use single class conditoinally==> change the boolean value to display the effect of condition . 
// if true then text-alert class will apply otherwise the color of text will be black.
// first define class name in property and then set another property for the boolean value/flag, so that we can conditionally use them.
  

  public hasSuccess =true;  
  public hasError = false;
  public hasAlert= true;
  public textbold= true;
 
  setMessageClass(){
    return this.hasSuccess;
    
  }

  
  
  //  use [ngClass] directive for to use conditionally multiClasses together 
  //  classes which have true will be applied.
  public messageClasses = {
    "text-alert":this.hasAlert,
    "text-danger":this.hasError,
    "textSuccess":this.hasSuccess,
    "text-dark": this.textbold,
  }

  constructor() { }

  ngOnInit() {
  }

}
