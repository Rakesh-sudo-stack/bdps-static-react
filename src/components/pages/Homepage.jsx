import * as Images from '../image-bundles/Images';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import schoolInfo from '../../downloads/pdf/SchoolInfo.pdf';
import { useOutletContext } from "react-router-dom";
import onPageLoadHook from '../OnPageLoadHook';
import axios from 'axios';

const Homepage = () => {
    const [images, setImages] = useState([]);

    const [serverAnnouncements, setServerAnnouncements] = useState([]);

    const [serverNotices, setServerNotices] = useState([]);

    const [progress, setProgress] = useOutletContext();

    const [totalImages, setTotalImages] = useState(10);

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.post('/announcements/uploads');
            if (response.status === 200 && response.data.status === 200) {
                setServerAnnouncements(response.data.body);
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }

    const fetchNotices = async () => {
        try {
            const response = await axios.post('/notice-board/uploads');
            if (response.status === 200 && response.data.status === 200) {
                setServerNotices(response.data.body);
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }

    useEffect(() => {
        const getImageData = () => {
            axios.post('/images')
                .then(res => {
                    console.log(res.data.body)
                    setImages(res.data.body);
                    setTotalImages(preval => { return preval + res.data.body.length })
                })
                .catch(err => {
                    console.log(err);
                });
        };

        getImageData();
        fetchAnnouncements();
        fetchNotices();
    }, [])

    let slideIndex = 1;

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
    }
    return (
        <div className="home-page">
            <main>
                <div className="image-slider">

                    <div className="mySlides">
                        <div className="numbertext">1 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img4} width="100%" alt="BDPS FRONT LOOK" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">2 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img2} alt="CULTURAL PROGRAMME" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">3 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img3} alt="CULTURAL PROGRAMME" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">4 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img5} width="100%" alt="BDPS STUDENTS" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">5 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img1} width="100%" alt="SAWAN MAHOTSAVA" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">6 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img6} width="100%" alt="KBD TRAINING" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">7 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img7} width="100%" alt="BDPS DIRECTOR" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">8 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img8} width="100%" alt="VOLLEYBALL MATCH" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">9 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img9} width="100%" alt="BDPS STUDENTS" />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">10 / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img src={Images.heroesSection.img10} width="100%" alt="BDPS FAMILY" />
                    </div>


                    {images.map((image, idx) => (
                        <div className="mySlides">
                            <div className="numbertext">{10 + 1 + idx} / {totalImages}</div>
                            <div className="title">B. D. Public School</div>
                            <img key={idx} src={image.img} alt={image.name} />
                        </div>

                    ))}

                    {/* <!-- Next and previous buttons --> */}
                    <button className="prev-image" onClick={() => { plusSlides(-1) }}>&#10094;</button>
                    <button className="next-image" onClick={() => { plusSlides(1) }}>&#10095;</button>
                </div>
                <div className="banner">
                    <div className="school-info">
                        <div className="connect">
                            <ul>
                                <li>Tel no. : <a href="tel:6122528704">6122528704</a></li>
                                <li>Email: <a href="mailto:bdpschool@rediffmail.com">bdpschool@rediffmail.com</a></li>
                            </ul>
                        </div>
                        <div className="social-media">
                            <ul>
                                <li title="twitter">
                                    <Link onClick={() => {
                                        onPageLoadHook()
                                        setProgress(15);
                                        setTimeout(() => { setProgress(75) }, 200)
                                        setTimeout(() => { setProgress(100) }, 500)
                                    }} to='' aria-label="Visit Twitter Page">
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                </li>
                                <li title="facebook">
                                    <a href="https://www.facebook.com/bdpublicschoolbuddhacolonypatna" aria-label="Visit Facebook Page">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li title="gplus">
                                    <Link onClick={() => {
                                        onPageLoadHook()
                                        setProgress(15);
                                        setTimeout(() => { setProgress(75) }, 200)
                                        setTimeout(() => { setProgress(100) }, 500)
                                    }} to='/' aria-label="Visit Gplus Page">
                                        <i className="fa-brands fa-google-plus-g"></i>
                                    </Link>
                                </li>
                                <li title="youtube">
                                    <a href="https://www.youtube.com/@b.d.publicschool9738" aria-label="Visit Youtube Page">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="school-prospectus">
                        <a href={schoolInfo}>School Prospectus</a>
                    </div>
                </div>
                <section className='section-1'>
                    <div className="left-side">
                        <div className="about-us">
                            <h2>WELCOME TO <span style={{ color: 'rgb(144, 26, 168)' }}>B.D PUBLIC SCHOOL</span></h2>
                            <p><b>B.D. Public School</b>, Affiliated to <b>CBSE</b>, is run under the aegis of Budha Vikash Samiti. The zenith which the school has been able to reach is largely due to the untiring effort and devotion of Shri Sheo Bihari Roy whose services the school still enjoys as its Director. Some eminent educationists, like <b>Dr. D.N. Mishra</b> (Rtd. Prof., Patna University, Patna) who out of a sense of devotion to the cause of education, spare some time regularly, to guide the students. The school is headed by an eminent Principal, Smt. Madhwi Kumari, who is an academician and sustains the students as a mother.</p>
                            <Link onClick={() => {
                                onPageLoadHook()
                                setProgress(15);
                                setTimeout(() => { setProgress(75) }, 200)
                                setTimeout(() => { setProgress(100) }, 500)
                            }} to='/aims' id='read-more'>Read More</Link>
                            {/* <!-- <img src={Images.schoolBuilding} alt="School Building" /> --> */}
                        </div>
                        <div className="messages-section">
                            <div className="message">
                                <figure>
                                    <img src={Images.director} alt="Director" />
                                </figure>
                                <div className="content-div">
                                    <div className="title">MESSAGE FROM DIRECTOR</div>
                                    <div className="content">It gives me immense pleasure to acknowledge with gratitude the recognition and appreciation this <b>B.D. Public School</b> has earned over the years. An Institution is known not by the magnificence....</div>
                                    <Link onClick={() => {
                                        onPageLoadHook()
                                        setProgress(15);
                                        setTimeout(() => { setProgress(75) }, 200)
                                        setTimeout(() => { setProgress(100) }, 500)
                                    }} to='director-msg' className="read-more">Read More {'>'}</Link>
                                </div>
                            </div>
                            <div className="message">
                                <figure>
                                    <img src={Images.principal} alt="Principal" />
                                </figure>
                                <div className="content-div">
                                    <div className="title">MESSAGE FROM PRINCIPAL</div>
                                    <div className="content">Children learn to work together to share and cooperate. They are helped to develop good self-esteem and confidence. This area is the basis for success.....</div>
                                    <Link onClick={() => {
                                        onPageLoadHook()
                                        setProgress(15);
                                        setTimeout(() => { setProgress(75) }, 200)
                                        setTimeout(() => { setProgress(100) }, 500)
                                    }} to='/' className="read-more">Read More {'>'}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="announcements-section">
                            <h2>Latest Announcements</h2>
                            <marquee id='announcement-marquee' onMouseOver={() => { document.querySelector('#announcement-marquee').stop() }} onMouseOut={() => { document.querySelector('#announcement-marquee').start() }} direction='up' scrollamount={7}>
                                <div className="announcement">
                                    <div className="title"><a href='/'>BIOLOGY 2ND LIST OF CANDIDATES SELECTED FOR ADMISSION IN CLASS XI</a></div>
                                    <div className="date">Published:2020-08-06</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>MATHS 2ND LIST OF CANDIDATES SELECTED FOR ADMISSION IN CLASS XI</a></div>
                                    <div className="date">Published:2020-08-06</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>COMMERCE 2ND LIST OF CANDIDATES SELECTED FOR ADMISSION IN CLASS XI</a></div>
                                    <div className="date">Published:2020-08-06</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>OFFICE ORDER</a></div>
                                    <div className="date">Published:2020-07-31</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>MATH GROUP SELECTED CANDIDATES FOR CLASS-XI</a></div>
                                    <div className="date">Published:2020-07-29</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>COMMERCE GROUP SELECTED CANDIDATES FOR CLASS-XI</a></div>
                                    <div className="date">Published:2020-07-29</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>BIOLOGY GROUP SELECTED CANDIDATES FOR CLASS-XI</a></div>
                                    <div className="date">Published:2020-07-29</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>AISSE - 2020 CLASS XTH RESULT</a></div>
                                    <div className="date">Published:2020-07-15</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>AISSCE - 2020 CLASS XIITH RESULT</a></div>
                                    <div className="date">Published:2020-07-15</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="announcement">
                                    <div className="title"><a href='/'>OFFICE ORDER</a></div>
                                    <div className="date">Published:2020-07-09</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                {
                                    serverAnnouncements.map(announcement => {
                                        return <div className="announcement">
                                            <div className="title"><a href={announcement.link} target='_blank'>{announcement.title}</a></div>
                                            <div className="date">Published:{announcement.date}</div>
                                            <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                        </div>
                                    })
                                }
                            </marquee>
                        </div>
                        <div className="notice-board">
                            <h2>Notice Board</h2>
                            <div className='container'>
                                <div className="notice">
                                    <div className="title"><a href='/'>BIOLOGY 2ND LIST OF CANDIDATES SELECTED FOR ADMISSION IN CLASS XI</a></div>
                                    <div className="date">Published:2020-08-06</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>MATHS 2ND LIST OF CANDIDATES SELECTED FOR ADMISSION IN CLASS XI</a></div>
                                    <div className="date">Published:2020-08-06</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>COMMERCE 2ND LIST OF CANDIDATES SELECTED FOR ADMISSION IN CLASS XI</a></div>
                                    <div className="date">Published:2020-08-06</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>OFFICE ORDER</a></div>
                                    <div className="date">Published:2020-07-31</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>MATH GROUP SELECTED CANDIDATES FOR CLASS-XI</a></div>
                                    <div className="date">Published:2020-07-29</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>COMMERCE GROUP SELECTED CANDIDATES FOR CLASS-XI</a></div>
                                    <div className="date">Published:2020-07-29</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>BIOLOGY GROUP SELECTED CANDIDATES FOR CLASS-XI</a></div>
                                    <div className="date">Published:2020-07-29</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>AISSE - 2020 CLASS XTH RESULT</a></div>
                                    <div className="date">Published:2020-07-15</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>AISSCE - 2020 CLASS XIITH RESULT</a></div>
                                    <div className="date">Published:2020-07-15</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                <div className="notice">
                                    <div className="title"><a href='/'>OFFICE ORDER</a></div>
                                    <div className="date">Published:2020-07-09</div>
                                    <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                </div>
                                {
                                    serverNotices.map(notice => {
                                        return <div className="notice">
                                            <div className="title"><a href={notice.link} target='_blank'>{notice.title}</a></div>
                                            <div className="date">Published:{notice.date}</div>
                                            <div className="school-name">B.D. PUBLIC SCHOOL</div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                        <div className="facilities">
                            <h2>Facilities</h2>
                            <div className="container">
                                <div className="facility">
                                    <div className="number">10</div>
                                    <p>Total No.of Small-sized Rooms</p>
                                </div>
                                <div className="facility">
                                    <div className="number">82</div>
                                    <p>Total No.of Medium-sized Rooms</p>
                                </div>
                                <div className="facility">
                                    <div className="number">02</div>
                                    <p>Total No.of Libraries</p>
                                </div>
                                <div className="facility">
                                    <div className="number">08</div>
                                    <p>Total No.of Laboratories</p>
                                </div>
                                <div className="facility">
                                    <div className="number">34</div>
                                    <p>Total No.of Digital Classroom</p>
                                </div>
                                <div className="read-more"></div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Homepage;