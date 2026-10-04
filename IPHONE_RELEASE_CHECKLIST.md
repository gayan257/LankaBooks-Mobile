# iPhone Release Checklist

## Before building
- Enroll in Apple Developer Program
- Create app record in App Store Connect
- Generate app signing keys
- Confirm bundle identifier: com.lankabooks.app
- Prepare screenshots at recommended sizes

## Build steps
1. Install dependencies
   npm install
2. Install EAS CLI
   npm install -g eas-cli
3. Login to Expo
   eas login
4. Configure app
   eas build:configure
5. Build iOS app
   eas build -p ios --profile production

## After build
- Upload build with Xcode or Transporter
- Add screenshots and app metadata
- Attach privacy policy and support URL
- Submit for App Review

## Release notes
- Include app description and bug fixes
- Add keywords for discoverability
