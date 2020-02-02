let wait = false

const checkUrl = (url) => {
    const parsed = url.split('/')

    const skip = [
        'clips',
        'directory',
        'friends',
        'subscriptions',
        'inventory',
        'payments',
        'settings',
    ]

    const skipSecond = [
        'videos',
        'followers',
    ]

    if (parsed.length === 3 && skipSecond.includes(parsed[2])) return true
    if (parsed.length > 1 && skip.includes(parsed[1])) return true

    return false
}

const init = (url, iterator = 0) => {
    if (checkUrl(url) || iterator === 4) return

    wait = true
    const element = document.querySelector('.player-controls__right-control-group')

    if (!element) return setTimeout(init.bind(null, url, iterator + 1), 200 + 150 * iterator)

    wait = false

    if (document.getElementById('pnp-button')) return

    const div = document.createElement('div')
    div.id = 'pnp-button'
    div.classList.add('tw-inline-flex')

    const button = document.createElement('button')
    button.classList.add('tw-core-button')
    button.classList.add('tw-button-icon')

    button.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3111 18.2L14.5556 19.4444L19 15L14.5556 10.5556L13.3111 11.8L15.6222 14.1111H7V15.8889H15.6222L13.3111 18.2ZM21.2222 7H8.77778C7.8 7 7 7.8 7 8.77778V12.3333H8.77778V8.77778H21.2222V21.2222H8.77778V17.6667H7V21.2222C7 22.2 7.8 23 8.77778 23H21.2222C22.2 23 23 22.2 23 21.2222V8.77778C23 7.8 22.2 7 21.2222 7Z" fill="white"/>
</svg>`

    const video = document.querySelector('video')

    const disableButton = () => {
        button.setAttribute('disabled', '1')
        button.style = 'opacity: 0.6'
    }

    video.addEventListener('emptied', disableButton)

    video.addEventListener('loadeddata', function () {
        button.style = 'opacity: 1'
        button.removeAttribute('disabled')
    }, false)

    if (video.readyState !== 4) {
        disableButton()
    }

    button.onclick = () => {
        if (!document.pictureInPictureElement) {
            video.requestPictureInPicture()
        } else {
            document.exitPictureInPicture()
        }

        button.blur()
    }

    div.appendChild(button)
    element.prepend(div)
}

let url = window.location.pathname

setInterval(() => {
    if (url === window.location.pathname || wait) return
    url = window.location.pathname

    init(url)
}, 200)

init(url)
