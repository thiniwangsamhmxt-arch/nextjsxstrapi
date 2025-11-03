# Social Media CMS - Mobile App

Expo React Native mobile application for managing social media content.

## Features

- 📱 iOS and Android support
- 📝 Content creation and editing
- 📅 Post scheduling
- 🔔 Push notifications
- 📊 Analytics viewing
- 💾 Offline draft support

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Run on iOS simulator
yarn ios

# Run on Android emulator
yarn android

# Run on web
yarn web
```

## Build for Production

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Environment Variables

Create `.env` file:

```env
EXPO_PUBLIC_API_URL=http://localhost:1337
EXPO_PUBLIC_WEB_URL=http://localhost:3000
```

## Project Structure

```
app/
├── _layout.tsx      # Root layout
├── index.tsx        # Home screen
├── (tabs)/          # Tab navigation
└── [...]            # Dynamic routes

components/          # Reusable components
lib/                # Utilities
hooks/              # Custom hooks
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://expo.github.io/router/docs/)
- [React Native](https://reactnative.dev/)
