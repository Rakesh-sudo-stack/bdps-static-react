import * as Images from '../image-bundles/Images';
import '../../css/advice-to-parents.css';
import BreadCrumb from '../BreadCrumb';
import onPageLoadHook from '../OnPageLoadHook';
import { useOutletContext } from "react-router-dom";

const AdviceToParentsPage = () => {

    const [progress, setProgress] = useOutletContext();
    
    // onPageLoadHook();

    return (
        <div className="advice-to-parents-page">
            <div className="page-hero">
                <img src={Images.heroesSection.img10} alt="OUR TEAM" />
                    <h1>Advice To Parents</h1>
            </div>
            <BreadCrumb progress={progress} setProgress={setProgress} links={
                [
                    {
                        name:'Advice To Parents',
                        url:'/advice-to-parents'
                    }
                ]
            } />
            <main>
                <h2 className='text-highlight col-change text-bold'>Advice to Parents</h2>
                <ul>
                    <li>The school authorities rely upon the full co-operation of the parents and guardians in all the matters related to the education of their wards.</li>
                    <li>Children are required to come to the school five minutes before the scheduled time.</li>
                    <li>Parents or guardian must see the teacher’s remarks and the homework given in the school diary everyday and see that the work is done properly and neatly.</li>
                    <li>Student’s absence must be explained in an application to the Principal duly signed by the parents/guardians.</li>
                    <li>Children are expected to be regular to their classes for better results and performances.</li>
                    <li>Parents/Guardians are advised to attend the Parent – Teacher’s Meet held on the 2nd Saturday every month between 11:30 am to 1 pm.</li>
                    <li>Parents/Guardians are advised to dress their children well before their departure for school.</li>
                    <li>Parents/Guardians are required to pay the school fee of their sons/wards on time for the smooth functioning of the school administration.</li>
                    <li>Any change in the address of the children, parents or guardians should be intimated to the school office within a week.</li>
                    <li>Parents/Guardians are advised to take every care of their children at home also to help in their all-round development.</li>
                    <li>If parents/guardians get any information regarding their wards through letter of diary, they should meet the Principal immediately.</li>
                </ul>
            </main>
        </div>
    )
}

export default AdviceToParentsPage;