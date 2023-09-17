import DisplayScreen from "./components/DisplayScreen";
import ScreenNav from "./components/ScreenNav";

const Screen = () => {
  return (
    <div className="screen_container">
      <ScreenNav />
      <DisplayScreen />
    </div>
  );
};

export default Screen;
