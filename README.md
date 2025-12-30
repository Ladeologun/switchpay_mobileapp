# SwitchPay Mobile App

SwitchPay is a modern mobile application built with [Expo](https://expo.dev/) and [React Navigation](https://reactnavigation.org/). It features a tab-based navigation structure, custom UI components, and support for both iOS and Android.

---

## Features

- Bottom tab navigation (Home, Card, Settings, Explore)
- Custom icons and haptic feedback on tab press
- Modular navigation structure (stack navigators for each tab)
- Poppins font integration

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- For iOS: Xcode (for Simulator)
- For Android: Android Studio (for Emulator)

---

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Ladeologun/switchpay_mobileapp.git
   cd SwitchPay
   ```

2. **Install dependencies:**

   ```sh
   yarn install
   # or
   npm install
   ```

3. **Start the Expo development server:**

   ```sh
   yarn start
   # or
   npm run start
   ```

   This will open the Expo Dev Tools in your browser.

4. **Run the app:**

   - **iOS Simulator:** Press `i` in the terminal or run `npm run ios`
   - **Android Emulator:** Press `a` in the terminal or run `npm run android`
   - **Web Browser:** Press `w` in the terminal or run `npm run web`

---

## Project Structure

```
SwitchPay/
├── src/
│   ├── components/         # Reusable UI components
│   ├── constants/          # Color and theme constants
│   ├── navigation/         # Navigation stacks and tab navigator
│   ├── utils/              # Utility functions (e.g., fonts)
│   └── ...                 # Other feature folders
├── assets/                 # Fonts and images
├── App.tsx                 # Entry point
└── ...
```

---

## Customization

- **Fonts:**  
  Poppins fonts are included and loaded automatically via `src/utils/fontsmap.ts`.
- **Colors:**  
  Modify `src/constants/Colors.ts` to change the app’s color palette.
- **Navigation:**  
  Edit `src/navigation/mainTabs.tsx` and related stack files to customize navigation.

---

## Troubleshooting

- If you encounter dependency issues, try:
  ```sh
  rm -rf node_modules yarn.lock package-lock.json
  yarn install
  # or
  npm install
  ```
- Ensure you have the latest Expo CLI:
  ```sh
  npm install -g expo-cli
  ```
- For iOS, make sure Xcode and Command Line Tools are installed.
- For Android, ensure Android Studio and an emulator are set up.

---

## Resources

- [React Navigation documentation](https://reactnavigation.org/)
- [Expo documentation](https://docs.expo.dev/)
- Demo assets from [lucide.dev](https://lucide.dev/)

---

## License

[MIT](LICENSE)