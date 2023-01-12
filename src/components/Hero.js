import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ThreeDots } from "react-loader-spinner";
import "./Hero.css";

import sendEmailToSheet from "../helper/sendDataToGoogleSheet";

import banner from "../assets/banner.png";

const GOOGLE_SHEET_API =
  "https://v1.nocodeapi.com/shajjar99/google_sheets/bYorwuDurJEpjTno?tabId=Sheet1";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccessFul, setIsSuccessFul] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const form = useRef();

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_9yydwfd",
        "template_i5n1u0c",
        form.current,
        "HhA-gjSCWsIVaC0tu"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
          if (result.text === "OK") {
            setIsSending(false);
            setIsSuccessFul(true);
            sendEmailToSheet(email, GOOGLE_SHEET_API);
          }
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setIsFail(true);
        }
      );
    e.target.reset();
    setEmail("");
  };

  return (
    <main className="main">
      <section className="hero">
        <div className="">
          <img
            src={banner}
            alt="an illustration a girl and boy siting besides the camp"
          />
          <h1>Our Website is Under Construction</h1>
          <p>Be ready, we are launcing soon!</p>

          <div className="subscribe">
            <p>Get Notified</p>
            <form className="form" onSubmit={emailSubmitHandler} ref={form}>
              <input
                type="email"
                placeholder="you@email.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="user_email"
              />
              {!isSending && <button>Notify me</button>}

              {isSending && (
                <ThreeDots
                  height="40"
                  width="40"
                  radius="9"
                  color="#f6931e"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              )}
              {isSuccessFul && alert("Mail sent successfully!")}
              {isFail && alert("Sending Falid!")}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
