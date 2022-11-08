cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebase-crashlytics.FirebaseCrashlytics",
      "file": "plugins/cordova-plugin-firebase-crashlytics/www/crashlytics.js",
      "pluginId": "cordova-plugin-firebase-crashlytics",
      "clobbers": [
        "FirebaseCrashlytics"
      ]
    },
    {
      "id": "cordova-plugin-firebase-performance.FirebasePerformance",
      "file": "plugins/cordova-plugin-firebase-performance/www/FirebasePerformance.js",
      "pluginId": "cordova-plugin-firebase-performance",
      "clobbers": [
        "FirebasePerformance"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-firebase-crashlytics": "1.2.0",
    "cordova-plugin-firebase-performance": "1.0.0"
  };
});