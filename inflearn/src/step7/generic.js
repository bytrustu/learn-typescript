function logText(text) {
    console.log(text);
    return text;
}
var result = logText('하이');
result.split('');
var isSuccess = logText(false);
isSuccess.valueOf();
var email = [
    { value: 'naver.com', selected: true },
    { value: 'naver.com', selected: true },
    { value: 'naver.com', selected: true },
    { value: 'naver.com', selected: true },
];
var numberOfProduct = [
    { value: 1, selected: true },
    { value: 1, selected: true },
    { value: 1, selected: true },
    { value: 1, selected: true },
];
var logTextLength = function (text) {
    console.log(text.length);
    return text;
};
logTextLength('a');
logTextLength({ length: 10 });
