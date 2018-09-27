import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import { css, cx } from "@1xinternet/editable-core";
import { Spinner } from "./Spinner";

const styles = {
  inputWrapper: css`
    position: relative;
  `,
  spinnerWrapper: css`
    position: absolute;
    right: 0.5em;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 0.75em;
  `
};

export class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password", "number", "date"]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    propPath: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    inputWrapperClassName: PropTypes.string,
    spinnerClassName: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    value: "",
    type: "text",
    placeholder: "",
    label: null,
    propPath: null,
    name: null,
    className: "",
    labelClassName: "",
    inputClassName: "",
    inputWrapperClassName: "",
    spinnerClassName: "",
    loading: false,
    disabled: false
  };

  constructor(props) {
    super(props);

    const { name } = props;
    this.name = name || uniqueId("input_");
  }

  render() {
    const {
      value,
      type,
      onChange,
      placeholder,
      label,
      propPath,
      className,
      labelClassName,
      inputClassName,
      inputWrapperClassName,
      spinnerClassName,
      disabled,
      loading
    } = this.props;
    return (
      <div
        className={cx(
          "form-item editable--form-item editable--form-item--input",
          className
        )}
      >
        {label && (
          <label
            className={cx("editable--label", labelClassName)}
            htmlFor={this.name}
          >
            {label}
          </label>
        )}
        <div
          className={cx(
            "editable--input-wrapper",
            styles.inputWrapper,
            inputWrapperClassName
          )}
        >
          <input
            className={cx(
              "form-text editable--form-text editable--form-text--input",
              inputClassName
            )}
            type={type}
            value={value}
            data-prop-path={propPath}
            placeholder={placeholder}
            onChange={onChange}
            id={this.name}
            disabled={disabled}
          />
          {loading && (
            <div className={styles.spinnerWrapper}>
              <Spinner
                className={cx("editable--spinner--input", spinnerClassName)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
