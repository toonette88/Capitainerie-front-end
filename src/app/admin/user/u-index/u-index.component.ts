import { Component } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { IUser } from '../../../_interfaces/user';
import { DatePipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-u-index',
  standalone: true,
  imports: [NgForOf, RouterLink, DatePipe],
  templateUrl: './u-index.component.html',
  styleUrl: './u-index.component.css'
})
export class UIndexComponent {

  userList: IUser[] = []

  constructor(private UserService: UserService) {}

  ngOnInit(): void{
    this.UserService.getAllUsers().subscribe(
      data => {
        console.log(data)
        this.userList = data.data
      }
    )
  }
}
