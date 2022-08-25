import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}
  async startScan() {
    // BarcodeScanner.hideBackground(); // make background of WebView transparent
    console.log(BarcodeScanner);
    const status = await BarcodeScanner.checkPermissions();
    console.log('status:', status);
    if (status !== 'granted') {
      console.log(
        'some problem with the camera\n',
        'If you want to grant permission for using your camera, enable it in the app settings.'
      );
      const req = await BarcodeScanner.requestPermissions();
      console.log('request:', req);
    } else if (status === 'granted') {
      console.log('camera permission granted!');
    }

    const result = await BarcodeScanner.start(); // start scanning and wait for a result

    // if the result has content
    if (result) {
      console.log(result); // log the raw scanned content
    }
  }
}
