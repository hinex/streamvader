const init = () => {
    const element = document.querySelector('ytd-watch-flexy .ytp-right-controls')

    if (!element) return setTimeout(init, 200)

    const button = document.createElement('button')
    button.classList.add('ytp-button')
    button.innerHTML = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M15.4944 22.3L16.9722 23.7778L22.25 18.5L16.9722 13.2222L15.4944 14.7L18.2389 17.4444H8V19.5556H18.2389L15.4944 22.3ZM24.8889 9H10.1111C8.95 9 8 9.95 8 11.1111V15.3333H10.1111V11.1111H24.8889V25.8889H10.1111V21.6667H8V25.8889C8 27.05 8.95 28 10.1111 28H24.8889C26.05 28 27 27.05 27 25.8889V11.1111C27 9.95 26.05 9 24.8889 9Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="6" y="7" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`
    button.onclick = () => {
        if (!document.pictureInPictureElement) {
            document.querySelector('video.html5-main-video').requestPictureInPicture()
        } else {
            document.exitPictureInPicture()
        }
    }

    element.prepend(button)
}

init()
