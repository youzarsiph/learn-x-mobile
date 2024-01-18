import React from "react";
import renderer from "react-test-renderer";

import Course from "../Course";

it(`renders correctly`, () => {
  const tree = renderer.create(<Course />).toJSON();

  expect(tree).toMatchSnapshot();
});
