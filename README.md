# rn-bootsplash-rn-0.76.x-build-issues-repro

Reproduction of iOS build issues while migrating a React Native app to 0.76.X with the New Architecture.

See the discussion here : https://github.com/zoontek/react-native-bootsplash/discussions/657

```sh
yarn install && (cd ios && pod install)
yarn react-native start --reset-cache --verbose
yarn react-native run-ios --simulator "iPhone 15"
```
