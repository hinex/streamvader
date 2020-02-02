let wait = false

const checkUrl = (url) => {
    const parsed = url.split('/')

    const includes = [
        // 'vods',
        'channel',
    ]

    if (includes.includes(parsed[1])) return false
    return true
}

const init = (url, iterator = 0) => {
    if (checkUrl(url) || iterator === 4) return

    wait = true

    const button = document.querySelector('.player-in-window .on .play-btn')
    if (!button) return setTimeout(init.bind(null, url, iterator + 1), 200 + 100 * iterator)

    wait = false
    if (!button || button.hasAttribute('data-handled')) return

    button.setAttribute('data-handled', '1')

    button.onclick = (e) => {
        e.preventDefault()
        e.stopPropagation();

        if (!document.pictureInPictureElement) {
            document.querySelector('#_video video').requestPictureInPicture()
        } else {
            document.exitPictureInPicture()
        }
    }
}

let url = window.location.pathname

setInterval(() => {
    if (url === window.location.pathname || wait) return
    url = window.location.pathname

    init(url)
}, 200)

init(url)

