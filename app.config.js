module.exports = {
  expo: {
    name: 'LankaBooks',
    slug: 'lankabooks-mobile',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#F6F1EA'
    },
    assetBundlePatterns: ['**/*'],
    android: {
      package: 'com.lankabooks.app',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#F6F1EA'
      }
    },
    ios: {
      bundleIdentifier: 'com.lankabooks.app',
      supportsTablet: true
    },
    web: {
      bundler: 'metro'
    },
    extra: {
      eas: {
        projectId: 'lankabooks-mobile-project-id'
      }
    }
  }
};
