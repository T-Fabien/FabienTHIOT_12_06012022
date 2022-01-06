import React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import moment from "moment";

// Custom Hover Graph
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="weight">{`${payload[0].value} kg`}</p>
        <p className="calories">{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }
  return null;
};

class Weight extends React.Component {
  render() {
    return (
      <div className="weight-graph">
        <h2>Activité quotidienne</h2>
        <BarChart
          width={1160}
          height={250}
          data={this.props.weightdata.data.sessions}
          barSize={7}
        >
          <h2>Activité quotidienne</h2>
          <CartesianGrid strokeDasharray="0 0 1" vertical={false} />
          <XAxis dataKey="day" fill="#9B9EAC" fill="#FF0;" tickFormatter={timeStr => moment(timeStr).format('D')}/>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="right"
            iconSize="8"
            iconType="circle"
            payload={[
              { value: "Poids (kg)" },
              { value: "Calories brûlées (kCal)", color: "red" },
            ]}
            verticalAlign="top"
          />
          <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </div>
    );
  }
}

export default Weight;
