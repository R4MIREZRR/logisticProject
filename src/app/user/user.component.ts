import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() nameUser;


  ngOnInit(): void {
  }


  users: string[] = ['Ryan', 'Joe','Cameron', 'Rodrigo', 'Erika'];

  addUser(newUser){
    this.users.push(newUser.value);
    newUser.value = '';
    return false;
  }


  deleteUser(user){
    for (let i = 0; i < this.users.length; i++) {
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }



}
