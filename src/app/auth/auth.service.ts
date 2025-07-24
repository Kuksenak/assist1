import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Auth, authState } from "@angular/fire/auth";
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, User, signOut } from "firebase/auth";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  user$: Observable<User | null> = authState(this.auth);

  constructor(private http: HttpClient) {
    this.user$.subscribe(user => {
      if (user) {
        console.log('Пользователь вошёл:', user);
        // Здесь можно сохранить user в сервисе, локальном сторе или куда угодно
      } else {
        console.log('Пользователь вышел или неавторизован');
      }
    });
  }

  async loginWithGoogle1(): Promise<void> {
    try {

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });

      const result = await signInWithPopup(this.auth, provider);
      const idToken = await result.user.getIdToken();
      console.log(idToken);
      // await this.http.post('/api/auth/google', { idToken }).toPromise();
    } catch (err) {
      console.error('Ошибка входа через Google:', err);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Пользователь вышел');
      // Можно очистить локальное состояние, если есть
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    await signInWithRedirect(this.auth, provider);
  }

  async handleRedirectResult() {
    const result = await getRedirectResult(this.auth);
    if (result) {
      const idToken = await result.user.getIdToken();
      console.log(idToken);
      // await this.http.post('/api/auth/google', { idToken }).toPromise();
    }
  }
}