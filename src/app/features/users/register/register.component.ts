import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';
  firstName = '';
  lastName = '';
  message = '';

  register() {
    // this.auth.register(this.email, this.password)
    //   .subscribe(success => {
    //     this.message = success ? 'Успешно!' : 'Ошибка регистрации';
    //   });

    if (this.password !== this.confirmPassword) {
      this.message = 'Пароли не совпадают!';
      return;
    }
    this.message = '';
  }
}
