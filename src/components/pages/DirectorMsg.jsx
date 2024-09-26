import * as Images from '../image-bundles/Images';
import '../../css/director-msg.css';
import BreadCrumb from '../BreadCrumb';
import onPageLoadHook from '../OnPageLoadHook';
import { useOutletContext } from "react-router-dom";

const DirectorMsgPage = () => {

    const [progress, setProgress] = useOutletContext();
    
    // onPageLoadHook();

    return (
        <div className="director-msg-page">
            <div className="page-hero">
                <img src={Images.heroesSection.img10} alt="OUR TEAM" />
                    <h1>Director's Message</h1>
            </div>
            <BreadCrumb progress={progress} setProgress={setProgress} links={
                [
                    {
                        name:'Director\'s Message',
                        url:'/director-msg'
                    }
                ]
            } />
            <main>
                <div className="content">
                    <h2><span className='text-highlight'>Director's</span> Message</h2>
                    <p>It gives me immense pleasure to acknowledge with gratitude the recognition and appreciation this B.D. Public School has earned over the years. An institution is known by the magnificence of its building but by the quality of the student it prepares and send to enable them to carve a place for themselves in the wild world. It has been our endeavor in this school to provide the best possible education to the children through a congenial conducive academic environment reflected through qualified teachers, meaningful activities, inward sense of discipline amongst all the inmates and overall desire to pursue excellence in the field of education .Of late, there has been a drastic change in the education policy of the government. Continuous and comprehensive evaluation system examination has been introduced by the C.B.S.E. with so many challenges for the schools. We have tried our best to cope with the new situation successfully. And with the passage of time tremendous use of technology in the field of education has come into being and our school on this score also does not log behind. Installation of CCTV cameras and introduction of smart classes are its examples. The support given to me by the parents, teachers and the well – wishers has enabled me to move ahead and make B.D. Public School a centre of excellence. I hope in the years to come B.D. Public School will further earn the accolade of the students and the parents and thus , justify the trust reposed in the school by all the concerned.</p>
                </div>
                <figure>
                    <img src={Images.directorMsg} alt="Director" />
                        <div className='caption'><div className='text-highlight text-bold'>Sheo Bihari Roy</div><div className='text-bold'>DIRECTOR</div></div>
                </figure>
            </main>
        </div>
    )
}

export default DirectorMsgPage;