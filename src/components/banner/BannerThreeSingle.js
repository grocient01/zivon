import PropTypes from "prop-types";
import clsx from "clsx"
import { Link } from "react-router-dom";

const BannerThreeSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner-2", spaceBottomClass)}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="banner-content-2">
        <h3 className="text-white">{data.title}</h3>
        <h4 className="text-[#ffeb00] " style={{color:"#ffeb00"}}>
          {data.subtitle} <br/>{data.price}
        </h4>
        <Link to={process.env.PUBLIC_URL + data.link}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerThreeSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BannerThreeSingle;
