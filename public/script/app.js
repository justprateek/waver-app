"use strict";

console.log("app is running");

var count = 0;
var addOne = function addOne() {
    count += 1;
    console.log("clicked add", count);
    renderCounterApp();
    return;
};
var subOne = function subOne() {
    count--;
    renderCounterApp();
    return;
};
var reset = function reset() {

    count = 0;
    renderCounterApp();
    return;
};

var username = 'Prateek Mishra';

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            username
        ),
        React.createElement(
            "h2",
            null,
            "Hii i am starting with react"
        ),
        React.createElement(
            "h3",
            null,
            "this is mee checking out jsx"
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: subOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        ),
        React.createElement(
            "h3",
            null,
            "the number of total counts is: ",
            count
        ),
        React.createElement(
            "h3",
            null,
            "just checking"
        )
    );
    var address = document.getElementById('app');
    ReactDOM.render(template, address);
};

renderCounterApp();
