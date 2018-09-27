import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { keyframes, css, cx } from "@1xinternet/editable-core";

const rotatingSpinner = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const styles = {
  spinner: css`
    border-radius: 50%;
    width: 1em;
    height: 1em;
    border: 0.25em solid rgba(0, 0, 0, 0.1);
    border-top: 0.25em solid #0074bd;
    transform-origin: center;
    animation: ${rotatingSpinner} 0.8s infinite linear;
    will-change: transform;
  `
};

export class Spinner extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  render() {
    const { className } = this.props;

    return (
      <div
        aria-label="Loading"
        className={cx(styles.spinner, "editable--spinner", className)}
      />
    );
  }
}
