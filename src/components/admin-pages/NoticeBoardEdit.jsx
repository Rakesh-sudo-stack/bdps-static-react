import { useState, useEffect } from 'react';
import '../../css/admin-css/notice-board-page.css';
import { useNavigate, useOutletContext, Link } from 'react-router-dom';
import axios from 'axios';

const NoticeBoardPage = () => {

    const [progress, setProgress] = useOutletContext();

    const navigate = useNavigate();

    const [title, setTitle] = useState('Title Here');
    const [noticeLink, setNoticeLink] = useState('');

    const [serverNotices, setServerNotices] = useState([]);

    const [totalNotice, setTotalNotice] = useState([]);

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

    let d = new Date();
    let curYear = d.getFullYear();
    let curMonth = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
    let curDate = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

    useEffect(() => {
        document.querySelector('.menu-element.anchor-active').classList.remove('anchor-active');
        document.querySelector('div[name="notice-board-element"]').classList.add('anchor-active');
        document.querySelector('aside').classList.remove('active');

        fetchNotices();
    },[])

    const handleChange = (e) => {
        e.persist();
        setTitle(e.target.innerText)
    }

    const addNotice = (e) => {
        e.preventDefault();

        if (title === '') {
            setTitle('No title');
        }

        if (noticeLink === '') {
            setNoticeLink('/');
        }

        setTotalNotice(prevArr => [
            ...prevArr,
            {
                title: title.trim() || 'No title',
                date: `${curYear}-${curMonth}-${curDate}`,
                link: noticeLink.trim() || '/'
            },
        ]);


        document.querySelector('#add-notice-msg').style.color = 'green';
        document.querySelector('#add-notice-msg').innerHTML = 'Done. Check notices &uarr;';
        // document.querySelector('#save-notice-btn').style.display = 'inline';
        setTimeout(() => {
            document.querySelector('#add-notice-msg').innerText = '';
        }, 1000);
    }

    const saveNotice = async (e) => {
        e.preventDefault();
        document.querySelector('#add-notice-btn').setAttribute('disabled', true)
        document.querySelector('#add-notice-btn').style.background = 'grey';
        document.querySelector('#save-notice-btn').setAttribute('disabled', true)
        document.querySelector('#save-notice-btn').style.background = 'grey';

        document.querySelector('#add-notice-msg').style.color = 'red';
        document.querySelector('#add-notice-msg').innerHTML = 'Saving. Please wait';


        try {
            const response = await axios.post('/notice-board', totalNotice);
            if (response.status === 200 && response.data.status === 200) {

                document.querySelector('#add-notice-btn').setAttribute('disabled', false)
                document.querySelector('#add-notice-btn').style.background = '#00203FFF';
                document.querySelector('#save-notice-btn').setAttribute('disabled', false)
                document.querySelector('#save-notice-btn').style.background = 'green';
                document.querySelector('#add-notice-msg').style.color = 'green'
                document.querySelector('#add-notice-msg').innerHTML = 'Saved';

                setTimeout(() => {
                    navigate('/admin')
                    setProgress(15);
                    setTimeout(() => { setProgress(75) }, 200)
                    setTimeout(() => { setProgress(100) }, 500)
                }, 1000)

            }
        } catch (err) {
            document.querySelector('#add-notice-msg').style.color = 'red';
            document.querySelector('#add-notice-msg').innerHTML = err.response.data.msg;
            setTimeout(() => {
                navigate('/admin')
            }, 2000)
        }
    }

    return (
        <div className="notice-board-page">
            <h2 className='page-title'>Notice Board</h2>
            <div className="notice-board">
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
                    {
                        totalNotice.map(notice => {
                            return <div className="notice">
                                <div className="title"><a href={notice.link}>{notice.title}</a></div>
                                <div className="date">Published:{notice.date}</div>
                                <div className="school-name">B.D. PUBLIC SCHOOL</div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="add-notice-portal">
                <h2>Add Notice</h2>
                <form method='post'>
                    <div className="notice-board">
                        <div className="notice">
                            <div className="title customizable-title" name='title' onInput={handleChange} contentEditable suppressContentEditableWarning={true}><a href="#">Title Here</a></div>
                            <div className="date">Published:{`${curYear}-${curMonth}-${curDate}`}</div>
                            <div className="school-name">B.D. PUBLIC SCHOOL</div>
                            <label style={{ color: 'blue', fontWeight: 700 }} htmlFor="add-link">Attach Link: </label>
                            <input type="text" placeholder='(Optional)' onChange={(e) => { setNoticeLink(e.target.value) }} />
                            <div className="note-info" style={{ color: 'red' }}>Note:- Include http:// or https:// for external links</div>
                            <div className="note-info" style={{ color: 'red' }}>Note:- Start with / for internal links</div>
                        </div>
                    </div>
                    <button id='add-notice-btn' onClick={addNotice}>Add</button>
                    <button id='save-notice-btn' onClick={saveNotice} style={{ background: 'green', margin: '0 1rem', color: '#fff', display: totalNotice.length <= 0 ? 'none' : 'inline' }}>Save</button>
                </form>
                <div id="add-notice-msg"></div>
            </div>

            <div className="notice-added">
                <h2>Preview Notices</h2>
                <div className="added notice-board">
                    {
                        totalNotice.map(notice => {
                            return <div className="notice">
                                <div className="title"><a href={`${notice.link}`} target='_blank'>{notice.title}</a></div>
                                <div className="date">Published:{notice.date}</div>
                                <div className="school-name">B.D. PUBLIC SCHOOL</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NoticeBoardPage;