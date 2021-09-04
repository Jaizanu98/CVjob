const Timeline = () => {
  return (
    <div className="tl container-fluid">
      <div className="row">
        <div className="col-sm-8 ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://deadline.com/wp-content/uploads/2021/07/red-notice.jpg"
                  alt="First slide"
                />
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/81JsZ5b-IUL.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <h1 className="title">'Red Notice'</h1>
                    <p className="h5">
                      A red notice is an Interpol notice issued to seek the
                      location and arrest of a person wanted by a judicial
                      jurisdiction or an international tribunal with a view to
                      their extradition.
                    </p>
                    <button className="btn-danger">PLAY</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://wallpapercave.com/wp/wp4961946.jpg"
                  alt="Second slide"
                />
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <h1 className="title">'Money Heist'</h1>
                    <p className="h5">
                      Eight thieves take hostages and lock themselves in the
                      Royal Mint of Spain as a criminal mastermind manipulates
                      the police to carry out his plan.
                    </p>
                    <button className="btn-danger">PLAY</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://www.denofgeek.com/wp-content/uploads/2018/06/lucifer-season-4-key-art-netflix.jpg?resize=768%2C430"
                  alt="Third slide"
                />
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://flxt.tmsimg.com/assets/p11770893_b_v13_aj.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <h1 className="title">'Lucifer'</h1>
                    <p className="h5">
                      Lucifer was said to be "the fabled son of Aurora and
                      Cephalus, and father of Ceyx". He was often presented in
                      poetry as heralding the dawn.
                    </p>
                    <button className="btn-danger">PLAY</button>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4">
          <h1 style={{ color: "white" }}>Up next</h1>

          <div className="card upcard">
            <div className="card list">
              <div className="car-body bd">
                <div className="row">
                  <div className="col-5">
                    <img
                      className="img-thumbnail "
                      src="https://flxt.tmsimg.com/assets/p15516912_b1t_v8_aa.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h3>Manifest</h3>
                    <button className="btn-dark">Play</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card list">
              <div className="car-body bd">
                <div className="row">
                  <div className="col-5">
                    <img
                      className="img-thumbnail "
                      src="https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h3>The Family Man</h3>
                    <button className="btn-dark">Play</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card list">
              <div className="car-body bd">
                <div className="row">
                  <div className="col-5">
                    <img
                      className="img-thumbnail "
                      src="https://flxt.tmsimg.com/assets/p15540766_b_v8_ae.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h3>Sacred Games</h3>
                    <button className="btn-dark">Play</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card list">
              <div className="car-body bd">
                <div className="row">
                  <div className="col-5">
                    <img
                      className="img-thumbnail "
                      src="https://m.media-amazon.com/images/M/MV5BYmRlZDllZDEtYTBmYi00MzI2LTk2M2MtNmM5ZTQ0Nzk3NmY0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h3>DOM</h3>
                    <button className="btn-dark">Play</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card list">
              <div className="car-body bd">
                <div className="row">
                  <div className="col-5">
                    <img
                      className="img-thumbnail "
                      src="https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h3>Bad Boys</h3>
                    <button className="btn-dark">Play</button>
                  </div>
                </div>
              </div>
            </div>
            <h3>Browse Trailer <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
