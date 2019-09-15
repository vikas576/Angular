import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {
  displayName = true;
  serverCondition = true;
  public displayName1 = false;
  public serverName1 = ' ';
  public serverName2 = ' ';
  constructor() { }

  ngOnInit() { }
  onGetServer() {

  }


}
