import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <nav className="hea">
        <h1 style={{cursor: 'pointer'}}>Coach Cordel</h1>
       <Link to='/tips' style={{textDecoration: "none", color: "white"}}><h1 style={{cursor: 'pointer'}}>Exam Tips</h1></Link>
      </nav>
      <main className="body">
        <div className="content">
          <div className="about">
            <p>Hello, my name is</p>
            <h1>Cordelia Obijiofor</h1>
            <p>
              With over 15 years of experience, I have helped over 50{" "}
              <b>IELTS & TOEFL candidates in Abuja, FCT </b>get the scores they
              deserve to change their lives!
            </p>
            <br/>
            <a href="tel:+2348065068366" className="button">Book an Appointment</a>
          </div>
        </div>
        <div className="image"></div>
      </main>
      <div className="footer">
        <p> Phone: +234 806 506 8366, Suite A23 Garima Plaza Arab Road, Kubwa, FCT, Nigeria</p>
      </div>
    </div>
  );
}

export default Home;
