import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

class Radar_ extends React.Component {

  render() {
    const french_kind = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
    return (
        <div className="radar-graph">
        <RadarChart width={330} height={320} cx="49%" cy="50%" outerRadius="70%" data={this.props.sessiondata.data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tickFormatter={i => french_kind[i-1]} stroke='white' fontSize={13}/>
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
        </div>
    );
  }
}
export default Radar_;