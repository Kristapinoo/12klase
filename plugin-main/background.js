chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
        { urls: ["*://*.delfi.lv/*"]},
        ["blocking"]
)