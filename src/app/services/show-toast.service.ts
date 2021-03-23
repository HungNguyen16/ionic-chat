import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class ShowToastService {

  constructor(
    private toastController: ToastController,
  ) { }


  async showSuccess(alertmessage: string) {
    const alert = await this.toastController.create({
        header: 'Success',
        message: alertmessage,
        buttons: ['OK'],
        color: 'success',
        duration: 2000
    });
    await alert.present();
  }

  async showError(alertmessage: string) {
    const alert = await this.toastController.create({
        header: 'Error',
        message: alertmessage,
        buttons: ['OK'],
        color: 'danger',
        duration: 2000
    });
    await alert.present();
  }



}
