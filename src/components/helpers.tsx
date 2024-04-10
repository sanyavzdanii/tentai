export function hiddenScroll(flag: boolean) {
    if(flag) {
        document.body.classList.add('hidden-scroll');
        document.getElementsByTagName( 'html' )[0].classList.add('hidden-scroll');
    } else {
        document.body.classList.remove('hidden-scroll');
        document.getElementsByTagName( 'html' )[0].classList.remove('hidden-scroll');
    }
}