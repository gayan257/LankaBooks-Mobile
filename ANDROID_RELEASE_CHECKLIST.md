# Android Release Checklist

## Before building
- Confirm app is stable on Android device/emulator
- Verify Firebase config is set
- Confirm package name is correct: com.lankabooks.app
- Set versionCode and versionName in app config
- Ensure app icon and splash screen are ready

## Build steps
1. Install dependencies
   npm install
2. Install Expo EAS CLI
   npm install -g eas-cli
3. Login to Expo account
   eas login
4. Configure app
   eas build:configure
5. Build Android app bundle
   eas build -p android --profile production

## After build
- Download the AAB file
- Upload to Google Play Console
- Add screenshots and descriptions
- Fill app details and privacy policy
- Submit for review

## Release notes
- Add release notes for the first version
- Mention new features: reading, publishing, purchasing, and discovery
