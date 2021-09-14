import { MyServiceService } from './../../services/my-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  items : User[] =[] ;  
  constructor(private myService :MyServiceService) { }

  ngOnInit(): void {
    this.myService.getUser().subscribe((items)=>this.items=items);
    
  }
  onNewUser (newUser :User) {
     this.myService.addUser(newUser).subscribe((userAdd)=>this.items.unshift(userAdd) );
  }
  onDelete (user:User) {
   this.myService.deleteUser(user).subscribe(() => (this.items = this.items.filter((t) => t.id !== user.id)));
  }
}
