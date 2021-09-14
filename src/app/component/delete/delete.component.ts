import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Output () del : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick () {
    this.del.emit();
  }

}
