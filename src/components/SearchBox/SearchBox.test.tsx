import { shallow } from "enzyme";

import SearchBox from "./SearchBox";

describe("SearchBox test suite", () => {
  const mockSearchFn = jest.fn();
  const testSearchState = "test input"

  it("expect to render SearchBox component", () => {
    expect(
      shallow(<SearchBox onSearchChange={mockSearchFn} />)
    ).toMatchSnapshot();
  });

  it("expect search to receive input", () => {
    const wrapper = shallow(<SearchBox onSearchChange={mockSearchFn}/>);

    wrapper
      .find('[id="search-box"]')
      .simulate("change", { target: { value: "test input" } });

    expect(testSearchState).toEqual("test input");
  })
});


