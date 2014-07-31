/**
 * Created using Slot Framework
 * Object model that represents the main Slot
 */
function main() {
    this.userName = "";
    this.userNumber = "";
}
main.create = function() { return new main(); }
main.prototype.layout = function() { return page.layouts["main"]; }
main.prototype.bind = function(json) {
    return this;
}
main.prototype.onPreRender = function() {
    return this;
}