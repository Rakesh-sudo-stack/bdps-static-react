import * as Images from '../image-bundles/Images';
import onPageLoadHook from '../OnPageLoadHook';
import '../../css/aims.css';
import BreadCrumb from '../BreadCrumb';
import { useOutletContext } from "react-router-dom";

const Aims = () => {

    const [progress, setProgress] = useOutletContext();

    // onPageLoadHook();
    
    return (
        <div className="aims">
            <div className="page-hero">
                <img src={Images.heroesSection.img10} alt="OUR TEAM" />
                    <h1>Aims & Objectives</h1>
            </div>
            <BreadCrumb progress={progress} setProgress={setProgress} links={
                [
                    {
                        name:'Aims & Objectives',
                        url:'/aims'
                    }
                ]
            } />
            <main>
                <div className="content">
                    <p>
                        At <span className='text-bold'>B.D. PUBLIC SCHOOL</span>, we believe every child has the right to equality of opportunity and access to the whole curriculum. We aim to provide every child a learning environment:
                    </p>
                    <ul>
                        <li>is safe and secure, is exciting, stimulating, challenging and relevant.</li>
                        <li>develops the confidence and talent of each individual.</li>
                        <li>fosters esteem, self-awareness and motivate learners.</li>
                        <li>promotes the quality of resourceful,reflective and resilient,is appropriate and matched to individual needs.</li>
                        <li>offers a wide range of activities, and includes the requirement of National Curriculum.</li>
                    </ul>
                </div>
                <img height='30%' width='30%' src={Images.Pages.Aims} alt="AIMS" />
            </main>
        </div>
    )
}

export default Aims;