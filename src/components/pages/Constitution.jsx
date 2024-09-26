import * as Images from '../image-bundles/Images';
import onPageLoadHook from '../OnPageLoadHook';
import '../../css/constitution.css';
import BreadCrumb from '../BreadCrumb';
import { useOutletContext } from "react-router-dom";

const Constitution = () => {

    const [progress, setProgress] = useOutletContext();
    
    // onPageLoadHook();

    return (
        <div className="constitution">
            <div className="page-hero">
                <img src={Images.heroesSection.img10} alt="OUR TEAM" />
                    <h1>Constitution</h1>
            </div>
            <BreadCrumb progress={progress} setProgress={setProgress} links={
                [
                    {
                        name:'Constitution',
                        url:'/constitution'
                    }
                ]
            } />
            <main>
                <section>
                    <div className="content">
                        <h1><span className='text-highlight'>Preamble of</span> India</h1>
                        <ul>
                            <li><span className='text-bold'>WE THE PEOPLE OF INDIA</span>, having solemnly resolved to constitute India into a <span className='text-bold'>SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</span> and to secure to all Its citizens:</li>
                            <li><span className='text-bold'>JUSTICE</span>, Social, economic and political;</li>
                            <li><span className='text-bold'>LIBERTY</span> of thought, expression, belief, faith and worship;</li>
                            <li><span className='text-bold'>EQUALITY</span> of status and of opportunity and to promote among them all;</li>
                            <li><span className='text-bold'>FRATERNITY</span> assuring the dignity of the individual and the unity and Integrity of the Nation;</li>
                            <li><span className='text-bold'>IN OUR CONSTITUTION ASSEMBLY</span> this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND</li>
                            <li>GIVE TO OURSELVES THE CONSTITUTION. </li>
                        </ul>
                    </div>
                    <img style={{maxHeight:'10rem'}} src={Images.Pages.Stamp} alt="STAMP" />
                </section>
                <section>
                    <div className="content">
                        <h1><span className='text-highlight'>Constitution</span> India</h1>
                        <h3 style={{textAlign:'center'}}>Part IV A (articles 51 A)<br />Fundamental Duties</h3>
                        <h4>Fundamental Duties-It shall be the duty of every citizen of India:</h4>
                    <ul style={{marginTop:'2rem'}}>
                        <li>to abide by the constitution and respect its ideals and institutions, the National flag and the National Anthem;</li>
                        <li>to cherish and follow the noble ideals which inspired our national struggle for freedom;</li>
                        <li>to uphold and protect the sovereignty, unity and integrity of India;</li>
                        <li>to defend the country and render national service when called upon to do so;</li>
                        <li>to promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities; to renounce Practices derogatory to the dignity of women;</li>
                        <li>to value and preserve the rich heritage of our composite culture;</li>
                        <li>to protect and improve the natural environment including forests, lakes, rivers, wildlife, and to have compassion for living creatures;</li>
                        <li>to develop the scientific temper, humanism and the spirit of inquiry and reform;</li>
                        <li>to safeguard public property and to abjure violence;</li>
                        <li>to strive towards excellence in all spheres of individuals and collective activity so that the nation constantly rises to higher levels of endeavor and achievement;</li>
                        <li>who is parent or guardian, to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years;</li>
                    </ul>
                </div>
                <img style={{maxHeight:'499px'}} src={Images.Pages.Constitution} alt="CONSTITUTION" />
                </section>
            </main>
        </div>
    )
}

export default Constitution;