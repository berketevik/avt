import ActiveSection from "../activeSection";

const Service = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("service", animationIn, animationOut)}
      id="service"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Service;
