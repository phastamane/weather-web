import { ResponsiveLine} from "@nivo/line";
import {myTheme } from "./operators";
import { useDataStore } from "../../hooks/store";


type MyLineProps = {
  data: {
    id: string
    data: {
      x: string | number,
      y: number 
    }[]
  }[],
  activeButton: number | undefined;
  setActiveButton: (index: number | undefined) => void;
}





const MyLine = ({ data, activeButton, setActiveButton }: MyLineProps) => {
  const setTemp = useDataStore(state => state.setTemp);
  const setHudimity = useDataStore(state => state.setHudimity);
  const setWind = useDataStore(state => state.setWind);

  const buttonsFunc = [setTemp, setHudimity, setWind];
  const buttonsName = ['./temperature.png', './humidity.png', './wind.png'];
  



  return (
    <div className="graph">
      <div className="buttons-div">
        {buttonsName.map((label, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveButton(index);
              buttonsFunc[index]();

            }}
            className={activeButton === index ? 'clicked' : ''}
          >
            {<img src={label} alt="" className="graph-img"/>}
          </button>
        ))}

      </div>

          <ResponsiveLine
        data={data}
        colors="#5DDE95"
        curve="monotoneX"
        margin={{ top: 20, right: 60, bottom: 110, left: 60 }}
        theme={myTheme}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true }}
        axisBottom={{
          tickSize: 4,
          tickPadding: 15,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 30
        }}
        axisLeft={{
          legendOffset: -60,
          tickPadding: 20
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
      />

    </div>
  );
};

      



export default MyLine