import React from "react";
import { shallow } from "enzyme";
import FormLogin from "../components/FormLogin";
import {it} from "@jest/globals";


it('renders without crashing', () => {
    const myComponent = shallow(<FormLogin />);
    expect(myComponent.find('p')).toHaveLength(1)
});