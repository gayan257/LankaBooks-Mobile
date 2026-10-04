# LankaBooks Mobile

A mobile app for Sinhala readers, authors, and book buyers. This repo is the initial step in building the MVP for a Wattpad-like reading and publishing platform focused on Sri Lankan books.

## Stack
- React Native + Expo
- TypeScript
- Firebase Authentication + Firestore
- Stripe / PayHere integration (planned)

## Current status
- Step 1: Project setup completed
- Step 2: Auth flow + app navigation completed
- Step 3: Firebase project configuration prepared

## Firebase setup
1. Create a Firebase project at https://console.firebase.google.com
2. Add an Android and iOS app to the project
3. Get your Firebase web configuration values
4. Copy `.env.example` to `.env`
5. Add the values below

Example `.env`:
```
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Run locally
1. Install dependencies:
   npm install
2. Start Expo:
   npm start
3. Run on a device or emulator:
   - Android: npm run android
   - iOS: npm run ios

## Features in MVP
- Browse books
- Read books
- Publish/upload books
- Buy books
- Search and filter
- User profile

## Folder structure
- App.tsx - root app entry
- src/screens - app screens
- src/navigation - navigation setup
- src/config/firebaseConfig.ts - Firebase initialization
- src/services - auth and book services
