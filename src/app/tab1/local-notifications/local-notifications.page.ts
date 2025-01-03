import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
})
export class LocalNotificationsPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async schedule() {
    if(isPlatform("android") == true){
      await LocalNotifications.createChannel({
        id: '1',
        name: 'local notifications',
        sound: 'sound.wav'
      });
    }

    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: "Native Plugins App",
          body: "Checking local notifications",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5)},
          sound: 'sound.wav',
          attachments: undefined,
          smallIcon: 'ic_stat_adb',
          actionTypeId: "",
          extra: {
            data: 'Checking extras'
          },
        }
      ]
    });
    console.log('schedule notifications: ', notifs);
  }
}
