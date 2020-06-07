import React from "react";
import Panel from "./components/Panel";
import CurrentDay from "./components/CurrentDay";
import data from "./services/data";
import data2 from "./services/data2";
import "./stylesheets/App.scss";
import Footer from "./components/Footer";
import Phases from "./components/Phases";

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();

    this.state = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDay(),
      date: today.getDate(),
      results: data,
      resultsb: data2[0],
      phase: "--",
      city: "",
      activities: [],
      other: "",
      isRefsOpen: false,
    };

    this.getCity = this.getCity.bind(this);
    this.openRR = this.openRR.bind(this);
    this.closeRR = this.closeRR.bind(this);
  }

  componentDidMount() {
    const { month, day } = this.state;

    if (month === 1) {
      this.setState({ month: "enero" });
    } else if (month === 2) {
      this.setState({ month: "febrero" });
    } else if (month === 3) {
      this.setState({ month: "marzo" });
    } else if (month === 4) {
      this.setState({ month: "abril" });
    } else if (month === 5) {
      this.setState({ month: "mayo" });
    } else if (month === 6) {
      this.setState({ month: "junio" });
    } else if (month === 7) {
      this.setState({ month: "julio" });
    } else if (month === 8) {
      this.setState({ month: "agosto" });
    } else if (month === 9) {
      this.setState({ month: "septiembre" });
    } else if (month === 10) {
      this.setState({ month: "octubre" });
    } else if (month === 11) {
      this.setState({ month: "noviembre" });
    } else {
      this.setState({ month: "diciembre" });
    }

    if (day === 1) {
      this.setState({ day: "lunes" });
    } else if (day === 2) {
      this.setState({ day: "martes" });
    } else if (day === 3) {
      this.setState({ day: "miércoles" });
    } else if (day === 4) {
      this.setState({ day: "jueves" });
    } else if (day === 5) {
      this.setState({ day: "viernes" });
    } else if (day === 6) {
      this.setState({ day: "sábado" });
    } else if (day === 0) {
      this.setState({ day: "domingo" });
    }
  }

  getCity(value) {
    const { resultsb, date, month, results } = this.state;
    const arrays = Object.entries(resultsb);
    const result = arrays.find((array) => array[0] === value);
    const activity = Object.entries(result[1]);
    const activityList = Object.entries(results);

    console.log(date, month);
    if (
      date >= activity[0][1].dia &&
      date < activity[1][1].dia &&
      month === activity[0][1].mes
    ) {
      this.setState({
        city: value,
        phase: 0,
        activities: activityList[0][1].actividades,
      });
    } else if (date >= activity[1][1].dia && month === activity[1][1].mes) {
      this.setState({
        city: value,
        phase: 1,
        activities: activityList[1][1].actividades,
      });
    } else if (date < activity[2][1].dia && month === activity[2][1].mes) {
      this.setState({
        city: value,
        phase: 1,
        activities: activityList[1][1].actividades,
      });
    } else if (date >= activity[2][1].dia && month === activity[2][1].mes) {
      this.setState({
        city: value,
        phase: 2,
        activities: activityList[2][1].actividades,
      });
    } else if (date < activity[3][1].dia && month === activity[3][1].mes) {
      this.setState({
        city: value,
        phase: 2,
        activities: activityList[2][1].actividades,
      });
    } else if (date >= activity[3][1].dia && month === activity[3][1].mes) {
      this.setState({
        city: value,
        phase: 3,
        activities: activityList[3][1].actividades,
      });
    } else {
      this.setState({ city: value, phase: 4, activities: "nueva normalidad" });
    }

    if (activity[0][1].info !== undefined) {
      this.setState({ other: activity[0][1].info });
    } else {
      this.setState({ other: "" });
    }
  }

  openRR() {
    this.setState((prevState) => {
      return {
        isRefsOpen: !prevState.isRefsOpen,
      };
    });
  }

  closeRR() {
    this.setState((prevState) => {
      return {
        isRefsOpen: !prevState.isRefsOpen,
      };
    });
  }

  render() {
    const {
      year,
      month,
      date,
      day,
      phase,
      activities,
      city,
      other,
      isRefsOpen,
      results,
    } = this.state;

    return (
      <div className="App">
        <CurrentDay month={month} date={date} day={day} year={year} />
        <Phases results={results} />
        <Panel
          month={month}
          date={date}
          day={day}
          phase={phase}
          city={city}
          activities={activities}
          getCity={this.getCity}
          other={other}
          isRefsOpen={isRefsOpen}
          openRR={this.openRR}
          closeRR={this.closeRR}
        />
        <Footer
          isRefsOpen={isRefsOpen}
          openRR={this.openRR}
          closeRR={this.closeRR}
        />
      </div>
    );
  }
}

export default App;
