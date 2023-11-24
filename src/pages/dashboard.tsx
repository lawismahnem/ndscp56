import Menu from "../components/Dasboard/Menu";
import Records from "../components/Dasboard/Records";

function DashBoard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-menu">
        <Menu />
      </div>
      <div className="dasboard-body-container">
        display contribution
        <Records />
      </div>
    </div>
  );
}

export default DashBoard;
