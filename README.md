# barcode-scanner-test for iOS with capacitor-community/barcode-scanner (ml-kit version)

## installation
`npm i`

`npm run build` / `ionic build`

`npx cap sync` (first time, then `npx cap copy ios`)


make sure `info.plist has camera permissions

## running
`npx cap run ios / `npx cap open ios`  and run from xcode

## notes
video stream is not shown and button must clicked again in order for the code to be shown in screen, otherwise, you can see the code `logged in console`
