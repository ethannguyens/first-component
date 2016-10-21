/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import FirstComponent from "src/components/first-component";

describe("components/first-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<FirstComponent />);
      expect(component).to.not.be.null;
    });

  });

});
