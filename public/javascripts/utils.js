/// <reference path="_references.js" />

var app = app || {};

app.utils = (function () {
    "use strict";
    
    function logError(error) {
        if (console && console.log)
            console.log("Det oppsto en feil: " + error);
    }

    return {
        logError: logError
    };
})();
