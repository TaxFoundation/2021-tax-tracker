import React from "react";
import PropTypes from "prop-types";

import SourceSelect from "./sourceSelect";
import Button from "../ui/button";
import { StyledUnorderedList, StyledListItem } from "../ui/list";
import { alphabeticalSort } from "../../utilities";

const SelectionGroup = ({ id, sources }) => (
  <>
    <StyledUnorderedList>
      {sources.map((source) => (
        <StyledListItem key={`${source.id}-select`}>
          <SourceSelect source={source} />
        </StyledListItem>
      ))}
      <StyledListItem>
        <Button id={id}>Select / Deselect All</Button>
      </StyledListItem>
    </StyledUnorderedList>
  </>
);

const CandidatesSelect = ({ sources }) => (
  <>
    <SelectionGroup
      id="toggleSource"
      sources={sources.sort((a, b) => alphabeticalSort(a.name, b.name))}
    />
  </>
);

SelectionGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(PropTypes.object),
};

CandidatesSelect.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.object),
};

export default CandidatesSelect;
