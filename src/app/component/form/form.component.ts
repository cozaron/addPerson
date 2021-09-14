import { User } from 'src/app/model/user';
import { MyServiceService } from './../../services/my-service.service';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newUser : EventEmitter<User> = new EventEmitter();
  name : string ="";
  adress : string = "" ;
  user! : User ;                                                        
  constructor(private myService :MyServiceService) { }

  ngOnInit(): void {
  }
  onSubmit () {
    
    this.user = {
      name : this.name,
      adr:this.adress
    }
    console.log(this.name + this.adress);
    
    this.newUser.emit(this.user);
    this.name = "";
    this.adress="";
  }

}
