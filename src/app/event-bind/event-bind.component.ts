import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {
  public serverStatus="server is not connected.Press click button to connect."
  public textDanger ="text-danger";
  public allowButton =false;
  public textBg ="bg_primary";
  public triggerType;
  
  
  constructor() { 
setTimeout(() => {
    this.allowButton =true;
}, 1000);

  }
  onCreateServer(event){
    this.serverStatus="connected";
    this.textDanger="text-success";
    this.textBg="bg_success";
    console.log(event);
    this.triggerType= "event trigger type is : " + event.type;
    
  }
  
  public main_Classes = {
    
    "font-size":"24px;",
    "text-align":"center",
    
  }

  ngOnInit() {
  }

}
