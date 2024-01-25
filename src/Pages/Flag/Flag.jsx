import "./Flag.css";

const Flag = () => {
  return (
    <div className="Main-Container">
      <marquee behavior="alternate" direction="left">
        <span className="span1">2</span>
        <span>6</span> <span className="span3">J</span>
        <span className="span1">a</span>
        <span>n</span>
        <span className="span3">u</span>
        <span className="span1">a</span>
        <span>r</span>
        <span className="span3">y</span> <span className="span1">2</span>
        <span>0</span>
        <span className="span3">2</span>
        <span className="span1">4</span>
      </marquee>
      <div className="Flag-Container">
        <div className="Flag-Main">
          <div className="stand-Box">
            <div className="stand"></div>
            <div className="bottom1"></div>
            <div className="bottom2"></div>
            <div className="bottom3"></div>
          </div>
          <div className="Flag-Box">
            <div className="Flag-orange"></div>
            <div className="Flag-white">
              <div className="wheel">
                <div className="wheel-1"></div>
                <div className="wheel-2"></div>
                <div className="wheel-3"></div>
                <div className="wheel-4"></div>
                <div className="wheel-5"></div>
                <div className="wheel-6"></div>
                <div className="wheel-7"></div>
                <div className="wheel-8"></div>
                <div className="wheel-9"></div>
                <div className="wheel-10"></div>
                <div className="wheel-11"></div>
                <div className="wheel-12"></div>
              </div>
            </div>
            <div className="Flag-green"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flag;
