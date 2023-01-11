import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">H</span>akkımda
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">Hakkımda</div>
    </div>
  );
};
