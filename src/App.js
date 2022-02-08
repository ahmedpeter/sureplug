import logo from './assets/img/sureplug_logo.jpg';
import banner from './assets/img/sureplug.mp4';
// import logo from './assets/img/sureplug_logo.jpg';


function App() {
  return (
    <section className="main">
        <section className="parent">
            <div className="top_header">
                <div className="nav_bar">
                <img src={logo} className="business__name"/>
                        <input type="text" placeholder="what do you want to learn" className="search_box"/>
                        <i className="fas fa-search search"></i>
                </div>
                <div className="right_nav">
                    <h4>Sign in</h4>
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
                    <video width="620" autoPlay muted loop="loop">
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
                       Graphics Design/Animation
                    </p>
                    <div className="flex">
                    <div className="instructor__avatar"> </div>
                    <p className="instructor__name">Ahmed Peter</p>
                </div>
                <p className="price__slash">
                    NGN 35,000
                </p>
                    <div className="fee__duration">
                        <p className="fee">NGN 25,000</p>
                        <p className="duration">Duration: 20 Weeks</p>
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
                       Front-end Engineering
                    </p>
                    <div className="flex">
                    <div className="instructor__avatar"> </div>
                    <p className="instructor__name">Ahmed Peter</p>
                </div>
                <p className="price__slash">
                    NGN 65,000
                </p>
                    <div className="fee__duration">
                        <p className="fee">NGN 45,000</p>
                        <p className="duration">Duration: 20 Weeks</p>
                    </div>
                    
                </div>
            </div>

          

            <div className="courses">
                <div className="course__img banner4"></div>
                <div className="faculty c-green">
                    Software Engineering
                </div>
                <div className="course__description">
                    <p className="course__title">
                      Back-end Engineering
                    </p>
                    <div className="flex">
                    <div className="instructor__avatar"> </div>
                    <p className="instructor__name">Ahmed Peter</p>
                </div>
                <p className="price__slash">
                    NGN 65,000
                </p>
                    <div className="fee__duration">
                       
                        <p className="fee">NGN 51,000</p>
                        <p className="duration">Duration: 20 Weeks</p>
                    </div>
                    
                </div>
            </div>
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
                            <button className="btn btn__default">Download Brochure</button>
                        </div>
                    </div>
                    <div className="banner_video">
                        <img src="./assets/img/lady.jpg" alt=""/>
    
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
                    Sure Plug has changed my outlook on my career.
                    Taking the foundational courses in Programming has helped me launch my career.
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
                <li>Become a Teacher</li>
                <li>Press Center</li>
                <li>Courses</li>
                <li>Team</li>
            </ul>
        </div>
        <div className="footer__right">
            <div className="footer__title">
                Products
            </div>
            <ul>
                <li>Our Pages</li>
                <li>Free Trial</li>
                <li>Academic Solutions</li>
                <li>Government Solutions</li>
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
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>Career</li>
                <li>Courses</li>
                <li>Affilate</li>
            </ul>
        </div>
    </div>
</section>


    </section>
      
  );
}

export default App;
