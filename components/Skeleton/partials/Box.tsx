import React from "react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import { IBox, IBoxStyledProp } from "../skeleton.types";

const animation = keyframes`
  0% {
    opacity: 1 
  }
  50% {
    opacity: .2
  }
  100% {
    opacity: 1
  }
`;

const BoxStyle = styled.div<IBoxStyledProp>`
  width: ${({ width }) => width || 100}px;
  height: ${({ height }) => height || 10}px;
  margin-top: ${({ mt }) => mt || 10}px;
  margin-bottom: ${({ mb }) => mb || 10}px;
  margin-right: ${({ mr }) => mr || 10}px;
  margin-left: ${({ ml }) => ml || 10}px;
  background-color: #ddd;
  animation: ${animation} 0.8s linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
  border-radius: 4px;
`;

const Box: React.FC<IBox> = ({ ...props }) => <BoxStyle {...props} />

export default Box;