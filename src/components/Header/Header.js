import "./Header.css";
import menuBtn from "./assets/Menu.svg";
import searchIcon from "./assets/Search.svg";
import logoIcon from "./assets/Logotype.svg";
import CustomSelect from "../Select/CustomSelect";
import { selectsData } from "../../helpers/selectsData";
import { useEffect, useState } from "react";
import SideMenu from "../SideMenu/SideMenu";

const Header = ({ visiable, setVisiable }) => {
  const [scrollY, setScrollY] = useState(0);
  const [classList, setClassList] = useState(["headerContainer"]);
  const [initialValue, setInitialValue] = useState(0);

  const data = selectsData;

  const handleBtnClick = () => {
    setVisiable(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkScrollValue = () => {
    if (scrollY > initialValue && scrollY < 400) {
      setClassList(["headerContainer", "sticky"]);
    } else if (scrollY < initialValue) {
      setClassList(["headerContainer", "sticky"]);
    } else {
      setClassList(["headerContainer"]);
    }

    setInitialValue(scrollY);
  };

  window.addEventListener("scroll", checkScrollValue);

  return (
    <header className={classList.join(" ")}>
      <section className="logoContainer">
        <div className="logoItems">
          <div className="menuBtnHeader" onClick={handleBtnClick}>
            <img alt="menuBtn" src={menuBtn} />
          </div>
          <div
            className="logoIconHeader"
            style={{ marginLeft: visiable && "-999px", transition: "0.9s" }}
          >
            <picture>
              <source media="(max-width: 579px)" srcset={logoIcon} />
              <source media="(min-width: 580px)" srcset={logoIcon} />
              <img alt="logoIcon" />
            </picture>
          </div>
          <div className="searchIconHeader">
            <img alt="searchIcon" src={searchIcon} />
          </div>
        </div>
      </section>
      <section className="menuContainer">
        <div className="menuItems">
          {data.map((item) => (
            <CustomSelect key={item.id} item={item} />
          ))}
        </div>
      </section>
      <SideMenu visiable={visiable} setVisiable={setVisiable} />
    </header>
  );
};

export default Header;
