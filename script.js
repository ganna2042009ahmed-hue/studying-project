function changeWebsite(action) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        chrome.tabs.sendMessage(tabs[0].id, {action: action}, function(response) {

            if (chrome.runtime.lastError) {
                document.getElementById("message").textContent = "Please refresh the website first.";
                return;
            }

            document.getElementById("message").textContent = response;

        });

    });

}

document.getElementById("background").addEventListener("click", function() {
    changeWebsite("background");
});

document.getElementById("color").addEventListener("click", function() {
    changeWebsite("color");
});

document.getElementById("size").addEventListener("click", function() {
    changeWebsite("size");
});

document.getElementById("reset").addEventListener("click", function() {
    changeWebsite("reset");
});