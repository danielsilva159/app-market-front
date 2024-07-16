import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import UserInterface from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.min(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  onSave() {
    const user: UserInterface = {
      name: this.form.value.name as string,
      email: this.form.value.email as string,
      password: this.form.value.password as string,
    };
    this.userService.createUser(user).subscribe((data) => {
      console.log(data);
    });
  }
}
