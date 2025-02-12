import React from 'react';

import about1 from '../../assets/img/about1.jpg';
import about2 from '../../assets/img/about2.jpg';
import about3 from '../../assets/img/about3.jpg';
import about4 from '../../assets/img/about4.jpg';
import about5 from '../../assets/img/about5.jpg';
import about6 from '../../assets/img/about6.jpg';

const about_arr = [
    {
        "title": "Overview of SSC",
        "content": "Welcome to SSC, your destination for unforgettable movie experiences since 2000. With a commitment to innovation and customer satisfaction, we've become a beloved cinema chain. Join us and discover why millions choose SSC for their movie adventures.",
        "link": "/secret/movie-list-page",
        "image": about1
    },
    {
        "title": "The Experiences",
        "content": "At SSC, we offer diverse experiences, from 2D cinematic excellence to immersive 4D thrills. Enjoy luxurious VIP lounges, IMAX immersion, and more, ensuring there's something for every movie lover.",
        "link": "/secret/movie-list-page",
        "image": about2
    },
    {
        "title": "Our Movie Collection",
        "content": "Explore over 5,000 titles in our extensive movie library, featuring the latest blockbusters, timeless classics, and indie gems. With something for everyone, SSC promises an unforgettable movie selection.",
        "link": "/secret/movie-list-page",
        "image": about3
    },
    {
        "title": "Multiple Food Selections",
        "content": "Elevate your movie experience with our gourmet food and beverage options. From specialty popcorn flavors to healthy snacks and sweet treats, our concession stands offer something delicious for every palate.",
        "link": "/secret/movie-list-page",
        "image": about4
    },
    {
        "title": "Various Promotions",
        "content": "Take advantage of our exciting promotions, including discount days, loyalty programs, and seasonal offers. SSC ensures great value and unforgettable experiences for all our patrons.",
        "link": "/secret/movie-list-page",
        "image": about5
    },
    {
        "title": "Our Expanding Network",
        "content": "With locations nationwide, SSC is always nearby. Join our growing community of movie enthusiasts and experience the magic of cinema with us.",
        "link": "/secret/movie-list-page",
        "image": about6
    }
];

function AboutUs(props) {
    return (
        <div className='' >
            {about_arr.map((item, index) => (
                <section key={index}>
                    <div className='container-fluid d-flex align-items-center p-0 vh-100 '>
                        <h1 className='mx-auto'>{item.title}</h1>
                    </div>
                    <div className='container-fluid d-flex' style={{ height: 'calc(100vh)' }}>
                        {index % 2 === 0 ? (
                            <>
                                <div className='col-5 border p-5 bg-warning' style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    {/* Placeholder or other content */}
                                </div>
                                <div className='col-7 border p-5'>
                                    <h2>{item.title}</h2>
                                    <p className='fs-3'>{item.content}</p>
                                    <a href={item.link}>Explore more</a>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='col-7 border p-5'>
                                    <h2>{item.title}</h2>
                                    <p className='fs-3'>{item.content}</p>
                                    <a href={item.link}>Explore more</a>
                                </div>
                                <div className='col-5 border p-5 bg-warning' style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    {/* Placeholder or other content */}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default AboutUs;
