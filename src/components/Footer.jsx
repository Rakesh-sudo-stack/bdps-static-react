import { Link } from "react-router-dom";
import ExamSchedule from '../downloads/pdf/Exam Schedule.pdf';
import onPageLoadHook from "./OnPageLoadHook";

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className="footer-sections">
                    <div className="footer-section footer-section-1">
                        <h2>ABOUT US</h2>
                        <div className="content">
                            <p>B.D. Public School, Affiliated to CBSE, is run under the aegis of Budha Vikash Samiti. The zenith which the school has been able to reach is largely due to the untiring effort and devotion of Shri Sheo Bihari Roy whose services the school still enjoys as its Director. Some eminent educationists, like Dr. D.N. Mishra (Rtd. Prof., Patna University, Patna)..</p>
                            <Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to='aims' style={{color:'rgb(12, 201, 144)',fontWeight:600}} href="./pages/aims.php">Read More</Link>
                        </div>
                    </div>
                    <div className="footer-section footer-section-2">
                        <h2>QUICK LINKS</h2>
                        <div className="content">
                            <ul>
                                <li><Link onClick={()=>{
                                        onPageLoadHook()
                                    props.setProgress(15);
                                    setTimeout(()=>{props.setProgress(75)},200)
                                    setTimeout(()=>{props.setProgress(100)},500)
                                }} to='/aims'>About Us</Link></li>
                                <li><strong>Facility</strong></li>
                                <li><a href={ExamSchedule}>Exam Schedule</a></li>
                                <li><strong>Admission Enquiry</strong></li>
                                <li><strong>Contact Us</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section footer-section-3">
                        <h2>GALLERY</h2>
                        <div className="content">
                            <ul>
                                <li><strong>Photo Gallery</strong></li>
                                <li><strong>Video Gallery</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section footer-section-4">
                        <h2>SCHOOL TIMING</h2>
                        <div className="content">
                            <p>Mon-Fri 7:10 am to 1:20 pm <br />7:10 am to 10:30 pm</p>
                        </div>
                    </div>
                    <div className="footer-section footer-section-5">
                        <h2>CONTACT US</h2>
                        <div className="content">
                            <ul>
                                <li>
                                    <label htmlFor="address">Address: </label>
                                    <p name='address'>Buddha Colony, Patna - 800 001</p>
                                    <br />
                                </li>
                                <li>
                                    <label htmlFor="phone">Phone: </label>
                                    <p name='phone'>9065523909, 8864014737, 8294159505</p>
                                    <br />
                                </li>
                                <li>
                                    <label htmlFor="fax">Fax No: </label>
                                    <p name='fax'>0612-2524763</p>
                                    <br />
                                </li>
                                <li>
                                    <label htmlFor="email">Email: </label>
                                    <p name='email'><a href='mailto:bdpschool@rediffmail.com'>bdpschool@rediffmail.com</a></p>
                                    <br />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">© 2023 B.D Public School Design By :  <a style={{color:'rgb(12, 201, 144)',marginLeft:'1rem',textDecoration:'none'}} href='https://rakesh-sudo-stack.github.io'>Rakesh Jaiswal</a> </div>
        </>
    )
}

export default Footer;