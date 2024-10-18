import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../_interfaces/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-u-add',
  standalone: true,
  imports: [],
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
      data => console.log(data.message)
    )
  }


}
