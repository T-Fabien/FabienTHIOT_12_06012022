import React from "react";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

class Nutrients extends React.Component {
  
  render() {
    return (
      <section className="nutrients">
        <div className="nutrients__logo">
          <a href="" className={'nutrients__' + this.props.type + ' square-icon'}>
            <svg
              width={this.props.svg_width}
              height={this.props.svg_height}
              viewBox={this.props.svg_viewBox}
            >
              <path
                d={this.props.path_d}
                fill={this.props.path_fill}
              />
            </svg>
          </a>
        </div>
        <div className="nutrients__number">
          <h2>{formatNumber(this.props.number)}{this.props.unit}</h2>
          <p>{this.props.type}</p>
        </div>
      </section>
    );
  }
}

export default Nutrients;
