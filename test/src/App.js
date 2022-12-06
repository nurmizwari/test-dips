import logo from "./asset/Group.png";
import d from "./asset/Vector.png";
import panah from "./asset/panah.png";
import putih from "./asset/pputih.png";
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
        </div>
      </div>
    </div>
  );
}

export default App;
