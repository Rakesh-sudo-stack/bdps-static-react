import { Link } from "react-router-dom";
import pdf from './download-bundles/Pdf';
import onPageLoadHook from "./OnPageLoadHook";

const Navbar = (props) => {
    function showDropDown(e){
        if(window.innerWidth <= 1237){
            if(e.target.classList.contains('dropdown-nav-li')){
                e.target.querySelector('ul').classList.toggle("active");
            }
        }
    }
    return(
        <nav id='navbar'>
        <ul>
            <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to='/'>home</Link></li>
            <li className="dropdown-nav-li" onClick={showDropDown}>
                about us<i className="fa fa-angle-down"></i>
                <ul className='responsive-ul'>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to='aims'>Aims & Objectives</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="constitution">Our Constitution</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="director-msg">Director's Message</Link></li>
                    <li><a href={pdf[9].link}>School Managing Committee</a></li>
                </ul>
            </li>
            <li className="dropdown-nav-li" onClick={showDropDown}>
                school info<i className="fa fa-angle-down"></i>
                <ul className='responsive-ul'>
                    <li><a href={pdf[8].link}>school profile</a></li>
                    <li><a href={pdf[2].link}>affidavit/declaration</a></li>
                </ul>
            </li>
            <li className="dropdown-nav-li" onClick={showDropDown}>
                academics<i className="fa fa-angle-down"></i>
                <ul className='responsive-ul'>
                    <li><a href={pdf[0].link}>academic calender</a></li>
                    <li><a href={pdf[10].link}>teachers list</a></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">book list</Link></li>
                    <li><a href={pdf[6].link}>academic achievements</a></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">code of conduct for students</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/advice-to-parents">advice to parents</Link></li>
                    <li><a href={pdf[1].link}>activities&competitions</a></li>
                    <li><a href={pdf[3].link}>annual sports meet</a></li>
                    <li><a href={pdf[4].link}>exam schedule</a></li>
                    <li><a href={pdf[7].link}>school uniform</a></li>
                    <li><a href={pdf[5].link}>holiday list</a></li>
                </ul>
            </li>
            <li className="dropdown-nav-li" onClick={showDropDown}>
                admission<i className="fa fa-angle-down"></i>
                <ul className='responsive-ul'>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">admission enquiry</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">admission guideline</Link></li>
                </ul>
            </li>
            <li className="dropdown-nav-li" onClick={showDropDown}>
                gallery<i className="fa fa-angle-down"></i>
                <ul className='responsive-ul'>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">photo gallery</Link></li>
                    <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">video gallery</Link></li>
                </ul>
            </li>
            <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to='/downloads'>downloads</Link></li>
            <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">transfer certificate</Link></li>
            <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">alumini</Link></li>
            <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/">contact us</Link></li>
            <li className="highlight"><Link onClick={()=>{
                                        window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=900042');
                                }} to="/">pay fees online</Link></li>
            <li style={{background:'gray'}}><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to="/admin/login">login</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;