import "./Header.css";
import menuBtn from "./assets/Menu.svg";
import searchIcon from "./assets/Search.svg";
import logoIcon from "./assets/Logotype.svg";
import CustomSelect from "../Select/CustomSelect";
import { selectsData } from "../../helpers/selectsData";
import { useCallback, useEffect, useRef, useState } from "react";
import SideMenu from "../SideMenu/SideMenu";

const Header = () => {
  const [data, setData] = useState(selectsData);
  const [visiable, setVisiable] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [classList, setClassList] = useState(["headerContainer"]);
  const [initialValue, setInitialValue] = useState(0);
  const selectsMenu = useRef();

  const handleClick = (id) => {
    setData([
      ...data.map((item) =>
        item.id === id && item.isSelectItem
          ? { ...item, optionsVisiable: !item.optionsVisiable }
          : { ...item, optionsVisiable: false }
      ),
    ]);
  };

  const handleBtnClick = () => {
    setVisiable(true);
  };

  const hideOptionsMenu = useCallback(
    (e) => {
      if (!selectsMenu.current.contains(e.target)) {
        setData([...data.map((item) => ({ ...item, optionsVisiable: false }))]);
      }
    },
    [data, setData]
  );

  document.addEventListener("click", hideOptionsMenu);

  useEffect(
    () => () => document.removeEventListener("click", hideOptionsMenu),
    [hideOptionsMenu]
  );

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
          <div>
            <img className="logoIconHeader" alt="logoIcon" src={logoIcon} />
          </div>
          <div style={{ cursor: "pointer" }}>
            <img alt="searchIcon" src={searchIcon} />
          </div>
        </div>
      </section>
      <section className="menuContainer">
        <div ref={selectsMenu} className="menuItems">
          {data.map((item) => (
            <CustomSelect key={item.id} item={item} handleClick={handleClick} />
          ))}
        </div>
      </section>
      <SideMenu visiable={visiable} setVisiable={setVisiable} />
    </header>
  );
};

export default Header;
