# QA Checklist

## Functional checks
- App launches without crashing
- Login works correctly
- Signup works correctly
- Home screen renders book cards
- Book detail screen opens correctly
- Library screen loads saved books
- Publish form validates required fields
- Firebase auth connects successfully when configuration is set
- Book submissions create records when Firebase is configured

## UI checks
- Text is readable on all screens
- Buttons are aligned and tappable
- Input fields are styled correctly
- Colors match brand identity
- Screens work on different device sizes

## Performance checks
- App responds quickly on launch
- Scroll is smooth
- Images and cards render without lag
- No memory-heavy issues during navigation

## Security checks
- Firebase security rules are configured
- Sensitive values are stored in .env and not committed
- No API keys are exposed in public files

## Pre-release checks
- All warnings are reviewed
- Test on Android and iPhone simulators
- Test with real Firebase credentials
- Confirm store metadata is ready
- Verify app icon and splash are loaded
