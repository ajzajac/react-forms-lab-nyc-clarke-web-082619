import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

 
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.setState({message: event.target.value})} value={this.state.message} type="text" name="message" id="message" />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
