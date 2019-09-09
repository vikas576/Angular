import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() {
setTimeout(() => {
    this.allowButton = true;
}, 1000);

  }
  public serverStatus = 'server is not connected.Press click button to connect.';
  // tslint:disable-next-line: quotemark
  public textDanger = "text-danger";
  public allowButton = false;
  public textBg = 'bg_primary';
  public triggerType;
  public inputStatus = '';
  public address1 = ' ';


  // tslint:disable-next-line: variable-name
  public main_Classes = {
    'margin-bottom': '50px',
    'font-size': '24px;',
    'text-align': 'center',

  };
  onCreateServer(event) {
    this.serverStatus = 'connected';
    this.textDanger = 'text-success';
    this.textBg = 'bg_success';
    console.log(event);
    this.triggerType = 'event trigger type is : ' + event.type;

  }
  updateSertverName(event: Event) {
    // this.inputStatus=(<HTMLInputElement>event.target).value;
    this.inputStatus = (event.target as HTMLInputElement).value;
    console.log(event);


  }

  ngOnInit() {
  }

}
