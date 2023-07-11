import { shallow } from "enzyme";

import Card from "./Card";
import { Monster } from "../../utils/types";

const mockMonsterData: Monster = {
  id: 1,
  name: "Mocking Bird",
  email: "mockme@mail.com",
};

it("expect to render card component with monster data as props", () => {
  expect(shallow(<Card monster={mockMonsterData} />)).toMatchSnapshot();
});
