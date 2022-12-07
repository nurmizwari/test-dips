import logo from "./asset/Group.png";
import d from "./asset/Vector.png";
import panah from "./asset/panah.png";
import putih from "./asset/pputih.png";
import panahKecil from "./asset/3.png";
import kotak from "./asset/kotak.png";
import gb from "./asset/gb.png";
import gb2 from "./asset/gb2.png";
import gb3 from "./asset/gb3.png";
import line from "./asset/line.png";
import bg2 from "./asset/bg2.png";
import kiri from "./asset/kiri.png";
import kanan from "./asset/kanan.png";
import hp from "./asset/hp.png";
import laptop from "./asset/laptop.png";
import bintang from "./asset/bintang.png";
import hp2 from "./asset/hp2.png";
import desktop from "./asset/desktop.png";
import hplagi from "./asset/hplagi.png";
import laptoplagi from "./asset/laptoplagi.png";
import checkout from "./asset/checkout.jpg";
import home from "./asset/home.jpg";
import yt from "./asset/yt.png";
import button from "./asset/button.png";
import putih1 from "./asset/putih.png";
import putihcw from "./asset/putihcw.png";
import cwo from "./asset/7.png";
import cwe from "./asset/4.png";
import social from "./asset/Social.png";
import kotakkotak from "./asset/kotakkotak.png";
import kotakpolos from "./asset/kotakpolos.png";
import gariss from "./asset/gariss.png";
import brand from "./asset/brand.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid atas">
        <div className="container">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <img
                src={logo}
                alt="logo"
                style={{ width: "224px", height: "75" }}
              />
              <div
                class="collapse navbar-collapse d-flex justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div class="navbar-nav">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    <p style={{ color: "#FFFE55" }}>HOME</p>
                  </a>
                  <a class="nav-link active text-light" href="#">
                    SERVICES
                  </a>
                  <a class="nav-link active text-light" href="#">
                    WORK FLOW
                  </a>
                  <a class="nav-link active text-light" href="#">
                    PORTOFOLIO
                  </a>
                  <a class="nav-link active text-light" href="#">
                    ABOUT US
                  </a>
                  <a class="nav-link active text-light" href="#">
                    OUR VALUE
                  </a>
                  <a class="nav-link nomor active text-dark" href="#">
                    <p style={{ fontSize: "26px", fontFamily: "Lato" }}>
                      +62 21 858 3944
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="d-flex flex-row-reverse">
          <img src={d} alt="d" />
        </div>
        <div className="container tulisan">
          <div className="row">
            <div className="col-10">
              <p
                style={{
                  fontSize: "118px",
                  lineHeight: "118px",
                  fontFamily: "Gujarati MT",
                }}
              >
                WE ASSIST YOU IN SOLVING TOMORROW'S
              </p>
              <p
                style={{
                  fontSize: "118px",
                  color: "white",
                  marginTop: -60,
                  fontFamily: "Gujarati MT",
                }}
              >
                PROBLEMS TODAY
              </p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <p
                className="me-3"
                style={{ fontSize: "20px", fontFamily: "Neue Montreal" }}
              >
                ABOUT US
              </p>
              <img src={panah} alt="panah" className="panah" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid tengah">
        <div className="container  ">
          <div className="row rowo ">
            <div className="col">
              <p
                style={{
                  fontSize: "90px",
                  lineHeight: "100%",
                  fontFamily: "Gujarati MT",
                }}
              >
                OUR SERVICES
              </p>
            </div>
            <div className="col text-center">
              <p
                style={{
                  fontSize: "32px",
                  lineHeight: "130%",
                  fontFamily: "Gujarati MT",
                }}
              >
                We’ve worked with a wide array of clients across the globe to
                apply design fundamentals of elegance, simplicity
              </p>
            </div>
            <div className="col d-flex flex-row align justify-content-end">
              <p style={{ fontSize: "20px" }}>VIEW ALL</p>
              <img src={putih} alt="panah" className="putih" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p className="satu">E-Commerce Development</p>
            </div>
            <div className="col-4">
              <p className="dua">
                You want to get the best out of your business and turn mere
                visitors into paying customers? Sell your products on a secure
                platform and not worry about the technical details? We will help
                you implement your E-Commerce platform.
              </p>
            </div>
            <div className="col d-flex flex-row justify-content-end gap-4 align-items-center">
              <button type="submit" className="kotak">
                LEARN MORE
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
              <img
                src={kotak}
                alt="kotak"
                style={{ objectFit: "contain", width: "25px", height: "25px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p className="custom">Custom App Development</p>
            </div>
            <div className="col">
              <p className="custom2">
                It’s time to turn your vision into a high-performing and
                responsive app. This is how your customers will interact with
                your business, which is why we pay attention to every detail.
              </p>
            </div>
            <div className="col ">
              <img
                src={line}
                alt=""
                style={{ objectFit: "contain", float: "right" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <img
                src={gb}
                alt="gb"
                style={{ width: "522px", height: "393px" }}
              />
            </div>
            <div className="col d-flex flex-row justify-content-end align-items-start ">
              <img
                src={gb2}
                alt="gb"
                style={{
                  width: "300px",
                  height: "391px",
                  objectFit: "contain",
                }}
                className="me-3"
              />
              <img
                src={gb3}
                alt="gb"
                style={{
                  width: "300px",
                  height: "391px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="row justify-content-end">
              <div className="col-8">
                <p className="custom2 mt-4">
                  In the design process, they create both functional and
                  beautiful things. The team possesses unique individuality and
                  strong qualifications and can easily translate something so
                  abstract and visionary into a digital experience. They always
                  put the clients first no matter how complicated the tasks are.
                </p>
              </div>
              <div className="col-4 ">
                <button
                  type="submit"
                  className="kotak"
                  style={{ float: "right" }}
                >
                  LEARN MORE
                  <img src={panahKecil} alt="p" className="ms-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <p className="custom"> Integration With 3rd Party Web Services</p>
            </div>
            <div className="col-4 d-flex flex-row justify-content-end gap-4 align-items-center">
              <p className="custom2">
                We use all opportunities to solve business problems. Our
                intelligent digital strategy and a pragmatic and thoughtful
                approach to solving business calls deliver a successful
                framework for both you and your audience.
              </p>
            </div>
            <div className="col d-flex flex-row justify-content-end gap-4 align-items-center">
              <button
                type="submit"
                className="kotak"
                style={{ float: "right" }}
              >
                LEARN MORE
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
              <img
                src={kotak}
                alt="kotak"
                style={{ objectFit: "contain", width: "25px", height: "25px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <p className="custom"> Hosting/Maintenance</p>
            </div>
            <div className="col-4 d-flex flex-row justify-content-end gap-4 align-items-center">
              <p className="custom2">
                Our hosting services are designed to give you the highest level
                of security with respect to your website’s performance. We
                exclusively use safe and modern servers, which minimizes the
                risk of any single point of failure. This includes a minimized
                risk of hacks or other malicious activities.
              </p>
            </div>
            <div className="col d-flex flex-row justify-content-end gap-4 align-items-center">
              <button
                type="submit"
                className="kotak"
                style={{ float: "right" }}
              >
                LEARN MORE
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
              <img
                src={kotak}
                alt="kotak"
                style={{ objectFit: "contain", width: "25px", height: "25px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <p className="custom"> Design UX/UI</p>
            </div>
            <div className="col-4 d-flex flex-row justify-content-end gap-4 align-items-center">
              <p className="custom2">
                Although it might seem merely superficial, the user experience
                might be the most crucial part of your online presence. When
                viewers are confronted with long loading times, cramped landing
                pages or an otherwise infuriating design, they will leave
                quicker than they came.
              </p>
            </div>
            <div className="col d-flex flex-row justify-content-end gap-4 align-items-center">
              <button
                type="submit"
                className="kotak"
                style={{ float: "right" }}
              >
                LEARN MORE
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
              <img
                src={kotak}
                alt="kotak"
                style={{ objectFit: "contain", width: "25px", height: "25px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p className="custom"> SEO Services</p>
            </div>
            <div className="col-4 d-flex flex-row justify-content-end gap-4 align-items-center">
              <p className="custom2">
                A well-thought-out SEO strategy can boost your growth, and in
                turn sales, without an expensive PPC-campaign. There are
                multiple ways we can help you with this.
              </p>
            </div>
            <div className="col d-flex flex-row justify-content-end gap-4 align-items-center">
              <button
                type="submit"
                className="kotak"
                style={{ float: "right" }}
              >
                LEARN MORE
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
              <img
                src={kotak}
                alt="kotak"
                style={{ objectFit: "contain", width: "25px", height: "25px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container tengahputih">
        <div className="row">
          <div className="col">
            <p className="pWorkflow">Workflow</p>
          </div>
          <div className="row">
            <div className="col">
              <p className="pTengah">
                It is particularly important for us that you as a customer are
                actively involved in creative processes and that you know at all
                times which step we are about to take next. Learn more about our
                workflow and our communication with you as a customer here.
              </p>
            </div>
            <div className="col d-flex flex-row ">
              <p className="pTengah1">
                How we deal with projects from start to finish
              </p>
              <img
                src={panahKecil}
                alt="p"
                style={{ width: "24px", height: "20px" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col text-srart">
            <p className="pTengah">
              The key to successful collaboration and results that are perfectly
              tailored to you is clear goal setting and the elimination of
              misunderstandings.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={bg2} alt="bg" className="gb2" />
          </div>
          <div className="col">
            <p className="pTengah">
              Before each project, we therefore obtain detailed information from
              you about what you expect from our service, what your goals are
              and what you particularly value. Our experts will also be happy to
              advise you on this step with their extensive specialist knowledge.
            </p>
            <p className="pTengah">
              As soon as your expectations have been clarified, we get down to
              work. We actively involve you, the customer, in the processes so
              that you always know where your project currently stands.
            </p>
            <div>
              <button type="submit" className="kotak" style={{ float: "left" }}>
                LEARN MORE
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
            </div>
            <br />
            <br />
            <br />
            <p className="pTengah1">How we communicate with the client</p>
            <p className="pTengah1" style={{ marginTop: "58px" }}>
              Stages of the process
            </p>
          </div>
        </div>

        <div className="row roww">
          <div className="col">
            <p className="portofolio">Portfolio</p>
          </div>
          <div className="col d-flex ">
            <p className="pTengah" style={{ marginTop: "100px" }}>
              Take a look at our most successful projects and see for yourself
              our skills and the results that speak for themselves.
            </p>
            <img
              src={kiri}
              alt="kiri"
              style={{ width: "49px", objectFit: "contain" }}
              className="me-3"
            />
            <img
              src={kanan}
              alt="kanan"
              style={{ width: "49px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="row mt-5 porto">
          <div className="col">
            <p className="customWeb">Custom WEB Development</p>
            <h2 className="hana">HANA BANK Website</h2>
            <ol className="pTengah">
              <li>2017 Webby Award Winner for Best Shopping App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews </li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ol>
            <div>
              <button type="submit" className="kotak" style={{ float: "left" }}>
                CASE STUDY
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
            </div>
          </div>
          <div className="col mt-5">
            <img src={bintang} alt="bintang" className="bintang" />
            <img src={laptop} alt="laptop" className="ms-5" />
            <img src={hp} alt="hp" className="hp" />
          </div>
        </div>

        <div className="row rowe mt-5">
          <div className="col mt-5">
            <img
              src={hp2}
              alt="hp2"
              style={{ width: "451px", height: "906px", position: "absolute" }}
            />
            <img
              src={bintang}
              alt="bintang2"
              // style={{ width: "451px", height: "906px" }}
              className="bintang2"
            />
            <img
              src={desktop}
              alt="desktop"
              // style={{ width: "451px", height: "906px" }}
              className="desktop"
            />
          </div>

          <div className="col cc mt-5">
            <p className="customapp">Custom App Development </p>
            <p className="utvi">UTVI PWA</p>
            <ol className="pTengah">
              <li>2021 App Award Winner for Best Maid App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews</li>
              <li>4.8 App Store Reviews</li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ol>
            <div>
              <button
                type="submit"
                className="kotak"
                style={{ float: "right" }}
              >
                CASE STUDY
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="row rowDesign mt-5">
          <div className="col rowDesign">
            <p className="design">DESIGN UI/UX </p>
            <p className="utvi">BASF WEB DESIGN</p>
            <ol className="pTengah">
              <li>2021 App Award Winner for Best Maid App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews</li>
              <li>4.8 App Store Reviews</li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ol>
            <div>
              <button type="submit" className="kotak" style={{ float: "left" }}>
                CASE STUDY
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
            </div>
          </div>
          <div className="col colw">
            <img src={bintang} alt="bintang" className="bintang3" />
            <img
              src={hplagi}
              alt="gplagi"
              style={{ width: "250.92px" }}
              className="hplagi"
            />
            <img
              src={laptoplagi}
              alt="laptoplagi"
              style={{ width: "818.99px", height: "404.81px" }}
              className="laptoplagi"
            />
          </div>
        </div>

        <div className="row">
          <div className="col colHp">
            <img src={home} alt="home" className="home" />
            <img src={checkout} alt="checkout" className="checkout" />
            <img src={bintang} alt="bintang" className="bintang4" />
            <div className="mt-5">
              <h2 className="about">ABOUT US</h2>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <p className="design">E-Commerce Development</p>
            <p className="open">Open Fashion Mobile App</p>
            <ol className="pTengah">
              <li>2021 App Award Winner for Best Maid App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews</li>
              <li>4.8 App Store Reviews</li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ol>
            <div>
              <button type="submit" className="kotak" style={{ float: "left" }}>
                CASE STUDY
                <img src={panahKecil} alt="p" className="ms-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid tengahHitam">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <h6 className="hardianto">
                Hardianto is a name of person work in =digital agency based in
                Jakarta. Founder Novi Hardianto decided to go into business for
                himself, using his vast experience in software engineering and
                numerous ancillary fields to help people perfect their web
                presence and get seen. In setting up the company, he was able to
                rely on his vast experience from previous entrepreneurial
                activities and therefore knows what matters
              </h6>
              <div>
                <button
                  type="submit"
                  className="kotak mt-3"
                  style={{ float: "left" }}
                >
                  SEE MORE
                  <img src={panahKecil} alt="p" className="ms-4" />
                </button>
              </div>
            </div>
            <div className="col">
              <img src={yt} alt="yt" className="yt" />
              <img src={button} alt="buton" className="buton" />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <h2 className="magic">Our magic team</h2>
            </div>
            <div className="col">
              <div>
                <button
                  type="submit"
                  className="kotak3 mt-3"
                  style={{ float: "right" }}
                >
                  SEE MORE
                  <img src={panahKecil} alt="p" className="ms-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container team">
        <div className="row">
          <div className="col-10">
            <p className="hardianto">
              Wolven D.O.O. is a small digital agency based in Serbia. Founder
              Dave McGowan decided to go into business for himself, using his
              vast experience in software engineering and numerous ancillary
              fields to help people perfect their web presence and get seen. In
              setting up the company, he was able to rely on his vast experience
              from previous entrepreneurial activities and therefore knows what
              matters
            </p>
          </div>
        </div>
        <div className="row rowTeam">
          <div className="col mb-5">
            <div class="card">
              <img src={putih1} alt="Avatar" style={{ width: "100%" }} />
              <div class="container dalemCard">
                <h5 className="mt-3">SAM FLEX</h5>
                <p className="director">Director</p>
                <img src={social} alt="social" className="mb-3" />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={putihcw} alt="Avatar" style={{ width: "100%" }} />
              <div class="container dalemCard">
                <h5 className="mt-3">Kate larson</h5>
                <p className="director">Manager</p>
                <img src={social} alt="social" className="mb-3" />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={cwo} alt="Avatar" style={{ width: "100%" }} />
              <div class="container-fluid d-flex justify-content-between align-items-center  dalemCard">
                <h5 className="mt-3">bobby fish</h5>
                <p className="director">Designer</p>
                <img
                  src={social}
                  alt="social"
                  className="mb-3 "
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={cwe} alt="Avatar" style={{ width: "100%" }} />
              <div class="container dalemCard">
                <h5 className="mt-3">amanda james</h5>
                <p className="director mb-5">Programmer</p>
                <img src={social} alt="social" className="mb-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid hitamValue">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="ourValue">Our Values</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <p className="transparent">Transparency</p>
              <img
                src={kotakpolos}
                alt="kotakpols"
                style={{ width: "400px", height: "222px" }}
              />
              <img
                src={kotakkotak}
                alt="kotakpols"
                style={{ width: "196px", height: "118px" }}
                className="kotakkotak"
              />
              <p className="isi mb-5">
                The goal of Wolven D.O.O. is to get as close as possible to the
                ideal of a ''glass company''. Our key to this is clear
                communication with our customers as well as the disclosure of
                our workflows and the permanent involvement of the customer in
                the creative processes.
              </p>
            </div>
            <div className="col-4">
              <p className="transparent">Accountability</p>
              <img
                src={kotakpolos}
                alt="kotakpols"
                style={{ width: "400px", height: "222px" }}
              />
              <img
                src={kotakkotak}
                alt="kotakpols"
                style={{ width: "196px", height: "118px" }}
                className="kotakkotak"
              />
              <p className="isi">
                We are your competent partner for web development and everything
                that goes with it. That means we don't just make empty promises,
                but deliver measurable results as well as real added value.
              </p>
            </div>
            <div className="col-4">
              <p className="transparent">Dedication</p>
              <img
                src={kotakpolos}
                alt="kotakpols"
                style={{ width: "400px", height: "222px" }}
              />
              <img
                src={gariss}
                alt="kotakpols"
                style={{ width: "196px", height: "118px" }}
                className="kotakkotak"
              />
              <p className="isi">
                Just being good at something is one side. But for truly perfect
                results and content that converts, it takes people who put their
                heart and soul into every project until you as our client and
                partner, are 100% satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid getintouch">
        <div className="container">
          <div className="row">
            <div className="col-6 mt-4">
              <h2 className="get">Get in Touch</h2>
              <p className="hardianto mb-5">
                Looking to talk to us directly, or planning an office visit? As
                Digital Agency, Dipstrategy start by understanding your business
                need to comes up with any solutions. That's why it is important
                for us to hear your story. When it come to listening to your
                story, we are all ears.
              </p>
              <p className="hardianto mb-2">
                Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 -
                Indonesia{" "}
              </p>
              <p className="pnomor">P. +62 21 858 3944</p>
              <p className="pnomor">info@dipstrategy.co.id </p>
              <div className="row mt-5 justify-content-start">
                <div className="col-2">
                  <p className="socialmedia">facebook</p>
                </div>
                <div className="col-2">
                  <p className="socialmedia">twitter</p>
                </div>
                <div className="col-2">
                  <p className="socialmedia">instagram</p>
                </div>
                <div className="col-2">
                  <p className="socialmedia">linkedin</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="formm">
                <form>
                  <label>NAME</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label>E-MAIL</label>
                  <br />
                  <input type="password" />
                  <br />
                  <label>MESSAGE</label>
                  <br />
                  <input type="text" />
                  <br />
                  <button type="submit" className="kotak mt-4 mb-5">
                    SUBMIT
                    <img src={panahKecil} alt="p" className="ms-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row rowfooter justify-content-center align-items-start">
            <div className="col">
              <img src={brand} alt="brand" />
            </div>
            <div className="col d-flex align-self-center">
              <p className="nomormiring">P. +62 21 858 3944</p>
            </div>
            <div className="col">
              <p className="footer1">Quick Links</p>
              <p className="footer2">Services</p>
              <p className="footer2">work flow</p>
              <p className="footer2">portofolio</p>
              <p className="footer2">about us</p>
              <p className="footer2">our value</p>
            </div>
            <div className="col">
              <p className="footer1">follow</p>
              <p className="footer3">facebook</p>
              <p className="footer3">twitter</p>
              <p className="footer3">instagram</p>
              <p className="footer3">about us</p>
              <p className="footer3">linkedin</p>
            </div>
            <div className="col-4">
              <p className="footer4">Sign up to our newsletter</p>
              <div>
                <form className="formfooter">
                  <label>E-MAIL</label>
                  <br />
                  <input type="email" />
                </form>
                <p className="footer5">
                  This site is protected by reCAPTHCHA and the{" "}
                  <span>Google Privacy Policy</span> and{" "}
                  <span>Terms of Service apply.</span>
                </p>
              </div>
            </div>
            <div className="col align-self-center mb-5 ">
              <img src={panah} alt="img" className="" />
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <hr className="garisgaris" />
            </div>
          </div>
          <div className="row ">
            <div className="col-2"></div>
            <div className="col-8">
              <p className="ending">
                Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital
                Agency Jakarta
              </p>
            </div>
            <div className="col-2 text-end">
              <p className="ending">Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
