import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selectResources } from "../selectors";

export const DataSetPresentational = ({
  children,
  loading,
  data,
  error,
  refetch
}) => children({ loading, data, error, refetch });

DataSetPresentational.propTypes = {
  children: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  error: PropTypes.string,
  refetch: PropTypes.func.isRequired
};

export const DataSet = connect((state, props) => ({
  data: selectResources(state, props)
}))(DataSetPresentational);
