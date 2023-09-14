import { useEffect, useState } from "react"
import Review from "../components/Review";


function Home() {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const getReviews = async () => {
        const json = await
            await fetch('url'
            ).json();
        setReviews(json.data.reviews);
        setLoading(false);
    };
    useEffect(() => {
        getReviews();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {reviews.map((review) => (
                        <Review
                            key={review.id}
                            id={review.id}
                            coverImg={review.cover.image}
                            title={review.title}
                            summary={movie.summary}
                        />
                    ))}
                </div>
            )}
        </div>
    );

}

import Image from 'react-bootstrap/Image';

function FluidExample() {
    return <Image src="holder.js/100px250" fluid />;
}



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

export default Home;