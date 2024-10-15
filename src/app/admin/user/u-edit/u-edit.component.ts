import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { IUser } from '../../../_interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-u-edit',
  standalone: true,
  imports: [FormsModule],
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
        console.log(data)
        this.user = data.data
      }
    )
    
  }
  onSubmit(){}

}
