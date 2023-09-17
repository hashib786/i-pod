import Time from "./Time";

const ScreenNav = () => {
  return (
    <div className="screen__nav">
      <div className="nav__left">
        <Time />
      </div>
      <div className="nav__right">
        <img
          src="https://img.icons8.com/?size=256&id=48310&format=png"
          alt="battery img"
        />
      </div>
    </div>
  );
};

export default ScreenNav;
