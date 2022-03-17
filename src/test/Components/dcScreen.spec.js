import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { DcScreen } from "../../Components/DC/DcScreen";

describe("test to DcScreen component", () => {
  const container = shallow(<DcScreen />);
  it("Snapshot to DcScreen component", () => {
    expect(toJson(container)).toMatchSnapshot();
  });
});
