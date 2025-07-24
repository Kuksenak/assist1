// import { CommonModule } from '@angular/common';
// import { Component, OnInit, OnDestroy } from '@angular/core';

// interface TwoFactorEntry {
//   id: number;
//   issuer: string;
//   name: string;
//   code: string;
// }

// @Component({
//   selector: 'app-mfa',
//   template: `

// <div class="min-h-screen bg-gray-100 p-4 font-inter flex flex-col items-center">
//       <h1 class="text-4xl font-bold text-gray-800 mb-8 mt-4 text-center">
//         Мои 2FA коды
//       </h1>
//       <div class="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
//       <div *ngFor="let entry of twoFactorEntries" class="row-container">
//         <div class="info-section">
//           <div class="issuer">{{ entry.issuer }}</div>
//           <div class="name">{{ entry.name }}</div>
//         </div>
//         <div class="code-section">
//           {{ entry.code }}
//         </div>
//         <div class="update-info">
//           Обновляется каждые 30 секунд
//         </div>
//       </div>
//     </div>
//     </div>


//   `,
//   styles: [`
//   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

//     .font-inter {
//       font-family: 'Inter', sans-serif;
//     }

//     /* Tailwind CSS classes manually translated for app-root */
//     .min-h-screen { min-height: 100vh; }
//     .bg-gray-100 { background-color: #f3f4f6; }
//     .p-4 { padding: 1rem; }
//     .flex { display: flex; }
//     .flex-col { flex-direction: column; }
//     .items-center { align-items: center; }
//     .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
//     .font-bold { font-weight: 700; }
//     .text-gray-800 { color: #1f2937; }
//     .mb-8 { margin-bottom: 2rem; }
//     .mt-4 { margin-top: 1rem; }
//     .text-center { text-align: center; }

//     .w-full { width: 100%; }
//     .max-w-4xl { max-width: 56rem; }
//     .bg-white { background-color: #fff; }
//     .rounded-xl { border-radius: 0.75rem; }
//     .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
//     .overflow-hidden { overflow: hidden; }

//     .row-container {
//       display: flex;
//       flex-direction: column; /* flex-col */
//       align-items: center; /* items-center */
//       justify-content: space-between; /* justify-between */
//       padding: 1rem; /* p-4 */
//       border-bottom: 1px solid #e5e7eb; /* border-b border-gray-200 */
//     }
//     .row-container:last-child {
//       border-bottom: 0; /* last:border-b-0 */
//     }

//     @media (min-width: 640px) { /* sm: */
//       .row-container {
//         flex-direction: row; /* sm:flex-row */
//       }
//     }

//     .info-section {
//       display: flex;
//       flex-direction: column; /* flex-col */
//       align-items: center; /* items-center */
//       margin-bottom: 0.5rem; /* mb-2 */
//     }

//     @media (min-width: 640px) { /* sm: */
//       .info-section {
//         align-items: flex-start; /* sm:items-start */
//         margin-bottom: 0; /* sm:mb-0 */
//         width: 50%; /* sm:w-1/2 */
//       }
//     }

//     .issuer {
//       font-size: 0.875rem; /* text-sm */
//       font-weight: 600; /* font-semibold */
//       color: #6b7280; /* text-gray-500 */
//       text-transform: uppercase; /* uppercase */
//       letter-spacing: 0.05em; /* tracking-wide */
//     }

//     .name {
//       font-size: 1.25rem; /* text-xl */
//       font-weight: 700; /* font-bold */
//       color: #111827; /* text-gray-900 */
//       text-align: center; /* text-center */
//     }

//     @media (min-width: 640px) { /* sm: */
//       .name {
//         text-align: left; /* sm:text-left */
//       }
//     }

//     .code-section {
//       background-color: #eff6ff; /* bg-blue-50 */
//       color: #1d4ed8; /* text-blue-700 */
//       font-family: monospace; /* font-mono */
//       font-size: 1.875rem; /* text-3xl */
//       padding-top: 0.5rem; /* py-2 */
//       padding-bottom: 0.5rem; /* py-2 */
//       padding-left: 1rem; /* px-4 */
//       padding-right: 1rem; /* px-4 */
//       border-radius: 0.5rem; /* rounded-lg */
//       letter-spacing: 0.05em; /* tracking-wider */
//       user-select: all; /* select-all */
//       text-align: center; /* text-center */
//     }

//     @media (min-width: 640px) { /* sm: */
//       .code-section {
//         width: auto; /* sm:w-auto */
//       }
//     }

//     .update-info {
//       display: none; /* hidden */
//       font-size: 0.75rem; /* text-xs */
//       color: #9ca3af; /* text-gray-400 */
//       margin-left: 1rem; /* ml-4 */
//       width: 25%; /* w-1/4 */
//       text-align: right; /* text-right */
//     }

//     @media (min-width: 768px) { /* md: */
//       .update-info {
//         display: block; /* md:block */
//       }
//     }
//   `],
//   imports: [CommonModule]
// })
// export class MfaComponent implements OnInit, OnDestroy {
//   twoFactorEntries: TwoFactorEntry[] = [
//     { id: 1, issuer: 'Google', name: 'Мой аккаунт', code: '' },
//     { id: 2, issuer: 'GitHub', name: 'Личный профиль', code: '' },
//     { id: 3, issuer: 'Facebook', name: 'Профиль пользователя', code: '' },
//     { id: 4, issuer: 'Dropbox', name: 'Облачное хранилище', code: '' },
//     { id: 5, issuer: 'Amazon', name: 'Интернет-магазин', code: '' },
//     { id: 6, issuer: 'Microsoft', name: 'OneDrive', code: '' },
//     { id: 7, issuer: 'Twitter', name: 'Аккаунт', code: '' },
//     { id: 8, issuer: 'Instagram', name: 'Личная страница', code: '' },
//   ];

//   private intervalId: any;

//   ngOnInit() {
//     this.updateCodes();
//     this.intervalId = setInterval(() => this.updateCodes(), 30000);
//   }

//   ngOnDestroy() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   private updateCodes() {
//     this.twoFactorEntries = this.twoFactorEntries.map(entry => ({
//       ...entry,
//       code: Math.floor(100000 + Math.random() * 900000).toString(),
//     }));
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

interface TwoFactorAccount {
  issuer: string;
  name: string;
  code: string; // In a real application, this would be dynamically generated/fetched
}

@Component({
  selector: 'app-mfa',
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.scss'],
  imports: [CommonModule, CardComponent]
})
export class MfaComponent implements OnInit {

  twoFactorAccounts: TwoFactorAccount[] = [];

  constructor() { }

  ngOnInit(): void {
    // In a real application, you would fetch this data from a service
    // For demonstration, we'll use mock data.
    this.twoFactorAccounts = [
      { issuer: 'Google', name: 'myemail@gmail.com', code: '123456' },
      { issuer: 'GitHub', name: 'mygithubuser', code: '789012' },
      { issuer: 'Microsoft', name: 'myworkaccount', code: '345678' },
      { issuer: 'Twitch', name: 'mystreamer', code: '901234' },
    ];
  }

  // In a real application, you'd likely have a method to refresh codes
  refreshCode(account: TwoFactorAccount): void {
    console.log(`Refreshing code for ${account.issuer} - ${account.name}`);
    // Implement actual code refresh logic here (e.g., call a service)
    // For now, let's just simulate a change
    account.code = this.generateRandomCode();
  }

  private generateRandomCode(): string {
    return Math.floor(1.0 + Math.random() * 999999).toString().padStart(6, '0');
  }
}