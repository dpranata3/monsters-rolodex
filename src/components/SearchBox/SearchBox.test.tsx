import { shallow } from "enzyme";

import SearchBox from "./SearchBox";

describe("SearchBox test suite", () => {
  const mockSearchFn = jest.fn();
  it("expect to render SearchBox component", () => {
    expect(
      shallow(<SearchBox onSearchChange={mockSearchFn} />)
    ).toMatchSnapshot();
  });
});
