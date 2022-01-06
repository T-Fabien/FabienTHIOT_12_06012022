import React from "react";
import { LineChart, Line, XAxis, Tooltip} from "recharts";


// French Days
const daysOfWeek = ['L' ,'M', 'M', 'J' , 'V', 'S','D'];

// Custom Hover Graph
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="weight">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

class Objectives extends React.Component {
  render() {
    
    return (
      <div className="objectifs-graph">
        <h2>Durée moyenne des sessions</h2>
        <LineChart
        width={330}
        height={260}
          data={this.props.sessiondata.data.sessions}
          margin={{ top: 5, right: 25, left: 15, bottom: 5 }}
        >
          <XAxis dataKey="day" type="category" stroke="#fff" axisLine={false} tickLine={false} tickFormatter={day => daysOfWeek[day-1]} />
          <Tooltip content={<CustomTooltip />}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} activeDot={{ r: 2 }} />
        </LineChart>
        </div>
        
    );
  }
}

export default Objectives;
