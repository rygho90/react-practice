import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { taskList } = this.props
    return (
        <div>
            {taskList.map(task => `${task}<br>`)}
        </div>
    )
  }
}

export default Overview;
