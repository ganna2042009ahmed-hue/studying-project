let style = document.createElement("style");

style.textContent = `
    html.easy-background,
    html.easy-background body {
        background-color: lightblue !important;
    }

    html.easy-color body,
    html.easy-color body * {
        color: blue !important;
    }

    html.easy-size body,
    html.easy-size body * {
        font-size: 22px !important;
    }
`;

document.documentElement.appendChild(style);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action === "background") {
        document.documentElement.classList.toggle("easy-background");
        sendResponse("Background changed");
    }

    if (request.action === "color") {
        document.documentElement.classList.toggle("easy-color");
        sendResponse("Text color changed");
    }

    if (request.action === "size") {
        document.documentElement.classList.toggle("easy-size");
        sendResponse("Text size changed");
    }

    if (request.action === "reset") {
        document.documentElement.classList.remove("easy-background");
        document.documentElement.classList.remove("easy-color");
        document.documentElement.classList.remove("easy-size");
        sendResponse("Website reset");
    }

});


