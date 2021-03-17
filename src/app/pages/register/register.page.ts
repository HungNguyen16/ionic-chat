import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, PushNotification, PushNotificationActionPerformed, PushNotificationToken } from '@capacitor/core';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

const { PushNotifications, Storage } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  public userUID: string;

  public name: string;
  // tslint:disable-next-line:no-inferrable-types
  public appID: string = "30825a8f1e1e2ae";
  public apiKey: string = "f5e7be05ded98deebb08ab22201241f98b3cf249";
  public appRegion: string = "us";

  public chatID: string = 'superhero1';

  public isCometLoggedIn: boolean = false;

  constructor(public navCtrl: NavController,
      private loadingController: LoadingController,
      private alertController: AlertController,
      private router: Router) {
      CometChat.init(this.appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(this.appRegion).build()).then(
          initialized => {
              console.log("Initialized", initialized);
              if (initialized) {
                  CometChat.addConnectionListener(
                      "XMPPConnectionListener",
                      new CometChat.ConnectionListener({
                          onConnected: () => {
                              console.log("ConnectionListener => On Connected");
                          },
                          inConnecting: () => {
                              console.log("ConnectionListener => In connecting");
                          },
                          onDisconnected: () => {
                              console.log("ConnectionListener => On Disconnected");
                          },
                          featureThrottled: () => {
                              console.log("ConnectionListener => On Feature Throttled");
                          }
                      })
                  );
                  CometChat.addMessageListener(
                      "UNIQUE_LISTENER_ID_MESSAGE",
                      new CometChat.MessageListener({
                        onTextMessageReceived: textMessage => {
                          console.log("CC: Text message received successfully", textMessage);
                        },
                        onMediaMessageReceived: mediaMessage => {
                          console.log("CC: Media message received successfully", mediaMessage);
                        },
                        onCustomMessageReceived: customMessage => {
                          console.log("CC: Custom message received successfully", customMessage);
                        },
                        onMessagesDelivered: messageReceipt => {
                          console.log("CC: Message Delivered", messageReceipt);
                        },
                        onMessagesRead: messageReceipt => {
                          console.log("CC: Message Read", messageReceipt);
                        },
                        onTypingStarted: typingIndicator => {
                          console.log("CC: Typing Started", typingIndicator);
                        },
                        onTypingEnded: typingIndicator => {
                          console.log("CC: Typing Ended", typingIndicator);
                        }
                      })
                  );
                  CometChat.getLoggedinUser().then(user => {
                      if (user != null) {
                          console.log("getLoggedInUser", user);
                          this.router.navigate(['list-user']);
                      }else{
                          console.log("no logged in user");
                          CometChat.setSource('open-source-apps', 'ionic', 'ionic');
                      }
                  })
              }
          },
          error => {
              console.log('Initialization failed with error:', error);
              this.presentAlert(error.message);
          }
      );
  }

  ngOnInit() {
      // PushNotifications.requestPermission().then( async result => {
      //     if (result.granted) {
      //         // Register with Apple / Google to receive push via APNS/FCM
      //         PushNotifications.register();
      //     } else {
      //         // Show some error
      //     }
      // });

      // PushNotifications.addListener('registration', async (token: PushNotificationToken) => {
      //     alert('Push registration success, token: ' + token.value);
      //     await Storage.set({
      //         key: 'fcmToken',
      //         value: token.value
      //     });
      // });

      // PushNotifications.addListener('registrationError', (error: any) => {
      //     alert('Error on registration: ' + JSON.stringify(error));
      // });

      // PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      //     alert('Push received: ' + JSON.stringify(notification));
      // });

      // PushNotifications.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
      //     alert('Push action performed: ' + JSON.stringify(notification));
      // });
  }

  getUserList(){
      var userBuilder = new CometChat.UsersRequestBuilder().setLimit(20).build();
      userBuilder.fetchNext().then(
          userList => {
              console.log("users", userList);
          },
          error => {
              console.log('User list fetching failed with error:', error);
          }
      );
  }

  async presentAlert(alertmessage: string) {
      const alert = await this.alertController.create({
          header: 'Error',
          message: alertmessage,
          buttons: ['OK']
      });

      await alert.present();
  }

  async register() {
      let apiKey = "f5e7be05ded98deebb08ab22201241f98b3cf249";
      // var uid = "user123456";
      var uid = this.userUID;
      // var name = "Kevin123";
      var name = this.name;
      var user = new CometChat.User(uid);

      user.setName(name);



      CometChat.createUser(user, apiKey).then(
        user => {
          console.log("user created", user);
        }, error => {
          console.log("error", error);
        }
      )
      CometChat.init(this.appID, new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(this.appRegion)
        .build()).then(

          () => {
            console.log('Initialization completed successfully');
            CometChat.createUser(user, apiKey).then(
              user => {
                console.log("user created", user);
                this.router.navigate(['/login']);
              }, error => {
                console.log("error", error);
              }
            )
            // You can now call login function.
          },

          error => {
            console.log('Initialization failed with error:', error);
            this.presentAlert(error.message);
            // Check the reason for error and take apppropriate action.
          }

        );
    }

  setupPushNotification(token){
      CometChat.registerTokenForPushNotification(token, {}).then(
          () => {
            console.log('registered token successfully');
          }, error => {
            console.log('error in register token')
          }
      );
  }
}
