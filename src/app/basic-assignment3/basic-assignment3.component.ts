import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assignment3',
  templateUrl: './basic-assignment3.component.html',
  styleUrls: ['./basic-assignment3.component.css']
})
export class BasicAssignment3Component implements OnInit {
public showSecret1 =  true;
public showSecret2 =  true;
log = [];

onDisplay() {
  this.showSecret2 = !this.showSecret2;
  this.log.push(this.log.length + 1);
}



  constructor() { }

  ngOnInit() {
  }

}
