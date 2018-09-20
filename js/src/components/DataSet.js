import { connect } from "react-redux";

import { isDev } from "../utils";
import { selectResources } from "../selectors";

const DataSet = ({ children, loading, data, error, doRefetch }) =>
  children({ loading, data, error, doRefetch });

if (isDev) {
  const PropTypes = require("prop-types");
  DataSet.propTypes = {
    children: PropTypes.func.isRequired,
    loading: PropTypes.boolean,
    data: PropTypes.oneOfType([PropTypes.Array, PropTypes.Object]),
    error: PropTypes.string,
    doRefetch: PropTypes.func.isRequired
  };
}

const DataSetContainer = connect((state, props) => ({
  data: selectResources(state, props)
}))(DataSet);

export { DataSetContainer as DataSet, DataSet as DataSetPresentational };
