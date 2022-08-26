import { Component, OnInit } from '@angular/core';
import {
  BarcodeFormat,
  BarcodeScanner,
  CameraDirection,
  ScanResult,
} from '@capacitor-community/barcode-scanner';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  result: ScanResult;
  scanning = false;
  constructor() {}
  ngOnInit() {
    console.log('checkin for perms');
    if (!this.checkPermission()) {
      console.log('no permissions granted');
      return;
    }
    console.log('granted!');
    console.log(navigator.mediaDevices);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'environment' }, audio: false })
        .then((stream) => {
          const vidElement = document.querySelector('video');
          vidElement.srcObject = stream;
          vidElement.setAttribute('autoplay', '');
          vidElement.setAttribute('muted', '');
          vidElement.setAttribute('playsinline', '');
          //video.src = window.URL.createObjectURL(stream);
          vidElement.play();
        });
    }
  }

  async startScan() {
    console.log(' scan starting!');
    const options = {
      cameraDirection: CameraDirection.BACK,
      format: BarcodeFormat.ALL,
    };
    const callback = (res, err) => {
      if (err) {
        console.log(err);
        return;
      }
      this.result = res;
      console.log(this.result);
    };
    BarcodeScanner.start(options, callback);
    // this.scanning = true;
  }

  async stopScan() {
    BarcodeScanner.stop();
  }
  async checkPermission() {
    let status = await Camera.checkPermissions();
    // console.log(status);
    if (status.camera !== 'granted') {
      Camera.requestPermissions({ permissions: ['camera'] });
      status = await Camera.checkPermissions();
    }
    return status.camera === 'granted';
  }
}
