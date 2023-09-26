import './Website.css';
import boatImg from '../logoboat.png'

function Website() {
  return (
    <div className="Website">
        
        <div className="title">
            <p>Kreiling Marine & Sail <br/> Boat Detailing & Services</p>
        </div>

        <div className="contact">
            <ul className="contact-info">
                <li>Devin Kreiling</li>
                <li>270-312-8850</li>
                <li>devinklipich@yahoo.com</li>
                <li>Louisville, KY</li>
            </ul>
        </div>

        <div className="services">
            <ul>
                <li>Boat Cleaning</li>
                <li>Painting</li>
                <li>Hull Maintenance</li>
                <li>Interior Cleaning</li>
                <li>Engine Check</li>
                <li>General Repairs</li>
            </ul>
        </div>

        <div className="key-benefits">
            <li>Experienced and Reliable</li>
            <li>Convenient Dockside Service</li>
            <li>Competitive Rates</li>
            <li>Quick Turnaround</li>
            <li>Satisfaction Guaranteed</li>
        </div>
      
        <div className="about-me">
            - Briefly introduce yourself, highlighting your experience and passion for boat maintenance.
        </div>

        <div className="testimonials">
            - Include quotes from satisfied clients to build trust.
        </div>

        <div className="services">
            <ul>
                <li>Basic Cleaning Package - $XX</li>
                <li>Premium Cleaning and Maintenance - $XX</li>
                <li>Customized Maintenance Plans Available</li>
            </ul>
        </div>

        <div className="locations">
            - List the marinas or areas where you are available to work.
        </div>

        <div className="call-to-action">
        - Encourage potential clients to contact you for a free quote or consultation.
        - Provide clear instructions on how to reach you.
        </div>

        <div className="contact">
            <ul className="contact-info">
                <li>Devin Kreiling</li>
                <li>270-312-8850</li>
                <li>devinklipich@yahoo.com</li>
                <li>Louisville, KY</li>
            </ul>
        </div>

        <img src={boatImg} className="boatImg"/>

        <footer>
            <div className="copyright">Copyright © Devin Kreiling 2023</div>
        </footer>

    </div>
  );
}

export default Website;
