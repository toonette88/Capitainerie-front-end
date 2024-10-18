import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { IUser } from '../../../_interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-u-edit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './u-edit.component.html',
  styleUrl: './u-edit.component.css'
})
export class UEditComponent {

  user: IUser= {
    createdAt: '',
    email: '',
    name: '',
    password: '',
    updatedAt: '',
    _id: '',
  }

  constructor(
    private activated : ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id')
    console.log(id)
    this.userService.getUser(id).subscribe(
      data => {
        this.user = data
      }
    )
    
  }
  onSubmit(): void{
    this.userService.updateUser(this.user).subscribe(
      data => console.log(data.message)
    )
  }

}
