import { Component, OnInit } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {
  public meetConfig: any;
  public signature: any;
  constructor() {
    this.handleJoinMetting();
  }

  handleJoinMetting() {
    this.Setcongf(81888702934);
  }

  Setcongf(val: any) {
    this.meetConfig = {
      apiKey: 'IcL6-LMxTx-QhTFw2MMkIw',
      apiSecret: 'fqBx1oYfCtGrE9IJQwpG5bNeRo3BomLQZ5vq',
      meetingNumber: val,
      userName: 'LamNV',
      password: '2uUYjD',
      leaveUrl: 'http://www.zoom.us',
      role: 1
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: (res: { result: any; }) => {
        return res;
      }
    })
    ZoomMtg.init({
      debug: false, //optional
      leaveUrl: 'http://www.zoom.us', //required
      //  webEndpoint: 'PSO web domain', // PSO option
      showMeetingHeader: true, //option
      disableInvite: false, //optional
      disableCallOut: false, //optional
      disableRecord: false, //optional
      disableJoinAudio: false, //optional
      audioPanelAlwaysOpen: true, //optional
      showPureSharingContent: true, //optional
      isSupportAV: true, //optional,
      isSupportChat: true, //optional,
      isSupportQA: true, //optional,
      isSupportPolling: true, //optional
      isSupportBreakout: true, //optional
      isSupportCC: true, //optional,
      screenShare: true, //optional,
      rwcBackup: '', //optional,
      videoDrag: true, //optional,
      sharingMode: 'both', //optional,
      videoHeader: true, //optional,
      isLockBottom: true, // optional,
      isSupportNonverbal: true, // optional,
      isShowJoiningErrorDialog: true, // optional,
      inviteUrlFormat: '', // optional
      meetingInfo: [ // optional
        'topic',
        'host',
        'mn',
        'pwd',
        'telPwd',
        'invite',
        'participant',
        'dc',
        'enctype',
        'report'
      ],
      disableVoIP: false, // optional
      disableReport: false, // optional
      success: (value: any) => {
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: 'LamNV',
          userEmail: 'lovenco0410@gmail.com',
          passWord: '2uUYjD',
          apiKey: this.meetConfig.apiKey,
          signature: this.signature,
          success: function (res: any) {
            console.log("🚀 ~ file: zoom.component.ts ~ line 43 ~ ZoomComponent ~ Setcongf ~ this.signature", this.signature)

            console.log(res)
          },
          error: function (res: any) { console.log(res) }
        });
        console.log("🚀 ~ file: room.component.ts ~ line 96 ~ RoomComponent ~ Setcongf ~ this.signature", this.signature)
      }
    });
  }

}
