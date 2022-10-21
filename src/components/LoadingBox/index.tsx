import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.less";

interface IProps {}

class LoadingBox extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className="flex justify-center items-center text-6xl loading animate-spin">
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    );
  }
}

export default LoadingBox;
