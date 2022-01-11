
import "./index.css";
import name from "../../../assets/nameIcon.svg";
import phone from "../../../assets/phoneIcon.svg";
import email from "../../../assets/mailIcon.svg";
import message from "../../../assets/messageIcon.svg";
import home from "../../../assets/homeIcon.svg";
import Footer from "../footer";

const Contact = () => {
    return (
        <div id="contact">
            <div className="section-back-title-wrapper">
                <span className="section-back-title">Contact Us</span>
            </div>
            <div className="section-title">Contact Us</div>

            <div className="form-container">
            <form >

                <div className="form_wrapper">
                    <div className="input-wrapper">
                        <img src={name}></img>
                        <input
                            placeholder="Name"
                            className="input"
                        ></input>
                    </div>
                    <div className="input-wrapper">
                        <img src={email}></img>
                        <input
                            placeholder="Email"
                            className="input"
                            type="email"
                        ></input>
                    </div>
                    <div className="input-wrapper">
                        <img src={phone}></img>
                        <input
                            placeholder="Phone"
                            className="input"
                        ></input>
                    </div>
                    <div className="input-wrapper">
                        <img src={home}></img>
                        <input
                            placeholder="Company"
                            className="input"
                        ></input>
                    </div>
                    <div className="input-wrapper-message">
                        <img src={message}></img>
                        <input
                            placeholder="Message"
                            className="input"
                        ></input>
                    </div>
                </div>

                <button type="submit" className="sendButton" >
                    Send
                </button>

            </form>
            </div>
            <Footer/>
        </div>
        
    );
}

export default Contact;