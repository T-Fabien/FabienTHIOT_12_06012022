import React from "react";
import {
  RadialBarChart,
  RadialBar,
} from "recharts";

class KPI extends React.Component {
  render() {
    let score = 0;
    if (this.props.todayscoredata != undefined) {
      score = this.props.todayscoredata;
    } else {
      score = this.props.scoredata;
    }

    const data = [
      { value: 1, fill: "#fbfbfb" },
      { value: score, fill: "#FF0000" },
    ];
    const COLORS = ["#FF0000", "none"];

    return (
      <div className="kpi-graph">
        <h2>Score </h2>
        <h3>{score * 100}%</h3>
        <p> de votre objectif </p>
        <RadialBarChart
          width={500}
          height={300}
          cx={250}
          cy={120}
          innerRadius={0}
          outerRadius={280}
          barSize={12}
          startAngle={180}
          endAngle={-180}
          data={data}
        >
          <RadialBar
            dataKey="value"
          />
        </RadialBarChart>
      </div>
    );
  }
}

export default KPI;
