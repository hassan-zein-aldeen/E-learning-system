import Mylogo from "../../imgs/logo.png";
import "./user.css";
import Button from "../../components/Button";

function User() {

  const path = () => {
    window.location.href = "http://localhost:3000";
    localStorage.clear();
  }

  return (
    <div className="newBody">
      <div className="newContent">
        <div className="logo">
          <img id="logo" src={Mylogo} alt="logo.png" />
        </div>
        <div className="right">
          <Button onClick={path}>Logout</Button>
        </div>
      </div>
      <div id="results">
        <div className="leftbar">
          <a className="linkClasses">View Classes</a>
          <a className="linkFiles">View Files</a>
        </div>
        <div className="rightbar"></div>
      </div>
    </div>
  );
}

export default User;