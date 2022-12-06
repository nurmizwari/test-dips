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
                  <a
                    class="nav-link nomor active text-dark"
                    href="#"
                    style={{ fontSize: "26px" }}
                  >
                    +62218583944
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
              <p style={{ fontSize: "118px", lineHeight: "118px" }}>
                WE ASSIST YOU IN SOLVING TOMORROW'S
              </p>
              <p style={{ fontSize: "118px", color: "white", marginTop: -60 }}>
                PROBLEMS TODAY
              </p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <p className="me-3">ABOUT US</p>
              <img src={panah} alt="panah" className="panah" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid tengah">
        <div className="container  ">
          <div className="row rowo ">
            <div className="col">
              <p style={{ fontSize: "90px", lineHeight: "100%" }}>
                OUR SERVICES
              </p>
            </div>
            <div className="col text-center">
              <p style={{ fontSize: "32px", lineHeight: "130%" }}>
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
    </div>
  );
}

export default App;
