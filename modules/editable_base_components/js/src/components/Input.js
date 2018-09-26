import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";

export class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password", "number", "date"]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    propPath: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    value: "",
    type: "text",
    placeholder: "",
    label: null,
    propPath: null,
    name: null
  };

  componentDidMount() {
    const { name } = this.props;
    this.name = name || uniqueId("input_");
  }

  render() {
    const { value, type, onChange, placeholder, label, propPath } = this.props;
    return (
      <div className="form-item">
        {label && <label htmlFor={this.name}>{label}</label>}
        <input
          className="form-text"
          type={type}
          value={value}
          data-prop-path={propPath}
          placeholder={placeholder}
          onChange={onChange}
          id={this.name}
        />
      </div>
    );
  }
}
