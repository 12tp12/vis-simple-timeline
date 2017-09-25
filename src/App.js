import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import vis from 'vis';
import './App.css';
import Event from './Event/index';
import Goal from './Goal/index';
import '../node_modules/vis/dist/vis.min.css';
var tasks = [
  {
    id: 1,
    group: 1,
    subgroup: 1,
    content: {
      type: "Phone",
      eventInfo: {
        "Call Type": "Emergency",
        "Date/Time": "04-09-2017T04:04:00",
        "Duration" : 20,
        "DNIS": "",
        "ANI": "",
        "Provider": "",
        "Self-Service Intent": "",
        "Self-Service Result": "",
        "Self-Service Exit Met SLA(Yes/No)": "Yes"
      },
      vote: "Up"
    },
    start: new Date("04-09-2017"),
    type: "point",
    className: "display-item"
  },
  {
    id: 2,
    content: "Task Two",
    group: 1,
    subgroup: 1,
    content: {
      type: "Hospital",
      eventInfo: {
        "Event Category": "Emergency",
        "Date/Time": "04-09-2017T04:04:00",
        "Duration" : 20,
        "DNIS": "",
        "ANI": "",
        "Provider": "",
        "Self-Service Intent": "",
        "Self-Service Result": "",
        "Self-Service Exit Met SLA(Yes/No)": "Yes"
      },
      vote: "Down"
    },
    start: new Date("04-05-2017"),
    type: "point",
    className: "display-item"
  },
  {
    id: 3,
    group: 1,
    subgroup: 1,
    start: new Date("04-02-2017"),
    type: "point",
    content: {
      type: "Message",
      eventInfo: {
        "Message Type": "Correspondence",
        "Message Info": "Some Message Info"
      },
      vote: "Up"
    },
    className: "display-item",
  },
]

var goals = [
  {
    id: 1,
    content: "Phase One",
    className:"vis-group-bg",
  },
  /*{
    id: 2,
    content: "Phase Two"
  }*/
]


const prep = (el) => {
  var options = {
    orientation: 'top',
    maxHeight: 400,
    start: new Date("04-01-2017"),
    end: new Date("04-31-2017"),
    editable: true,
    template: function (item, element) {
        if (!item) { return }
        ReactDOM.unmountComponentAtNode(element);
        return ReactDOM.render(<Event item={item} />, element);
    },
    groupTemplate: function(group,element){
      if(!group) {return}
      ReactDOM.unmountComponentAtNode(element);
      return ReactDOM.render(<Goal group={group} />, element);
    }
  };
  var taskSet = new vis.DataSet(tasks);
  var goalSet = new vis.DataSet(goals);
  var timeline = new vis.Timeline(el, taskSet, goalSet, options);
}

class VisTimeline extends Component{
   componentDidMount() {
    var el = document.getElementById("timeline");
    prep(el);
  }
  render(){
    return (
      <div id="timeline"></div>
    );
  }
}

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <VisTimeline />
      </div>
    );
  }
}

export default App;
