var Slot = require('slotFramework');

function run(request,
             callback) {

    var data = [];
    for(x=0; x<10; x++){
        var obj = new Object();
        obj.name = "Jhon " + x;
        obj.lastName = "Doe";
        obj.birhtD = (new Date()).getTime();

        data[x] = obj;
    }

    callback(data /*<<== "data to be saved on session"*/);
}

module.exports.run = run;