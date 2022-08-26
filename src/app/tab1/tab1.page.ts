import { Component } from '@angular/core';
// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
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
    console.log('tryin to scan!');
    // console.log(BarcodeScanner);
    const status = await BarcodeScanner.checkPermissions();
    console.log('status:', status);
    if (status !== 'granted') {
      // console.log(
      //   'some problem with the camera\n',
      //   'If you want to grant permission for using your camera, enable it in the app settings.'
      // );
      // const req = await BarcodeScanner.requestPermissions();
      // console.log('request:', req);
    } else if (status === 'granted') {
      console.log('camera permission granted!');
    }

    const result = await BarcodeScanner.start(); // start scanning and wait for a result

    // if the result has content
    console.log('result?');
    console.log(result); // log the raw scanned content
    // if (result) {
    // }
  }
  // main branch
  // async startScan() {
  //   BarcodeScanner.hideBackground(); // make background of WebView transparent
  //   console.log('tryin to scan!');
  //   // console.log(BarcodeScanner);
  //   let status = await BarcodeScanner.checkPermission();
  //   console.log('status:', status);
  //   if (!status.granted) {
  //     // console.log(
  //     //   'some problem with the camera\n',
  //     //   'If you want to grant permission for using your camera, enable it in the app settings.'
  //     // );
  //     // const req = await BarcodeScanner.requestPermissions();
  //     status = await BarcodeScanner.checkPermission({ force: true });
  //     if (!status.granted) {
  //       console.error('no quiere');
  //       const oar = await BarcodeScanner.openAppSettings();
  //       console.log('request:', oar);
  //     }
  //   } else {
  //     console.log('camera permission granted!');
  //   }

  //   const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  //   // if the result has content
  //   console.log('result?');
  //   console.log(result); // log the raw scanned content
  //   // if (result) {
  //   // }
  // }
}
