import React from 'react'
import { Container} from 'react-bootstrap'
import Title from './Title'
import gumba from '../images/gumba.jpg';

export default function Galleryconatiner() {
    return (
        <>
        <Title title='Trending this week' />
            <Container className='mb-3' style={{ position: 'relative'}}>
                <div className='gallery_conatiner'>
                    <div className='imagescroll'>

                        <div className='gallery_image'>
                            <img src={gumba} alt='img1' />
                            <div className='image_credit'>
                                <h5>Credit: Manish Parajuli</h5>
                                <p>lovation: Kavre Gumba</p>
                            </div>
                        </div>

                        <div className='gallery_image'>
                            <img src={gumba} alt='img1' />
                            <div className='image_credit'>
                                <h5>Credit: Manish Parajuli</h5>
                                <p>lovation: Kavre Gumba</p>
                            </div>
                        </div>

                        <div className='gallery_image'>
                            <img src={gumba} alt='img1' />
                            <div className='image_credit'>
                                <h5>Credit: Manish Parajuli</h5>
                                <p>lovation: Kavre Gumba</p>
                            </div>
                        </div>

                        <div className='gallery_image'>
                            <img src={gumba} alt='img1' />
                            <div className='image_credit'>
                                <h5>Credit: Manish Parajuli</h5>
                                <p>lovation: Kavre Gumba</p>
                            </div>
                        </div>

                        <div className='gallery_image'>
                            <img src={gumba} alt='img1' />
                            <div className='image_credit'>
                                <h5>Credit: Manish Parajuli</h5>
                                <p>lovation: Kavre Gumba</p>
                            </div>
                        </div>
                        
                    </div>
                </div>    
                <i class="fa-solid fa-angle-right"></i>  
            </Container>


        </>
    )
}
