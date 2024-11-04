import { Component, NgModule, OnInit } from '@angular/core';
import { IUser } from '../../../_interfaces/user';
import { UserService } from '../../../_services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-u-add',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './u-add.component.html',
  styleUrl: './u-add.component.css'
})
export class UAddComponent implements OnInit{

  user: IUser = {
    name: '',
    email: '',
    password: '',
  }

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      data => console.log(data)
    )
  }


}
