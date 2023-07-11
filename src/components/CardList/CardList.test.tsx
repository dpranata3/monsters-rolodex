import { shallow } from "enzyme";

import CardList from "./CardList";
import { Monster } from "../../utils/types";

const mockMonsters: Monster[] = [
  {
    id: 1,
    name: "Mocking Bird",
    email: "mockme@mail.com",
  },
];

it("expect to render CardList component", () => {
  expect(shallow(<CardList monsters={mockMonsters} />)).toMatchSnapshot();
});
