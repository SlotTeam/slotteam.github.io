var Slot = require('slotFramework');

function run(request,
             callback) {

    var data = new Object();
    data.name = "Jhon";
    data.lastName = "Doe";
    data.birhtD = (new Date()).getTime();

    callback(data /*<<== "data to be saved on session"*/);
}

module.exports.run = run;
