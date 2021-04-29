import React from "react";
import PropTypes from "prop-types";

import CandidateSelect from "./candidateSelect";
import Button from "../ui/button";
import { StyledUnorderedList, StyledListItem } from "../ui/list";
import { alphabeticalSort } from "../../utilities";

const SelectionGroup = ({ id, candidates }) => (
  <>
    <StyledUnorderedList>
      {candidates.map((candidate) => (
        <StyledListItem key={`${candidate.id}-select`}>
          <CandidateSelect candidate={candidate} />
        </StyledListItem>
      ))}
      <StyledListItem>
        <Button id={id}>Select / Deselect All</Button>
      </StyledListItem>
    </StyledUnorderedList>
  </>
);

const CandidatesSelect = ({ candidates }) => (
  <>
    <SelectionGroup
      id="toggleSource"
      candidates={candidates.sort((a, b) => alphabeticalSort(a.name, b.name))}
    />
  </>
);

SelectionGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.object),
};

CandidatesSelect.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.object),
};

export default CandidatesSelect;
