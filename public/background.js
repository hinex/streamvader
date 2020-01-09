// create alarm for watchdog and fresh on installed/updated, and start fetch data
chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled....');
});

// fetch and save data when chrome restarted, alarm will continue running when chrome is restarted
chrome.runtime.onStartup.addListener(() => {
    console.log('onStartup....');
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        if (!tab.url) return
        console.log('onActivated', activeInfo, tab);


        chrome.windows.get(tab.windowId, function(win){
            console.log(win); // THIS IS THE WINDOW OBJECT
        });
    });
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (!tab.url) return
    if (changeInfo.status !== 'complete') return
    console.log('onUpdated', tabId, changeInfo, tab);

    chrome.windows.get(tab.windowId, function(win){
        console.log(win); // THIS IS THE WINDOW OBJECT
    });
});

