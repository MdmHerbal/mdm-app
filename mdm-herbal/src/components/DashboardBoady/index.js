import "./index.css";

import DashBoardCatlog from "../DashBoardCatlog";

const DashboardBoady = () => {
  const carouselItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <DashBoardCatlog items={carouselItems} />;
    </div>
  );
};

export default DashboardBoady;
