package com.floxy.cordovafirebase;

import android.util.Log;
import com.google.firebase.FirebaseApp;
import com.google.firebase.crashlytics.FirebaseCrashlytics;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class FirebaseCrashCustom extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        Log.d("", action);

        if (action.equals("crash")) {
                crashTest(callbackContext);
            return true;
        }

        return false;
    }

    public void crashTest(CallbackContext callbackContext) {
        FirebaseApp.initializeApp(this.cordova.getActivity());
        FirebaseCrashlytics firebaseCrashlytics = FirebaseCrashlytics.getInstance();
        firebaseCrashlytics.recordException(new Exception("MESSAGE"));

        callbackContext.success("Crash");
        System.exit(0);
    }
}
