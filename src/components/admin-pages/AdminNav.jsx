import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const showMenu = () => {
        document.querySelector('aside').classList.add('active');
    }
    const showSearchBar = () => {
        document.querySelector('.search-bar').style.display = 'flex';
        document.querySelector('.right-side').style.display = 'none';
        document.querySelector('.left-side').style.display = 'none';
        document.querySelector('.menu-btn').style.display = 'none';
    }
    const hideSearchBar = () => {
        
        const highlightedElements = document.querySelectorAll('span[class^="highlight-"]');
        console.log(highlightedElements)
        if(highlightedElements.length>0){
            highlightedElements.forEach(element=>{
                let parent = element.parentNode;
                
                const textNode = document.createTextNode(element.innerHTML);
                parent.replaceChild(textNode, element);
            })
        }

        document.querySelector('.search-bar').style.display = 'none';
        document.querySelector('.right-side').style.display = 'flex';
        document.querySelector('.left-side').style.display = 'flex';
        document.querySelector('.menu-btn').style.display = 'flex';
    }
    const searchAcrossPage = () => {
        const highlightedElements = document.querySelectorAll('span[class^="highlight-"]');
        console.log(highlightedElements)
        if(highlightedElements.length>0){
            highlightedElements.forEach(element=>{
                let parent = element.parentNode;
                
                const textNode = document.createTextNode(element.innerHTML);
                parent.replaceChild(textNode, element);
            })
        }
        const searchTerm = searchInput;
        const regex = new RegExp(searchTerm, 'gi');
        let matchCount = 0;

        const traverseNodes = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const matches = node.nodeValue.match(regex);
                if (matches !== null && matches.length > 0) {
                    matchCount += matches.length;
                    const span = document.createElement('span');
                    span.classList.add(`highlight-${matchCount}`);
                    const replacedText = node.nodeValue.replace(regex, `<span class="highlight-${matchCount}">$&</span>`);
                    const newNode = document.createElement('span');
                    newNode.innerHTML = replacedText;
                    node.parentNode.replaceChild(newNode, node);
                }
            } else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    traverseNodes(node.childNodes[i]);
                }
            }
        };

        traverseNodes(document.body);

        if (matchCount > 0) {
            const firstMatch = document.querySelector(`.highlight-1`);
            firstMatch.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className="admin-nav">
            <div className="menu-btn" onClick={showMenu}>
                <i className='fa-solid fa-bars'></i>
            </div>
            <div className="left-side">
                <Link to='/admin' onClick={
                    () => {
                        props.setProgress(15);
                        setTimeout(() => { props.setProgress(75) }, 200)
                        setTimeout(() => { props.setProgress(100) }, 500)
                    }
                }>Home</Link>
            </div>
            <div className="right-side">
                <button onClick={showSearchBar}><i className="fa fa-search"></i></button>
            </div>
            <div className="search-bar">
                <div className="container-box">
                    <input onChange={(e) => { setSearchInput(e.target.value) }} type="text" placeholder="Search" />
                    <div className="search-close-btn"><i className="fa-solid fa-xmark" onClick={hideSearchBar}></i></div>
                    <button onClick={searchAcrossPage}><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
    )
}

export default AdminNav;