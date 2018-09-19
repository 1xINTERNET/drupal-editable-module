import { connect } from "react-redux";
import { isDev } from "../utils";
import { selectResources } from "../selectors";

const DataSet = ({ children, loading, resources, error }) => {
  const resourcesArray = Array.isArray(resources) ? resources : [resources];
  return children(resourcesArray, loading, error);
};

DataSet.defaultProps = {
  loading: false,
  resources: [],
  error: null
};

if (isDev) {
  const PropTypes = require("prop-types");
  DataSet.propTypes = {
    children: PropTypes.func.isRequired,
    loading: PropTypes.boolean,
    resources: PropTypes.oneOfType([PropTypes.Array, PropTypes.Object]),
    error: PropTypes.string
  };
}

const DataSetContainer = connect((state, props) => ({
  resources: selectResources(state, props)
}))(DataSet);

export { DataSetContainer as DataSet, DataSet as DataSetPresentational };
