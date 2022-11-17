import { useCallback, useEffect, useRef } from "react";
import logotype from "./assets/Logotype.svg";
import closeIcon from "./assets/Close.svg";
import CustomSelect from "../Select/CustomSelect";
import { selectsData } from "../../helpers/selectsData";
import "./SideMenu.css";

const SideMenu = ({ visiable, setVisiable }) => {
  const sideMenu = useRef();
  const data = selectsData;

  const hideSideMenu = useCallback(
    (e) => {
      if (e.target.getAttribute("alt") === "menuBtn") {
        setVisiable(true);
      } else if (!sideMenu.current.contains(e.target)) {
        setVisiable(false);
      }
    },
    [setVisiable]
  );

  document.addEventListener("click", hideSideMenu);

  useEffect(
    () => () => document.removeEventListener("click", hideSideMenu),
    [hideSideMenu]
  );

  const classlist = ["sideMenuContainer"];
  visiable && classlist.push("sideActive");

  return (
    <div ref={sideMenu} className={classlist.join(" ")}>
      <div className="headContainer">
        <picture>
          {/* <source srcSet={logotype2} media="(max-width: 575px)" /> */}
          <img width={160} height={24} alt="img" src={logotype} />
        </picture>
        <picture>
          {/* <source srcSet={closeIcon} media="(max-width: 575px)" /> */}
          <img
            className="closeBtn"
            alt="img"
            src={closeIcon}
            onClick={() => setVisiable(false)}
          />
        </picture>
      </div>

      <div>
        {data.map((item) => (
          <CustomSelect key={item.id} item={item} mobSize={true} />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
