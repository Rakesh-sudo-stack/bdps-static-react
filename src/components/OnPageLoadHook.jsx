import { useEffect } from "react";

const OnPageLoadHook = () => {
    // useEffect(() => {
        window.scrollTo(0, 0);
        Array.from(document.querySelectorAll('.responsive-ul')).forEach((element) => {
            element.classList.remove('active');
        })
        document.querySelector('nav').classList.remove('nav-active');
        let menuclass = document.getElementById('menu-ico');
        menuclass.className = "fa-solid fa-bars";
    // })
    return;
}

export default OnPageLoadHook;