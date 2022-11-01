import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create (<ProfileStatus status="testing status in profile status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("testing status in profile status");
  });

  test("span must be displayed", () => {
    const component = create (<ProfileStatus status="testing status in profile status" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span).not.toBeNull();
  });

  test("span must contain correct status", () => {
    const component = create (<ProfileStatus status="testing status in profile status" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.children[0]).toBe("testing status in profile status");
  });
  
  test("input should be displayed in editMode instead of span", () => {
    const component = create (<ProfileStatus status="testing status in profile status" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("testing status in profile status");
  });
  
})