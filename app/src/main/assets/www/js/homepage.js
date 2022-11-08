var btnCrash = document.getElementById("btnCrash")

btnCrash.addEventListener("click", function() {
    cordova.exec(function(success) {
        alert(success)
    }, function(fail) {
        alert(fail)
    }, "FirebaseCrashCustom", "crash", [])

})