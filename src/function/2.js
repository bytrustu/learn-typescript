function getParam(index) {
    var params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
String.prototype.getParam = getParam;
console.log('asdf, 1234, ok'.getParam(1));
