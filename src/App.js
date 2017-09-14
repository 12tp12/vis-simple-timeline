import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import vis from 'vis';
import './App.css';
import Task from './Task/index';
import Goal from './Goal/index';
import '../node_modules/vis/dist/vis.min.css';
var tasks = [
  {
    id: 1,
    content: "Task One",
    group: 1,
    start: new Date("04-09-2017"),
    end: new Date("04-21-2017")
  },
  {
    id: 2,
    content: "Task Two",
    group: 2,
    start: new Date("04-05-2017"),
    end: new Date("04-09-2017")
  },
  {
    id: 3,
    content: "Task three",
    group: 1,
    start: new Date("04-02-2017"),
    end: new Date("04-05-2017")
  },
  {
    id: 4,
    content: "Task four",
    group: 1,
    start: new Date("04-04-2017"),
    end: new Date("04-07-2017")
  }
]

var goals = [
  {
    id: 1,
    content: "Phase One"
  },
  {
    id: 2,
    content: "Phase Two"
  }
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
        return ReactDOM.render(<Task item={item} />, element);
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
