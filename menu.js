{
    console.log('my script working anot');
    const mobileBtn = document.getElementById('mobile-open');
    const nav = document.querySelector('nav');
    const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click',() => {
            nav.style.right = "0";
            console.log('click open menu');
            mobileBtn.style.opacity="0";
        })

        mobileBtnExit.addEventListener('click',() => {
            nav.style.right = "-22rem";
            mobileBtn.style.opacity="1";
        })
}