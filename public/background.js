const config = {
    twitchAPI: 'haeyonp05j4wiphav3eppivtdsvlyoq',
}

const db = openDatabase('streamvader', '1.0', 'StreamVader', 2 * 1024 * 1024);

const lists = {
    sync: [],
    streamers: []
}

chrome.runtime.onInstalled.addListener(async () => {
    console.log('onInstalled....');

    await transaction(function (tx) {
        tx.executeSql('CREATE TABLE sync (id INT PRIMARY KEY, type, username)');
        tx.executeSql('CREATE TABLE streamers (id INT PRIMARY KEY, type, username, sync)');
    });

    await updateSync()
});

chrome.runtime.onStartup.addListener(async () => {
    console.log('onStartup....');
    await updateSync()
})

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

const transaction = (callback) => {
    return new Promise(((resolve, reject) => {
        const transaction = db.transaction(callback);

        console.log(transaction, db.transaction)

        transaction.oncomplete = resolve
        transaction.onerror = reject
    }))
}

const updateSync = async () => {
    await transaction(function (tx) {
        tx.executeSql('SELECT * FROM sync', [], function (tx, results) {
            lists.sync = results.rows
        });
    })

    await updateFollowers()
}

const twitchHandle = async (list) => {
    const url = `https://api.twitch.tv/helix/users?login=${list.username}`
    const profile = await fetch(url, {
        headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': config.twitchAPI,
        },
    })

    console.log(profile)
}

const goodgameHandle = async () => {

}

const wasdHandle = async () => {

}

const handlers = {
    twitch: twitchHandle,
    goodgame: goodgameHandle,
    wasd: wasdHandle,
}

const updateFollowers = async () => {
    console.log('lists', lists)
    for (const list of lists.sync) {
        if (handlers.hasOwnProperty(list.type)) {
            handlers[list.type](list)
        }
    }
}

const addSync = async (type, username) => {
    await transaction(function(tx){
        tx.executeSql('INSERT INTO sync(type, username) VALUES(?, ?)', [type, username]);
    });

    await updateSync()
    await updateFollowers()
}

const getList = () => lists

setInterval(updateFollowers, 60000)

window.streamVader = {
    addSync,
    getList,
}
