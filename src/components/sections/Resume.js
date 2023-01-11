import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2013 - Present</div>
                <div className="name">Art Director</div>
                <div className="company">Facebook Inc.</div>
                <p>
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2011 - 2012</div>
                <div className="name">Front-end Developer</div>
                <div className="company">Google Inc.</div>
                <p>
                  Monitored technical aspects of the front-end delivery for
                  several projects.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer</div>
                <div className="company">Abc Inc.</div>
                <p>Optimize website performance using latest technology.</p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2006 - 2008</div>
                <div className="name">Art University</div>
                <div className="company">New York</div>
                <p>
                  {`Bachelor's`} Degree in Computer Science ABC Technical
                  Institute, Jefferson, Missouri
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2005 - 2006</div>
                <div className="name">Programming Course</div>
                <div className="company">Paris</div>
                <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
              </div>
              <div className="resume-item">
                <div className="date">2004 - 2005</div>
                <div className="name">Web Design Course</div>
                <div className="company">London</div>
                <p>
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;

export const ResumeSectionFitness = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">
        <div className="first-letter">Resume</div>
      </div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Fitness Trainer</div>
              <div className="company">Gym Club</div>
              <p>
                Inspired clients to push their hardest and do their very best.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Cardio Trainer</div>
              <div className="company">High-Intensity Complex</div>
              <p>
                Dynamic sculpting exercises for the perfect balance of cardio
                and strength training.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">Pace University</div>
              <div className="company">New York</div>
              <p>
                Pace University is a private university with its main campus in
                New York City.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Fitness Course</div>
              <div className="company">London</div>
              <p>Personal trainer and fitness instructor courses in London.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const ResumeSectionLawyer = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Özgeçmiş</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Deneyim</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <p>
                Danışmanlığa başlamadan önce yaklaşık 30 yıl çeşitli firmalarda
                sırası ile mühendislik, orta düzey yöneticilik ve üst düzey
                yöneticilik kadrolarında bulundum. Çalıştığım firmalarda
                maksimum verimlilik, kalite, hizmet ve karlılığı elde etmek için
                kuruluş faaliyetlerinin genel gelişimi, performansı ve
                sürdürülmesi, kuruluşun genel performansını yönlendirmek üzere
                çalışmalarda bulundum. Uluslararası dev firmalarda yurt içinde
                dışında uzunca bir süre çalıştığımdan genelde yabancı firmalar
                ile iletişimin yürütülmesini üstlendim. Üretimin ve Ür-Ge’nin
                içinde bir mühendis olarak süreçleri başta bizzat yürüttüm,
                ilerleyen yıllar ile birlikte kadrolar yönettim ve nihayetinde
                tüm tecrübelerin birleşimi ile firmaların operasyonel
                süreçleriniden ve üst yönetiminden sorumlu oldum.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Eğitim</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="name">Yıldız Teknik Üniversitesi (YTÜ)</div>
              <div className="company">Makine Mühendisliği</div>
            </div>
            <div className="resume-item border-line-h">
              <div className="name">Marmara Çağdaş Bilimler Enstitüsü</div>
              <div className="company">
                University of Maine Business School, LaSalle University School
                of Bus. Administration ortak MBA programı
              </div>
            </div>
            <div className="resume-item border-line-h">
              <div className="name">İstanbul Ticaret Üniversitesi</div>
              <div className="company">Dış Ticaret ve Pazarlama Yönetimi</div>
            </div>
            <div className="resume-item border-line-h">
              <div className="name">TUV NORD CERT GmbH</div>
              <div className="company">Makina Emniyet Uzmanı</div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const ResumeSectionWritter = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Writer Director</div>
              <div className="company">DBBooks</div>
              <p>
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Team Leader</div>
              <div className="company">ABC Inc.</div>
              <p>
                A team leader is responsible for guiding a group of employees as
                they complete a project.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2009 - 2010</div>
              <div className="name">Business Writer</div>
              <div className="company">Writer Corporation.</div>
              <p>Corporate writing is writing for business purposes.</p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">New York University</div>
              <div className="company">New York</div>
              <p>
                New York University offers 2 Creative Writing Degree programs.
                {`It's`} a large private university in a large city.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Writing Course</div>
              <div className="company">London</div>
              <p>
                Creative writing short courses is taught at City, University of
                London. Develop writing skills with professional and published
                authors.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2004 - 2005</div>
              <div className="name">New York School</div>
              <div className="company">Brooklyn, NY, United States</div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const ResumeSectionMusician = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2018 - Present</div>
              <div className="name">Schenectady Symphony Orchestra</div>
              <div className="company">New York</div>
              <p>Third chair, first violin section.</p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2016 - 2018</div>
              <div className="name">Utica Symphony Orchestra</div>
              <div className="company">New York</div>
              <p>
                First violin section; orchestra is currently without contract.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2014 - 2016</div>
              <div className="name">Frequent freelance</div>
              <div className="company">New York</div>
              <p>
                Work in: New York Capital Region for Cohoes Music Hall, Hubbard
                Hall Opera Theater.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2014</div>
              <div className="name">Peabody Institute</div>
              <div className="company">Baltimore</div>
              <p>
                M.M. in Performance, Peabody Institute {`–`} Baltimore, MD 2015.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2008 - 2011</div>
              <div className="name">American University</div>
              <div className="company">Washington</div>
              <p>
                B.A. in Music, American University {`–`} Washington, D.C. 2012.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2000 - 2008</div>
              <div className="name">New York School of Music</div>
              <div className="company">New York</div>
              <p>Great school! The teachers really care about the students.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export const ResumeSectionClassic = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="ion ion-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Art Director</div>
              <div className="company">Facebook Inc.</div>
              <p>
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Front-end Developer</div>
              <div className="company">Google Inc.</div>
              <p>
                Monitored technical aspects of the front-end delivery for
                several projects.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2009 - 2010</div>
              <div className="name">Senior Developer</div>
              <div className="company">Abc Inc.</div>
              <p>Optimize website performance using latest technology.</p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="ion ion-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">Art University</div>
              <div className="company">New York</div>
              <p>
                {`Bachelor's`} Degree in Computer Science ABC Technical
                Institute, Jefferson, Missouri
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Programming Course</div>
              <div className="company">Paris</div>
              <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
            </div>
            <div className="resume-item">
              <div className="date">2004 - 2005</div>
              <div className="name">Web Design Course</div>
              <div className="company">London</div>
              <p>
                Converted Photoshop layouts to web pages using HTML, CSS, and
                JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
