"use strict";

console.log("app is running");
var address = document.getElementById('app');

var app = {
    title: "this is the title",
    subtitle: "this line is the subtitle ok",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log('fuck you');
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        jsxRender();
    }
};

var removeAll = function removeAll(e) {
    e.preventDefault();
    console.log('fuck everyone');
    app.options = [];
    jsxRender();
};
var whatToDo = function whatToDo(e) {
    var num = Math.floor(Math.random() * app.options.length);
    var option = app.options[num];

    alert(option);
};

var jsxRender = function jsxRender() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'here are the options' : 'there are no options you dum dum'
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: whatToDo },
            "help me decide"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "remove all"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "add option"
            )
        )
    );
    ReactDOM.render(template, address);
};
jsxRender();
