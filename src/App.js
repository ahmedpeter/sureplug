import logo from './assets/img/sureplug_logo.jpg';
import banner from './assets/img/sureplug.mp4';
import lady from './assets/img/lady.jpg';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"


};


function App() {
  return (
    <section className="main">
        <section className="parent">
            <div className="top_header">
                <div className="nav_bar">
                <img src={logo} className="business__name"/>
                </div>
                <input type="text" placeholder="What do you want to learn?" className="search_box"/>
                <div className="right_nav">
                    <h4>info@sureplug.com</h4>
                    <button className="btn">Get Verified</button>
                </div>
            </div>
            <div className="center">
                <div className="banner_text">
                    <h3 className="title">Improve Practical Skills with <span className="sureplug"> Sure Plug </span></h3>
                    <p className="sub_text"> Break into a new field like website design/development and software engineering. No prior experience necessary to get started.
                    </p>
                    <div className="banner_btn">
                        <button className="btn btn__green">Join Sure Plug</button>
                        <button className="btn btn__default">Download Brochure</button>
                    </div>
                </div>
                <div className="banner_video">
                    <video width="100%" autoPlay muted loop="loop">
                        <source  src={banner} type="video/mp4"/>
                    </video>

                </div>
            </div>
            </section>



        <section className="parent mtb-4em ">
            <div className="page__title">
                <h3>Popular Courses</h3>
            </div>

            
        



            <section className="cat">
            <div className="courses">
                <div className="course__img banner1"></div>
                <div className="faculty c-red">
                    Design Courses
                </div>
                <div className="course__description">
                    <p className="course__title">
                       Story Telling & Prototyping
                    </p>
                    <div className="flex">
                      <div className="instructor__avatar"> </div>
                      <div>
                        <p className="instructor__name">Ahmed Peter</p>
                        <p class="instructor__title">Course Instructor</p>
                      </div>
                  </div>
                <p className="price__slash">
                    NGN 35,000
                </p>
                    <div className="fee__duration">
                        <p className="fee">NGN 30,000</p>
                        <p className="duration">Duration: 5 Classes</p>
                    </div>
                    
                </div>
            </div>

            <div className="courses">
                <div className="course__img banner2"></div>
                <div className="faculty c-blue">
                    Software Engineering
                </div>
                <div className="course__description">
                    <p className="course__title">
                       Web Design Fundamentals
                    </p>
                    <div className="flex">
                      <div className="instructor__avatar"> </div>
                      <div>
                        <p className="instructor__name">Ahmed Peter</p>
                        <p class="instructor__title">Course Instructor</p>
                      </div>
                  </div>
                <p className="price__slash">
                    NGN 45,000
                </p>
                    <div className="fee__duration">
                        <p className="fee">NGN 30,000</p>
                        <p className="duration">Duration: 6 Classes</p>
                    </div>
                    
                </div>
            </div>

          

            <div className="courses">
                <div className="course__img banner4"></div>
                <div className="faculty c-green">
                    Design Courses
                </div>
                <div className="course__description">
                    <p className="course__title">
                      Graphics Design
                    </p>
                    <div className="flex">
                      <div className="instructor__avatar"> </div>
                      <div>
                        <p className="instructor__name">Ahmed Peter</p>
                        <p class="instructor__title">Course Instructor</p>
                      </div>
                  </div>
                <p className="price__slash">
                    NGN 30,000
                </p>
                    <div className="fee__duration">
                       
                        <p className="fee">NGN 25,000</p>
                        <p className="duration">Duration: 6 Classes</p>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <section className="cat">
            <div className="courses">
                <div className="course__img banner1"></div>
                <div className="faculty c-blue">
                    Software Engineering
                </div>
                <div className="course__description">
                    <p className="course__title">
                       Introduction to PHP/MySQL
                    </p>
                    <div className="flex">
                      <div className="instructor__avatar"> </div>
                      <div>
                        <p className="instructor__name">Ahmed Peter</p>
                        <p class="instructor__title">Course Instructor</p>
                      </div>
                  </div>
                  <p className="price__slash">
                    NGN 65,000
                </p>
                    <div className="fee__duration">
                       
                        <p className="fee">NGN 51,000</p>
                        <p className="duration">Duration: 9 Classes</p>
                    </div>
                    
                </div>
            </div>

            <div className="courses">
                <div className="course__img banner2"></div>
                <div className="faculty c-green">
                    Frontend Engineering
                </div>
                <div className="course__description">
                    <p className="course__title">
                       React/Angular
                    </p>
                    <div className="flex">
                      <div className="instructor__avatar"> </div>
                      <div>
                        <p className="instructor__name">Ahmed Peter</p>
                        <p class="instructor__title">Course Instructor</p>
                      </div>
                  </div>
                <p className="price__slash">
                    NGN 65,000
                </p>
                    <div className="fee__duration">
                        <p className="fee">NGN 45,000</p>
                        <p className="duration">Duration: 5 Classes</p>
                    </div>
                    
                </div>
            </div>

          

            <div className="courses">
                <div className="course__img banner4"></div>
                <div className="faculty c-red">
                    Design Courses
                </div>
                <div className="course__description">
                    <p className="course__title">
                      WordPress/Joomla
                    </p>
                    <div className="flex">
                      <div className="instructor__avatar"> </div>
                      <div>
                        <p className="instructor__name">Ahmed Peter</p>
                        <p class="instructor__title">Course Instructor</p>
                      </div>
                  </div>
                <p className="price__slash">
                    NGN 47,000
                </p>
                    <div className="fee__duration">
                       
                        <p className="fee">NGN 31,000</p>
                        <p className="duration">Duration: 3 Classes</p>
                    </div>
                    
                </div>
            </div>
            {/* </Carousel> */}
        </section>

        </section>

        <section className="main">
            <section className="parent mtb-4em ">
                <div className="center bg-grey ptb-3em">
                    <div className="banner_text">
                        <h3 className="title">From Zero to Hero with<span className="sureplug"> Sure Plug </span></h3>
                        <p className="sub_text"> Become a software engineer in 3 weekends with our practical one-on-one classes.  </p>
                        <div className="banner_btn">
                            <button className="btn btn__green">Apply Now</button>
                            <button className="btn btn__default">Course Work</button>
                        </div>
                    </div>
                    <div className="banner_video">
                        <img src={lady} alt="" className="w-600"/>
    
                    </div>
                </div>
    
            </section>
            </section>
            


            <section className="main">
    <section className="parent mtb-2em ">
        <div className="review">
            <div className="review_profile">

            </div>
            <div className="">
                <blockquote className="revivew_text"> I've been out of college for about two years,
                    Sure Plug has changed the outlook on my career.
                    Taking the foundational courses in Programming has helped me launch a new career.
                </blockquote>
</div>
            </div>

    </section>




    </section>


<section>
    <div className="contact">
        <div className="to__join">
            <p> Do you have flair for programming?</p>
            <h4 className="join__us">Join Sure Plug today</h4>
        </div>
        <div className="banner_btn">
            <button className="btn c-orange">Get Started for Free</button>
            <button className="btn default__btn">Download Brochure</button>
        </div>
    </div>
</section>




<section>
    <div className="footer">
        <div className="footer__left">
            <img src={logo} className="business__name"/>
            <p className="copyright">
                &copy; 2022 Sure Plug, All Rights Reserved.
            </p>
        </div>
        <div className="footer__center">
            <div className="footer__title">
                About Courses
            </div>
            <ul>
                <li>About</li>
                <li>News</li>
                <li>Team</li>
                <li>Courses</li>
                <li>Press Center</li>
                <li>Become an Instructor</li>
            </ul>
        </div>
        <div className="footer__right">
            <div className="footer__title">
                Products
            </div>
            <ul>
                <li>Our Pages</li>
                <li>Students'Work</li>
                <li>Website Projects</li>
                <li>Graphics Designs</li>
                <li>Business Solutions</li>
                <li>Enterprise Solutions</li>
            </ul>
        </div>
        <div className="footer__right">
            <div className="footer__title">
                Connect with us
            </div>
            <ul>
                <li>Blog</li>
                <li>Courses</li>
                <li>Career</li>
                <li>Affilate</li>
                <li>Help Center</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
</section>


    </section>
      
  );
}

export default App;
