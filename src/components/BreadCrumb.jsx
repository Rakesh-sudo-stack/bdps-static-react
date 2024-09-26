import { NavLink } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className="bread-crumb">
            <ol>
                <li className='active text-bold'><i className='fa fa-home'></i><NavLink onClick={
                    ()=>{
                        props.setProgress(15);
                        setTimeout(()=>{props.setProgress(75)},500)
                        setTimeout(()=>{props.setProgress(100)},700)
                    }
                } to='/'>Home</NavLink></li>
                {
                    props.links.map((element,index,array)=>{
                        let active = index == array.length - 1 ? '' : 'active';
                        return <li className={active} key={Math.floor(Math.random()*9999999).toString()}>
                        <NavLink onClick={
                            ()=>{
                                props.setProgress(15);
                                setTimeout(()=>{props.setProgress(75)},500)
                                setTimeout(()=>{props.setProgress(100)},700)
                            }
                        } to={element.url}>{element.name}</NavLink></li>;
                    })
                }
            </ol>
        </div>
    )
}

export default BreadCrumb;