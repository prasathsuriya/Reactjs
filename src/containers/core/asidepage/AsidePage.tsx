import React, { Component } from "react";

interface IHeaderProps {}

interface IHeaderState {}

class AsidePage extends Component<IHeaderProps, IHeaderState> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>Content Page</h1>
      </div>
    );
  }
}
export default AsidePage;
