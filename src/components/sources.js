import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Context } from "../state/reducer";
import Source from "./source";
import { alphabeticalSort } from "../utilities";

const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media print {
    display: block;
  }
`;

const Sources = ({ sources, plans }) => {
  const { data } = useContext(Context);
  console.log(plans, data);
  const activePlans = plans.filter(
    (plan) => data[plan.topic] && data[plan.bill]
  );
  return (
    <Container>
      {sources.map(
        (source) =>
          data[source.id] && (
            <section key={`${source.id}-plans`}>
              <Source
                source={source}
                plans={activePlans.filter((plan) => plan.source === source.id)}
              />
            </section>
          )
      )}
    </Container>
  );
};

export default Sources;

Sources.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.object),
  plans: PropTypes.arrayOf(PropTypes.object),
};
