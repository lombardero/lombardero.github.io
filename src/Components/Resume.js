import React, { Component } from "react";
import Markdown from 'react-markdown'

class Resume extends Component {

  render() {
    var src = "# This is markdown document"

    return (
      <div>
        {/* <Markdown children={src} /> */}
      </div>
    )
  }
}

export default Resume;
