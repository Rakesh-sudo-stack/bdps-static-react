import { useState, useEffect } from 'react';
import '../../css/admin-css/announcements-page.css';
import { useNavigate, useOutletContext, Link } from 'react-router-dom';
import axios from 'axios';

const AnnouncementsEdit = () => {

    const [progress, setProgress] = useOutletContext();

    const navigate = useNavigate();

    const [title, setTitle] = useState('Title Here');
    const [annLink, setAnnLink] = useState('');

    const [serverAnnouncements, setServerAnnouncements] = useState([]);

    const [totalAnnouncements, setTotalAnnouncements] = useState([]);

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

    useEffect(() => {
        document.querySelector('.menu-element.anchor-active').classList.remove('anchor-active');
        document.querySelector('div[name="announcements-element"]').classList.add('anchor-active');
        document.querySelector('aside').classList.remove('active');

        fetchAnnouncements()
    }, [])


    let d = new Date();
    let curYear = d.getFullYear();
    let curMonth = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
    let curDate = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

    const handleChange = (e) => {
        e.persist();
        setTitle(e.target.innerText)
    }

    const addAnnouncement = (e) => {
        e.preventDefault();

        if (title === '') {
            setTitle('No title');
        }

        if (annLink === '') {
            setAnnLink('/');
        }

        setTotalAnnouncements(prevArr => [
            ...prevArr,
            {
                title: title.trim() || 'No title',
                date: `${curYear}-${curMonth}-${curDate}`,
                link: annLink.trim() || '/'
            },
        ]);


        document.querySelector('#add-announcement-msg').style.color = 'green';
        document.querySelector('#add-announcement-msg').innerHTML = 'Done. Check announcements &uarr;';
        // document.querySelector('#save-announcement-btn').style.display = 'inline';
        setTimeout(() => {
            document.querySelector('#add-announcement-msg').innerText = '';
        }, 1000);
    }

    const saveAnnouncements = async (e) => {
        e.preventDefault();
        document.querySelector('#add-announcement-btn').setAttribute('disabled', true)
        document.querySelector('#add-announcement-btn').style.background = 'grey';
        document.querySelector('#save-announcement-btn').setAttribute('disabled', true)
        document.querySelector('#save-announcement-btn').style.background = 'grey';

        document.querySelector('#add-announcement-msg').style.color = 'red';
        document.querySelector('#add-announcement-msg').innerHTML = 'Saving. Please wait';
        try {
            const response = await axios.post('/announcements', totalAnnouncements);
            if (response.status === 200 && response.data.status === 200) {

                document.querySelector('#add-announcement-btn').setAttribute('disabled', false)
                document.querySelector('#add-announcement-btn').style.background = '#00203FFF';
                document.querySelector('#save-announcement-btn').setAttribute('disabled', false)
                document.querySelector('#save-announcement-btn').style.background = 'green';
                document.querySelector('#add-announcement-msg').style.color = 'green'
                document.querySelector('#add-announcement-msg').innerHTML = 'Saved';

                setTimeout(() => {
                    navigate('/admin')
                    setProgress(15);
                    setTimeout(() => { setProgress(75) }, 200)
                    setTimeout(() => { setProgress(100) }, 500)
                }, 1000)

            }
        } catch (err) {
            document.querySelector('#add-announcement-msg').style.color = 'red';
            document.querySelector('#add-announcement-msg').innerHTML = err.response.data.msg;
            setTimeout(() => {
                navigate('/admin')
            }, 2000)
        }

    }

    return (
        <div className="announcements-page">
            <h2 className='page-title'>Announcements</h2>
            <div className="announcements-section">
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
                    {
                        totalAnnouncements.map(announcement => {
                            return <div className="announcement">
                                <div className="title"><a href={announcement.link}>{announcement.title}</a></div>
                                <div className="date">Published:{announcement.date}</div>
                                <div className="school-name">B.D. PUBLIC SCHOOL</div>
                            </div>
                        })
                    }
                </marquee>
            </div>



            <div className="add-announcement-portal">
                <h2>Add Announcement</h2>
                <form method='post'>
                    <div className="announcements-section">
                        <div className="announcement">
                            <div className="title customizable-title" name='title' onInput={handleChange} contentEditable suppressContentEditableWarning={true}><a href="#">Title Here</a></div>
                            <div className="date">Published:{`${curYear}-${curMonth}-${curDate}`}</div>
                            <div className="school-name">B.D. PUBLIC SCHOOL</div>
                            <label style={{ color: 'blue', fontWeight: 700 }} htmlFor="add-link">Attach Link: </label>
                            <input type="text" placeholder='(Optional)' onChange={(e) => { setAnnLink(e.target.value) }} />
                            <div className="note-info" style={{ color: 'red' }}>Note:- Include http:// or https:// for external links</div>
                            <div className="note-info" style={{ color: 'red' }}>Note:- Start with / for internal links</div>
                        </div>
                    </div>
                    <button id='add-announcement-btn' onClick={addAnnouncement}>Add</button>
                    <button id='save-announcement-btn' onClick={saveAnnouncements} style={{ background: 'green', margin: '0 1rem', color: '#fff', display: totalAnnouncements.length <= 0 ? 'none' : 'inline' }}>Save</button>
                </form>
                <div id="add-announcement-msg"></div>
            </div>

            <div className="announcements-added">
                <h2>Preview Announcements</h2>
                <div className="added announcements-section">
                    {
                        totalAnnouncements.map(announcement => {
                            return <div className="announcement">
                                <div className="title"><a href={`${announcement.link}`} target='_blank'>{announcement.title}</a></div>
                                <div className="date">Published:{announcement.date}</div>
                                <div className="school-name">B.D. PUBLIC SCHOOL</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AnnouncementsEdit;