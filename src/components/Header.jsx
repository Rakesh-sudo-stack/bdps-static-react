import {Link} from 'react-router-dom';

import onPageLoadHook from './OnPageLoadHook';

const Header = (props) => {
    const toggleNav = () => {
        document.querySelector('nav').classList.toggle('nav-active');
        let menuclass = document.getElementById('menu-ico');
        if (menuclass.className == "fa-solid fa-bars") {
        menuclass.className = "fa-solid fa-xmark"
        } else { menuclass.className = "fa-solid fa-bars" }
    }
    return (
        <>
            <header>
                <Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/"><figure></figure></Link>
                <div className="menu-btn" onClick={toggleNav}><i id="menu-ico" className="fa-solid fa-bars"></i></div>
                <ul>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/" className="col-change"><i className="fa fa-graduation-cap"></i>Registration for Class XI 2022-2023</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/" className="col-change"><i className="fa fa-graduation-cap"></i>Vacancy-2022</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/" className="col-change"><i className="fa fa-user"></i>Registration for Nursery to Class IX</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/" className="col-change"><i className="fa fa-graduation-cap"></i>Topper's List</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/" className="col-change"><i className="fa fa-graduation-cap"></i>Sawan Mohatsava</Link></li>
                </ul>
            </header>
            <marquee className="movable-notice" behavior="scroll" direction="">
                <ul>
                    <li className="col-change">Registration for Nur - IX for 2023-2024 will start from 15/12/2022</li>
                </ul>
            </marquee>
        </>
    )
}

export default Header;