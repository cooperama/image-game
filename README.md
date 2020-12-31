# The Image Game

## Installation Instructions

These instructions will help you get your computer setup with the correct development environment for working on this app and any other react native app that uses Expo

### Install Expo Globally

1. Check and make sure you have Node version 12 or later and update if you needed.

```
node -v
```

2. Install Expo globally on your machine

```
npm install -g expo-cli
```

### Installing IOS simulator (Mac Only) - Optional

1. Go to the App Store and install Xcode

2. Open Xcode and go to Preferences and click on the Locations tab. Make sure you have Command Line Tools selected.

### Installing Android Studio - Optional

1. Install Android Studio [here](https://developer.android.com/studio).

2. During installation click standard for the setup options.

3. If you are using macOS or Linux go to this [site](https://docs.expo.io/workflow/android-studio-emulator/) and follow the instructions to finish setting up Android Studio.

4. Go to this [site](https://docs.expo.io/workflow/android-studio-emulator/) and scroll down to Step 2 and follow the instructions to setup a virtual device.

### Cloning this repo and setup

1. Clone this repo in the terminal in a location of your choice using

```
git clone https://github.com/bclosson/The-Image-Game.git
```

and then use

```
git checkout <your branch>
```

2. Move to the directory TheImageGame and run

```
npm i
```

3. After the node packages are installed, you can run

```
npm start
```

or

```
expo start
```

to run the app. You will be given some options to run in a few different environments.

## Adding Card Content

Inside of TheImageGame directory is a file labeled card-content.json. This is were you can add any content for the cards of the game.
