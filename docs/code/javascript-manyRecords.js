/**
 * Created by cecheveria on 4/6/14.
 */

var Slot = require('slotFramework');

/**
 * Function run must be used to implements your REST Service logic,then when
 * you are ready, you must execute the function callback. The function
 * callback is passed as a parameter when the mainController invoke the
 * run(callback) method, and you need to pass the data content to be
 * rendered.
 */
function run(request,
             callback) {
    /**
     * TODO:
     *  1.  Do whatever you want to extract data, you must return an Object, it
     *      can be an Array or a standar Object
     */
    var data = [];
    for(x=0; x<10; x++){
        var obj = new Object();
        obj.name = "Jhon " + x;
        obj.lastName = "Doe";
        obj.birhtD = (new Date()).getTime();

        data[x] = obj;
    }

    /**
     * Call the callback function when your data have been filled on slot
     */
    callback(data /*<<== "data to be saved on session"*/);
}

module.exports.run = run;
