import React from "react";
import {
  getInfosUser,
  getUserActivity,
  getUserAverage,
  getUserPerformance,
} from "../../api/services";

import Header from "../../components/Header/header";
import Weight from "../../components/Weight/weight";
import Objectives from "../../components/Objectives/objectives";
import Radar_ from "../../components/Radar/radar";
import Nutrients from "../../components/Nutrients/nutrients";
import KPI from "../../components/KPI/kpi";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInformation: null,
      userActivity: null,
      userAvarage: null,
      userPerformance: null,
      isError: false,
      isDataLoading: false,
    };
  }

  // Get User Data
  componentDidMount() {
    const id = window.location.pathname.substring(6,8);
        // Try to get all info
        Promise.all([
          // Global Info
          getInfosUser(id).then((dataInfo) => {
            this.setState({userInformation: dataInfo});
          }),
          // Activity Info
          getUserActivity(id).then((dataActivity) => {
            this.setState({userActivity : dataActivity});
          }),
          // Session Info
          getUserAverage(id).then((dataAverage) => {
            this.setState({userAvarage : dataAverage});
          }),
          // Performance Info
          getUserPerformance(id).then((dataPeroformance) => {
            this.setState({userPerformance : dataPeroformance});
          }),
          // getuser
        ])
        // Set the Loading to true
          .then((resp) => {
            this.setState({isDataLoading : true});
          })
          // Set the error to true if there is an error
          .catch((err) => {
            this.setState({isError : true});
            console.log(
              "Serveur en maintenance, Merci de ressayer ulterieurement :" + err
            );
          });
  }

  render() {
    // Put "loading" if there is an error or a null
    if (this.state.isError || this.state.userInformation == null || this.state.userActivity == null || this.state.userAvarage == null || this.state.userPerformance == null ) {
      return <div className="main"> Loading ...</div>;
    } else {
      return (
        <div className="main">
          <Header firstname={this.state.userInformation.data.userInfos.firstName} />
          <div className="summary">
            <section className="summary__left">
              <Weight weightdata={this.state.userActivity}/>
              <div className="graph">
                <Objectives sessiondata={this.state.userAvarage}/>
                <Radar_ sessiondata={this.state.userPerformance}/>
                <KPI scoredata={this.state.userInformation.data.score} todayscoredata={this.state.userInformation.data.todayScore}/>
              </div>
            </section>
            <section className="summary__right">
              <Nutrients
                type="Calories"
                number={this.state.userInformation.data.keyData.calorieCount}
                unit=" kCal"
                svg_width="17"
                svg_height="20"
                svg_viewBox="0 0 17 20"
                path_d="M10.905 7.86625C10.905 7.86625 11.8375 2.38125 8.03249 0C7.91784 1.90607 6.99682 3.6731 5.49999 4.85875C3.87499 6.2875 0.81874 9.5 0.85124 12.925C0.827424 15.9116 2.49913 18.6534 5.16499 20C5.25931 18.6645 5.88737 17.4233 6.90749 16.5562C7.77187 15.8915 8.33304 14.9074 8.46499 13.825C10.7407 15.0348 12.2125 17.3521 12.34 19.9263V19.9425C14.8552 18.7904 16.5109 16.3241 16.625 13.56C16.895 10.3425 15.1325 5.9675 13.5687 4.5375C12.9784 5.85556 12.0615 7.00126 10.905 7.86625Z"
                path_fill="#FF0000"
              />
              <Nutrients
                type="Proteines"
                number={this.state.userInformation.data.keyData.proteinCount}
                unit="g"
                svg_width="19"
                svg_height="19"
                svg_viewBox="0 0 19 19"
                path_d="M18.2353 2.47058C17.8824 2.11764 17.4118 1.88234 17.0588 1.88234C16.9412 1.41176 16.8235 1.05881 16.4706 0.705873C15.6471 -0.117656 14.2353 -0.117656 13.4118 0.705873C12.7059 1.41176 12.5882 2.58823 13.1765 3.41176L10.5882 5.88234L9.29412 4.58823L6.70588 7.17646C6.47059 7.05881 6.11765 7.05881 5.88235 7.05881C2.58824 7.05881 0 9.64705 0 12.9412C0 16.2353 2.58824 18.8235 5.88235 18.8235C9.17647 18.8235 11.7647 16.2353 11.7647 12.9412C11.7647 12.7059 11.7647 12.3529 11.6471 12.1176L14.2353 9.5294L12.9412 8.23528L15.4118 5.7647C16.2353 6.35293 17.4118 6.23529 18.1176 5.5294C19.0588 4.70587 19.0588 3.29411 18.2353 2.47058Z"
                path_fill="#4AB8FF"
              />
              <Nutrients
                type="Glucides"
                number={this.state.userInformation.data.keyData.carbohydrateCount}
                unit="g"
                svg_width="18"
                svg_height="20"
                svg_viewBox="0 0 18 20"
                path_d="M13.015625 0 C 11.901925 0.07625 10.599161 0.78523438 9.8378906 1.7089844 C 9.1478906 2.5477344 8.5795313 3.79125 8.8007812 5 C 10.017001 5.0375 11.274559 4.3105469 12.005859 3.3730469 C 12.688359 2.4980469 13.204425 1.2625 13.015625 0 z M 5.9160156 5.9082031 C 5.8465745 5.9082031 5.7768532 5.9118687 5.7070312 5.9160156 C 5.6514334 5.9136176 5.5963052 5.9101562 5.5390625 5.9101562 C 4.1265625 5.9101562 2.6250781 6.7661719 1.6738281 8.2324219 C 0.33507713 10.293722 0.56242087 14.171563 2.7324219 17.476562 C 3.5099219 18.659063 4.5460937 19.9875 5.9023438 20 C 5.9923932 20.000844 6.0768877 19.997576 6.1582031 19.990234 C 6.1939566 19.992606 6.229498 19.997714 6.265625 19.998047 C 7.4279515 20.008947 7.7607387 19.271131 9.25 19.226562 C 10.739988 19.270878 11.07183 20.008949 12.234375 19.998047 C 12.270501 19.997714 12.306045 19.992606 12.341797 19.990234 C 12.423112 19.997576 12.507607 20.000844 12.597656 20 C 13.953956 19.9875 14.990078 18.659063 15.767578 17.476562 C 17.937578 14.171563 18.164872 10.293722 16.826172 8.2324219 C 15.874872 6.7661719 14.373438 5.9101562 12.960938 5.9101562 C 12.90436 5.9101562 12.849892 5.9136718 12.794922 5.9160156 C 12.725102 5.9118687 12.655376 5.9082031 12.585938 5.9082031 C 11.012897 5.9082031 10.298533 6.6154106 9.25 6.6914062 C 8.2025248 6.6146882 7.4880958 5.9082031 5.9160156 5.9082031"
                path_fill="#FDCC0C"
              />
              <Nutrients
                type="Lipides"
                number={this.state.userInformation.data.keyData.lipidCount}
                unit="g"
                svg_width="20"
                svg_height="19"
                svg_viewBox="0 0 20 19"
                path_d="M8.75 0 C 4.625 0 1.25 3.375 1.25 7.5 L 18.75 7.5 C 18.75 3.375 15.375 0 11.25 0 L 8.75 0 z M 7.5 2.5 C 8.25 2.5 8.75 3 8.75 3.75 C 8.75 4.5 8.25 5 7.5 5 C 6.75 5 6.25 4.5 6.25 3.75 C 6.25 3 6.75 2.5 7.5 2.5 z M 1.25 10 C 0.5 10 0 10.5 0 11.25 C 0 12 0.5 12.5 1.25 12.5 L 18.75 12.5 C 19.5 12.5 20 12 20 11.25 C 20 10.5 19.5 10 18.75 10 L 1.25 10 z M 1.25 15 C 1.25 17.125 2.875 18.75 5 18.75 L 15 18.75 C 17.125 18.75 18.75 17.125 18.75 15 L 1.25 15"
                path_fill="#FD5181"
              />
            </section>
          </div>
        </div>
      );
    }
  }
}

export default Home;
