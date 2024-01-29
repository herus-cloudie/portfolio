import Phone from "@/component/module/phone";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

export default function Home() {

  return (
    <div className="container">
      <aside>
        <div className="brand">H</div>
        <div className="brand-small">R</div>
        <div className="social">
          <a href="https://linkedin.com/in/amirmohammad-moslemi" className="linkedin"><BsLinkedin /></a>
          <a href="https://github.com/herus-cloudie" className="github"><BsGithub /></a>
          <a href="https://t.me/Herus_soll" className="telegram"><BsTelegram /></a>
        </div>
        <div className="column"/>
      </aside>
      <header>
        <ul>
          <a href="#" className="li portfolio">portfolio</a>
          <a href="#" className="li">about me</a>
          <a href="#" className="li">my blog</a>
          <a href="#" className="li">reviews</a>
          <a href="#" className="li">contact me</a>
        </ul>
        <a href="#" className="call">
          <Phone />
          Schedule a Call
        </a>
      </header>
      <main>
        <div className="hero-text"> 
          <h6 className="hithere">Hi There,</h6>
          <h1 className="main-text">I'm He<p className="redR">r</p>us</h1>
          <h3 className="main-text-h3">Front-end developer during daytime</h3>
          <h4 className="main-text-h4">& work with batman during nights.</h4>
          <button class="button-49" role="button">See Portfolio</button>
        </div>
        <img src="/me.png" className="hero-img"/>
      </main>
      <div>

        <div className="email">
          <h5>Email</h5>
          <p>herus2006crypto@gmail.com</p>
          <img className="gmail" src="/gmail.png"/>
        </div>
        <div className="contact-column"/>
        <div className="location">
          <h5>Location</h5>
          <p>Iran , Tehran</p>
          <img className="placeholder" src="/placeholder.png"/>
        </div>

      </div>
    </div>
  );
}
