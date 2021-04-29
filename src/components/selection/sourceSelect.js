import React from "react";
import PropTypes from "prop-types";

import Button from "../ui/button";

const SourceSelect = ({ source }) => (
  <Button id={source.id}>{source.name}</Button>
);

SourceSelect.propTypes = {
  source: PropTypes.object,
};

export default SourceSelect;
