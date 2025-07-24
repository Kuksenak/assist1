import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public auth: AuthService) { }
  // private auth = inject(Auth2Service); // ✅ корректная DI-инъекция
  login() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }

  // // email = '';
  // // password = '';
  // // message = '';

  // // login() {
  // //   // this.auth.register(this.email, this.password)
  // //   //   .subscribe(success => {
  // //   //     this.message = success ? 'Успешно!' : 'Ошибка регистрации';
  // //   //   });

  // //   this.message = '';
  // // }

  // // Создаем FormGroup для управления формой логина
  // loginForm!: FormGroup;

  // constructor() { }

  // ngOnInit(): void {
  //   // Инициализируем форму с FormControl для каждого поля
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)])
  //   });
  // }

  // // Метод, вызываемый при отправке формы
  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     console.log('Данные формы:', this.loginForm.value);
  //     // Здесь обычно происходит вызов сервиса аутентификации:
  //     // this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(...)
  //     alert('Форма отправлена (проверьте консоль)! В реальном приложении здесь будет логика входа.');
  //   } else {
  //     console.log('Форма невалидна');
  //     alert('Пожалуйста, заполните все поля корректно.');
  //   }
  // }

  // // Вспомогательные геттеры для удобного доступа к элементам формы в шаблоне
  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }
}
