import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import logo from "./icon.png"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
      <div className={`${css.name}`}><img src={logo} width="15%" alt="ВЕРОС"/>Автокомплекс "ВЕРОС"</div>

        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#">УСЛУГИ</a>
          </li>
          <li>
            <a href="#">ЧИП ТУНИНГ</a>
          </li>
          <li>
            <a href="#">ПЪТНА ПОМОЩ</a>
          </li>
          <li>
            <a href="#">КОНТАКТИ</a>
          </li>
          <li  className={`flexCenter ${css.phone}`}>
          <a href="tel:+359894335652"><p>0894335652</p></a>
 
          <a href="tel:+359894335652"><BiPhoneCall size={"40px"} /></a>
          </li>
        </ul>
        <div
          onClick={() => setMenuOpened((prev) => !prev)}
          className={` ${css.menuIcon}`}
        >
          <BiMenuAltRight size={32} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;