import React from "react";

interface IProps {
  children?: React.ReactNode;
}

interface IState {}

class MainLayout extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <div className="flex flex-col justify-start items-center py-10 md:px-5">
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
