import { useCallback, useEffect, useRef, useState } from "react";
import logotype from "./assets/Logotype.svg";
import closeIcon from "./assets/Close.svg";
import CustomSelect from "../Select/CustomSelect";
import { selectsData } from "../../helpers/selectsData";
import "./SideMenu.css";

const SideMenu = ({ visiable, setVisiable }) => {
  const [data, setData] = useState(selectsData);
  const sideMenu = useRef();

  const handleClick = (id) => {
    setData([
      ...data.map((item) =>
        item.id === id && item.isSelectItem
          ? { ...item, optionsVisiable: !item.optionsVisiable }
          : { ...item, optionsVisiable: false }
      ),
    ]);
  };

  const hideSideMenu = useCallback(
    (e) => {
      if (e.target.getAttribute("alt") === "menuBtn") {
        setVisiable(true);
      } else if (!sideMenu.current.contains(e.target)) {
        setVisiable(false);
        setData([...data.map((i) => ({ ...i, optionsVisiable: false }))]);
      }
    },
    [setVisiable, data, setData]
  );

  document.addEventListener("click", hideSideMenu);

  useEffect(
    () => () => document.removeEventListener("click", hideSideMenu),
    [hideSideMenu]
  );

  const classlist = ["sideMenuContainer"];
  visiable && classlist.push("sideActive");

  return (
    <div className="cont">
      <div className={classlist.join(" ")}>
        <div className="headContainer">
          <img width={160} height={24} alt="img" src={logotype} />
          <img
            className="closeBtn"
            alt="img"
            src={closeIcon}
            onClick={() => setVisiable(false)}
          />
        </div>

        <div ref={sideMenu}>
          {data.map((item) => (
            <CustomSelect
              key={item.id}
              item={item}
              handleClick={handleClick}
              mobSize={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
