// クリックイベントの登録
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

// コンテキストメニューの登録
chrome.runtime.onInstalled.addListener((details) => {

    let ids = [
        "normal",
        "markdown",
        "pukiwiki",
        "html"
    ];

    for (let i = 0; i < ids.length; i++) {
        chrome.contextMenus.create({
            id: ids[i],
            title: ids[i],
            contexts: ["all"],
        });
    };
});
