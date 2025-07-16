import { Line} from "@nivo/line";
import { data, myTheme } from "./operators";
type MyLineProps = {
  data: {
    id: string
    data: {
      x: string
      y: number
    }[]
  }[]
}





const MyLine = ({ data  }: MyLineProps) => (
          <Line
        data={data}
        width={1300}
        height={400}
        margin={{ top: 50, right: 110, bottom: 50, left: 100 }}
        theme={myTheme}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 45 }}
        axisLeft={{ legend: 'count', legendOffset: -60 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
    {
      anchor: 'bottom-right',
      direction: 'column',
      translateX: 100,
      itemWidth: 80,
      itemHeight: 22,
      symbolShape: 'circle'
    }
  ]}
        
/>

)

export default MyLine