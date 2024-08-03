{
    chrome.runtime.onInstalled.addListener((details) => {

        chrome.contextMenus.create({
            type: "normal",
            id: "normal",
            title: "normal",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            type: "normal",
            id: "markdown",
            title: "markdown",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            type: "normal",
            id: "pukiwiki",
            title: "pukiwiki",
            contexts: ["all"],
        });

        chrome.contextMenus.create({
            type: "normal",
            id: "html",
            title: "html",
            contexts: ["all"],
        });

    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [info.menuItemId],
            function: (param) => {

                let elements = document.querySelectorAll("a");
                let buff = "";

                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].href !== undefined
                        && elements[i].href.startsWith("http")) {

                        let title = ((elements[i].textContent == "") ? "untitled" : elements[i].textContent);
                        let url = elements[i].href;

                        if (param == "normal") {
                            buff += title + "\r\n" + url + "\r\n\r\n";
                        } else if (param == "markdown") {
                            buff += "[" + title + "](" + url + ")\r\n";
                        } else if (param == "pukiwiki") {
                            buff += "[[" + title + ":" + url + "]]\r\n";
                        } else if (param == "html") {
                            buff += "<a href=\"" + url + "\">" + title + "</a>\r\n";
                        }
                    }
                }

                navigator.clipboard.writeText(buff);
            },
        });
    });
}
