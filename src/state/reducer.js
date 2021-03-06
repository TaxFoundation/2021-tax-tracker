import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import sources from "../generatedData/sources.json";
import bills from "../generatedData/bills.json";
import topics from "../generatedData/topics.json";

const initialState = {};
sources.forEach((source) => (initialState[source.id] = source.active));
bills.map((bill) => (initialState[bill.id] = true));
topics.map((topic) => (initialState[topic.id] = true));

const toggleSubset = (subset, state) => {
  let toggleDirection = true;
  subset.forEach((entry) => {
    if (state[entry.id]) {
      toggleDirection = false;
    }
  });
  const newEntryValues = {};
  subset.forEach((entry) => (newEntryValues[entry.id] = toggleDirection));
  return { ...state, ...newEntryValues };
};

const reducer = (state, action) => {
  switch (action.id) {
    case "toggleSource": {
      return toggleSubset(
        sources.filter((source) => source.running),
        state
      );
    }
    case "toggleSources": {
      return toggleSubset(sources, state);
    }
    case "toggleBills": {
      return toggleSubset(bills, state);
    }
    case "toggleTopics": {
      return toggleSubset(topics, state);
    }
    default: {
      const newValue = !state[action.id];
      return { ...state, [action.id]: newValue };
    }
  }
};

export const Context = createContext();

export const Provider = ({ children }) => {
  const [data, updateData] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ data, updateData }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any,
};
