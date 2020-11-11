import React from "react";

const UpdateComp = OriginalComp => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComp name="The User" />
    }
  }
  return NewComponent
};

export default UpdateComp;