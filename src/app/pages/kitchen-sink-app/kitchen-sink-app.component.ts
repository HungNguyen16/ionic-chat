import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CometChat } from "@cometchat-pro/chat";
// import { CometChat } from '@cometchat-pro/cordova-ionic-chat';

import { COMETCHAT_CONSTANTS } from "src/app/CONSTS";

@Component({
  selector: "app-kitchen-sink-app",
  templateUrl: "./kitchen-sink-app.component.html",
  styleUrls: ["./kitchen-sink-app.component.scss"],
})
export class KitchenSinkAppComponent implements OnInit {
  userInput: String = "";

  //
  userUID: String = "";
  public appID: string = "30825a8f1e1e2ae";
  public apiKey: string = "f5e7be05ded98deebb08ab22201241f98b3cf249";
  public appRegion: string = "us";

  //
  superHero1 = "https://data-us.cometchat.io/assets/images/avatars/ironman.png";
  superHero2 =
    "https://data-us.cometchat.io/assets/images/avatars/captainamerica.png";
  superHero3 =
    "https://data-us.cometchat.io/assets/images/avatars/spiderman.png";
  superHero4 =
    "https://data-us.cometchat.io/assets/images/avatars/wolverine.png";
  superHero5 = "https://data-us.cometchat.io/assets/images/avatars/cyclops.png";


  // form
  myFormName: FormGroup;
  constructor(private router: Router, private readonly formBuilder: FormBuilder) {}

  onLoginError: boolean = false;
  errorMsg: string = "";

  ngOnInit() {
    this.userInput = 'superhero1'
    // this.createForm();
    console.log('kitchen sink app loaded');
    //Create User
    // let  user = new CometChat.User('testing');
    // user.setName('Sohail');
    // CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
    //   user => {
    //       console.log("user created", user);
    //   },error => {
    //       console.log("error", error);
    //   }
    // )

    // method init
    // var appID = "30825a8f1e1e2ae";
    // var region = "us";
    // var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
    // CometChat.init(appID, appSetting).then(
    //   () => {
    //     console.log("Initialization completed successfully");
    //     // You can now call login function.
    //   },
    //   error => {
    //     console.log("Initialization failed with error:", error);
    //     // Check the reason for error and take appropriate action.
    //   }
    // );
  }
  // createForm(): void {
  //   this.myFormName = this.formBuilder.group(
  //     {
  //       userInput: ['']
  //     },
  //   );
  // }




  /**
   * Get User info by using the UID for logging a user in
   * @param {String} UID
   */
  login() {
    // var UID = "SUPERHERO1";
    // var userUID = "";
    var apiKey = "f5e7be05ded98deebb08ab22201241f98b3cf249";

    CometChat.login(this.userUID, apiKey).then(
      user => {
        console.log("Login Successful:", { user });
        this.router.navigate(["/Home"]);
      },
      error => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
  onLogin(UID) {
    CometChat.login(UID, COMETCHAT_CONSTANTS.AUTH_KEY).then(
      (user) => {
        console.log("Login Successful:", { user });
        this.router.navigate(["/Home"]);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
        this.onLoginError = true;
        this.errorMsg = error.message;
      }
    );
  }
}

