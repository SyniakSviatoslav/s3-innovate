import Reviews from "../reviews";
import "./index.css"
import Logo from "../../../assets/LogoAbout.svg";
import Circle from "../../../assets/Circle.svg";
import Contact from "../contact";

const About = () => {

    return (
        <div id="about">
            <div className="section-back-title-wrapper">
                <div className="section-back-title">About S3 Innovate</div>
                <div className="section-title">About S3 Innovate</div>
            </div>
            <div className="section-cite">
                <span >
                    <strong>We are committed to create a <span className="key-words">Smart, Secure and Sustainable (S3) world</span></strong></span>
                <span>
                    S3 Innovate offers innovative and secure technology solutions to unlock your success in
                    digital transformations. Collaborating with leading technology companies and industry leaders,
                    S3 Innovate is your one-stop solution partner
                    that offers an integrated consultancy and products to reshape your sustainability goals.
                </span>
            </div>
            <div className="about-cards">
                <div className="about-card">
                    <span className="about-card-title" > 6 </span>
                    <p>Headquarted in Singapore, we have a regional footprint in Manila,
                        Dhaka, Jakarta, Yangon and Ho Chi Minh</p>
                </div>
                <div className="about-card">
                    <span className="about-card-title" > 7 </span>
                    <p>We manage a portfolio of assets with clientiale in commerical, retail, manufacturing,
                        energy, data centres,  government agencies, and cities (smart cities, estates, parks)</p>
                </div>
                <div className="about-card">
                    <span className="about-card-title" > 100+ </span>
                    <p>We deliver solutions to more than 100+ quality customers around the region</p>
                </div>
                <div className="about-card">
                    <span className="about-card-title" > 10m+ </span>
                    <p>IoT data points are collected across all systems and sensors
                        and are designed for performance and scalability in Mircosoft Azure</p>
                </div>
            </div>
            <div className="end-cite"><span>Talk to us about our technology desires. Explore the solutions to help
                transform your asset and business.</span></div>
            <div className="logo-about-wrapper">
                <img src={Circle} id="circle"></img>
                <img src={Logo} id="logo-about"></img>
            </div>

            <Reviews />
            <Contact />

        </div>
    );
}

export default About;