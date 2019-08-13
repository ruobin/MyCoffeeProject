
# react-native-toast-android-library

## Getting started

`$ npm install react-native-toast-android-library --save`

### Mostly automatic installation

`$ react-native link react-native-toast-android-library`

### Manual installation



#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNToastExamplePackage;` to the imports at the top of the file
  - Add `new RNToastExamplePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-toast-android-library'
  	project(':react-native-toast-android-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-toast-android-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-toast-android-library')
  	```
