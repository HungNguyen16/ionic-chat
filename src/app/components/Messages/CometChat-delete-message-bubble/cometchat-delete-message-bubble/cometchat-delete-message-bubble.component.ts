import { Component, Input, OnInit } from "@angular/core";
import { CometChat } from "@cometchat-pro/chat";
import { logger, getSentAtTime } from './../../../../../assets/utils/common';
import { COMETCHAT_CONSTANTS } from './../../../../../assets/utils/messageConstants';
import * as enums from "./../../../../../assets/utils/enums";
@Component({
  selector: "cometchat-delete-message-bubble",
  templateUrl: "./cometchat-delete-message-bubble.component.html",
  styleUrls: ["./cometchat-delete-message-bubble.component.css"],
})
export class CometChatDeleteMessageBubbleComponent implements OnInit {
  @Input() messageDetails = null;

  @Input() loggedInUser = null;

  loggedInUserDeletedThisMessage: boolean = false;

  time;

  GROUP: String = CometChat.RECEIVER_TYPE.GROUP;
  THIS_MESSAGE_DELETED: String = COMETCHAT_CONSTANTS.THIS_MESSAGE_DELETED;
  YOU_DELETED_THIS_MESSAGE: String =
    COMETCHAT_CONSTANTS.YOU_DELETED_THIS_MESSAGE;

  constructor() {}

  ngOnInit() {
    try {
      if (this.messageDetails.deletedBy === this.loggedInUser.uid) {
        this.loggedInUserDeletedThisMessage = true;
      }
      this.time = getSentAtTime(this.messageDetails);
    } catch (error) {
      logger(error);
    }
  }
}
