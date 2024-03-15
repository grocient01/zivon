import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
          
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("shop")}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/bike-batteries"}>
                {t("Bike Batteries")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/car-betteries"}>
                {t("Car Batteries")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/toy-batteries"}>
                {t("Toy Batteries")}
              </Link>
            </li>
            
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("collection")}
          </Link>
        </li>
       
       
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
