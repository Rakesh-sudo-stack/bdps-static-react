import pdf from './Pdf';
import * as Images from '../image-bundles/Images'
import { Outlet, Link } from 'react-router-dom';
import '../../css/downloads.css'

const Downloads = () => {
    return(
        <Outlet />
    )
}

const DownloadsPage = () => {
    return(
        <div className="downloads-page">
            <h1>Downloads Page</h1>
            <section id='downloads-section'>
                <ul>
                    <li><Link to="/">../</Link></li>
                    <li><Link to="/downloads/pdf">Pdf /</Link></li>
                    <li><Link to="/downloads/images">Images /</Link></li>
                </ul>
            </section>
        </div>
    )
}

const PdfPage = () => {
    return(
        <div className="downloads-page">
            <h1>Pdf Page</h1>
            <section id='downloads-section'>
                <ul>
                    <li><Link to="/downloads">../</Link></li>
                    {
                        pdf.map(element=>{
                            return <li><a href={element.link}>{element.name}</a></li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

const ImagesPage = () => {
    return(
        <div className="downloads-page">
            <h1>Images Page</h1>
            <section id='downloads-section'>
                <ul>
                    <li><Link to="/downloads">../</Link></li>
                    <li><Link to="/downloads/images/heroes-section">heroes-section /</Link></li>
                    <li><Link to="/downloads/images/pages">pages /</Link></li>
                    {
                        Images.imageObj.map(element=>{
                            return <li><a href={element.link}>{element.name}</a></li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

const HeroesSectionPage = () => {
    return(
        <div className="downloads-page">
            <h1>Images Page</h1>
            <section id='downloads-section'>
                <ul>
                    <li><Link to="/downloads/images">../</Link></li>
                    {
                        Images.heroesSection.heroesSectionObj.map(element=>{
                            return <li><a href={element.link}>{element.name}</a></li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

const ImagePages = () => {
    return(
        <div className="downloads-page">
            <h1>Images Page</h1>
            <section id='downloads-section'>
                <ul>
                    <li><Link to="/downloads/images">../</Link></li>
                    {
                        Images.Pages.pagesObj.map(element=>{
                            return <li><a href={element.link}>{element.name}</a></li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Downloads;
export {DownloadsPage, PdfPage, ImagesPage, HeroesSectionPage, ImagePages};