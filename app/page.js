'use client'
import { CopyToClipboard } from "react-copy-to-clipboard";
import Phone from "@/component/module/phone";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";

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
          <a href="#portfolio" className="li portfolio">portfolio</a>
          <a href="#skills" className="li">Tech Stack</a>
          <a href="#about" className="li about-li">about me</a>
        </ul>
        <CopyToClipboard text={'09394142756'}>
            <a href="#" className="call">
                <Phone />
                Schedule a Call
            </a>
        </CopyToClipboard>
      </header>
      <main>
        <div className="hero-text"> 
          <h6 className="hithere">Hi There,</h6>
          <h1 className="main-text">I'm He<p className="redR">r</p>us</h1>
          <h3 className="main-text-h3">Front-end developer during daytime</h3>
          <h4 className="main-text-h4">& work with batman during nights.</h4>
          <a href="#portfolio"><button class="button-49" role="button"><p>See portfolio</p></button></a>
        </div>
        <div className="hero-img-bg" />
        <img src="/me.png" className="hero-img"/>
      </main>
      <div id="contact">
        <div className="email">
          <h5>Email</h5>
          <p>herus_cloudie@yahoo.com</p>
          <img className="gmail" src="/gmail.png"/>
        </div>
        <div className="contact-column"/>
        <div className="location">
          <h5>Location</h5>
          <p>Iran , Tehran</p>
          <img className="placeholder" src="/placeholder.png"/>
        </div>
      </div>
      <div className="row"/>
      <div className="about-flex"  >
        <div className="skills-group" id="skills">
          <h3 className="skills">Tech Stack</h3>
          <div className="icons-style">
            <div className="icon"><img src="/html.png" /></div>
            <div className="icon"><img src="/css.png" /></div>
            <div className="icon"><img src="/bootstrap.png" /></div>
            <div className="icon"><img src="/ui.png" /></div>
          </div>
          <div className="icons-skills">
            <div className="icon"><img src="/js.png" /></div>
            <div className="icon"><img src="/react.png" /></div>
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="none" d="M0 0h128v128H0z"/><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" fill="#764abc"/></svg></div>
            <div className="icon"><svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z"/></svg></div>
          </div>
        </div>
        <div className="About" id="about">
          <div className="aboutme">
            <h2 className="aboutme-title">About <span className="aboutme-red">me</span></h2>
            <img className="me2" src="/me1.png"/>
          </div>
          <div className="paragraph">
            My name is Amir Mohammad Moslemi but you can call me <span style={{fontSize : '18px'}} className="redR">Herus</span>,  I'm 18 years old.
            <br />
            <br />
              I've been working with the Next.js framework for more than a year.
              <br />
              <br />
              <div className="paragraph-ul">
                <span>responsive & mobile first</span>
                <span>clean code</span>
                <span>compliance with SEO at Next.js</span>
              </div>
            <h5>Just tell your idea and trust.</h5>
            <div className="dots">
              <div className="dot"/>
              <div className="dot"/>
              <div className="dot"/>
            </div>
          </div>
        </div>
      </div>
      <div className="sample-session" id="portfolio">
        <div className="sample-session-title">Some Portfolio<small style={{fontSize : '23px'}}> (click)</small></div>
        <Link href={'https://moslemi-phone.vercel.app'}>
          <div className="card">
            <div className="content">
              
              <div className="back">
                <div className="back-content-1">
                </div>
              </div>

              <div className="front"> 
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small class="badge">Mobile Shop</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">

                      </p>

                    </div>
                    <p class="card-footer-1">
                    Tools : Next.js page router (SSR & SSG) || Redux || next-auth || mongoose & mongodb
                    </p>
                    <p class="card-footer-2">
                    Features : Authentication || Shopping cart || Responsive || Cookie & Token || Comment section || Page security || filtering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={'https://amir-food.vercel.app'}>
          <div className="card">
            <div className="content">
              
              <div className="back">
                <div className="back-content-2">
                </div>
              </div>

              <div className="front"> 
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small class="badge">Food Delivery</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">

                      </p>

                    </div>
                    <p class="card-footer-1">
                    Tools : Next.js page router (SSR & SSG) || next-auth || mongoose & mongodb
                    </p>
                    <p class="card-footer-2">
                    Features : Responsive || Filtering || Authentication || Cookie & Token || Cart section || Page security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={'https://moslemi-realstate.vercel.app'}>
          <div className="card">
            <div className="content">
              
              <div className="back">
                <div className="back-content-3">
                </div>
              </div>

              <div className="front"> 
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small class="badge">Realstate app</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">

                      </p>

                    </div>
                    <p class="card-footer-1">
                    Tools : Next.js 13 App router (SSR) || next-auth || mongoose & mongodb
                    </p>
                    <p class="card-footer-2">
                    Features : Admin panel (the advertisement should confrim by admin) || Authentication || Filtering || 
                    Responsive || Cookie & Token || Share button || Bookmark option || Page security  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
