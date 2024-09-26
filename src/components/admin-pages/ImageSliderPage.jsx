import { useEffect, useState } from 'react';
import '../../css/style.css';
import '../../css/admin-css/image-slider.css'
import * as Images from '../image-bundles/Images';
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from 'axios';


const ImageSliderPage = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    useEffect(() => {
        document.querySelector('.menu-element.anchor-active').classList.remove('anchor-active');
        document.querySelector('div[name="slider-element"]').classList.add('anchor-active');
        document.querySelector('aside').classList.remove('active');

        const getImageData = () => {
            axios.post('/images')
                .then(res => {
                    console.log(res)
                    setImages(res.data.body);
                    setTotalImages(preval=>{return preval+res.data.body.length})
                })
                .catch(err => {
                    console.log(err);
                });
        };

        getImageData();
    }, [])

    const [progress, setProgress] = useOutletContext();

    const [totalImages, setTotalImages] = useState(11);

    const fileChosen = (e) => {

        let images = Array.from(document.querySelectorAll('.mySlides'));

        let selectedFile = e.target.files[0];
        console.log(selectedFile)

        const reader = new FileReader();
        reader.onload = (e) => {

            document.querySelector('.customizable-image').setAttribute('src', e.target.result)
        };
        reader.readAsDataURL(selectedFile);
    }

    const handleAddImageEvent = async (e) => {
        e.preventDefault();
        document.querySelector('#add-image-msg').style.color = 'red';
        document.querySelector('#add-image-msg').innerHTML = 'Working. Please Don\'t leave';

        const formData = new FormData();
        formData.append('slider-img', e.target[0].files[0]);

        try {
            const response = await axios.post('/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            document.querySelector('#add-image-msg').style.color = 'green';
            document.querySelector('#add-image-msg').innerHTML = 'Added successfully';
            setTimeout(()=>{navigate(0)},1000)
            
        } catch (err) {
            console.log(err.response.data);

            document.querySelector('#add-image-msg').style.color = 'red';
            document.querySelector('#add-image-msg').innerHTML = err.response.data.msg;
            setTimeout(()=>{navigate(0)},1000)
        }
    }


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
        <div className="image-slider-page">
            <h2>Image Slider</h2>
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

                {/* DYNAMIC IMAGES HERE  */}


                {images.map((image, idx) => (
                    <div className="mySlides">
                        <div className="numbertext">{10+1+idx} / {totalImages}</div>
                        <div className="title">B. D. Public School</div>
                        <img key={idx} src={image.img} alt={image.name} />
                    </div>

                ))}

                <div className="mySlides customizable">
                    <div className="numbertext">{totalImages} / {totalImages}</div>
                    <div className="title">B. D. Public School</div>
                    <img className='customizable-image' src={Images.customizableImage} width="100%" alt="BDPS" />
                </div>



                {/* <!-- Next and previous buttons --> */}
                <button className="prev-image" onClick={() => { plusSlides(-1) }}>&#10094;</button>
                <button className="next-image" onClick={() => { plusSlides(1) }}>&#10095;</button>
            </div>
            <div className="addImage">
                <form method='POST' enctype="multipart/form-data" onSubmit={handleAddImageEvent}>
                    <h2><label htmlFor="slider-img">Add an Image</label></h2>
                    <input type="file" name="slider-img" onChange={fileChosen} required accept="image/*" />
                    <button>Save</button>
                </form>
                <div id="add-image-msg"></div>
            </div>
        </div>
    )
}

export default ImageSliderPage;