import { useState } from "react";

import autocompletehandler from "./autocompletehandler";

export const ManageInput = (
  citiesList,
  setShowCities,
  setrenderAutocompleteList,
  initialValue,
  updateSearchTerm
) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        if (event.target.value.length > 0) {
          updateSearchTerm(event.target.value);
          setShowCities(autocompletehandler(event.target.value, citiesList));
          setrenderAutocompleteList(true);
          setValue(event.target.value);
        } else {
          updateSearchTerm("");
          setValue("");
          setrenderAutocompleteList(false);
        }
      },
    },
  };
};
