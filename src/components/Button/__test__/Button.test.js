//refer https://codesandbox.io/s/p5egf?file=/src/components/test/Catalogue.test.js
import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import {render,container} from '@testing-library/react'
import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';

it('render without crashing',()=>{
    const div=document.createElement("div");
    ReactDom.render(<Button></Button>,div)
})

it('renders button correctly',()=>{
    const {getByTestId}=render()
    const { container } = render(
        <Button label="labelName">click me</Button>
      );
    const buttonComponent = container.querySelector(".button");
    expect(buttonComponent).toBeInTheDocument();
    expect(buttonComponent).toHaveTextContent("click me")
    //expect(buttonComponent).toHaveLength(1)
})