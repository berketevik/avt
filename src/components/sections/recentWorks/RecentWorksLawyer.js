import Isotope from "isotope-layout";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksLawyer = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Image
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("music")}`}
            onClick={handleFilterKeyChange("music")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="music" />
              Music
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Content
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Yaparlar A.Ş</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            1 robot ve 4 kaynak fikstüründen oluşan robot
                            otomasyon kaynak hattı yatırım proje liderliği
                          </p>

                          <blockquote>Bütçe: 150.000€</blockquote>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Yaparlar A.Ş
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Yaparlar A.Ş</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Klasik kaynak birleştirme metodları ile yapılan
                            üretimi otomasyonlu projeksyon kaynağında
                            gerçekleştirecek hattın TÜBİTAK nezdinde
                            yürütücülüğü.
                          </p>

                          <blockquote>Bütçe: 350.000€</blockquote>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Yaparlar A.Ş
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Yaparlar A.Ş</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Üretim sahası veri toplama sistemi geliştirmesi ve
                            mevcut ERP sistemine adaptasyonu çalışmalarına
                            liderlik
                          </p>

                          <blockquote>Bütçe: 200.000€</blockquote>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Yaparlar A.Ş
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Tekrob A.Ş.</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Yurtdışı merkezli firmanın Türkiye ofisinin sıfırdan
                            kurulması{" "}
                          </p>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Tekrob A.Ş.
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1> Yıldız Kalıp A.Ş.</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            4 robot ve 8 fikstürlük robotlu punta kaynak
                            otomasyon hattının kurulması
                          </p>
                          <blockquote>Bütçe: 400.000€</blockquote>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Yıldız Kalıp A.Ş.
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1> Volkswagen Elektrik Sistemleri A.Ş.</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Türkiye geliştirme ofisinin kurulması, elemanların
                            eğitimi, yurtdışı merkez ile tüm gerekli
                            koordinasyonun sağlanması
                          </p>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Volkswagen Elektrik Sistemleri A.Ş.
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/lwork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/lwork4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1> Mercedes Benz Türk A.Ş.</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Actros ve Atego kamyon grupları süspansiyon sistemi
                            geliştirilmesi ve adaptasyonu
                          </p>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Mercedes Benz Türk A.Ş.
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksLawyer;
