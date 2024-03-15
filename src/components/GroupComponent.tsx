import { FunctionComponent } from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const FrameItem = styled.div`
  height: 44.2px;
  width: 204px;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 34%, rgba(0, 0, 0, 0));
  display: none;
`;
const Unchecked = styled.input`
  margin: 0;
  height: 18px;
  width: 18px;
  position: relative;
  z-index: 1;
`;
const Off = styled.div`
  position: relative;
  font-weight: 600;
`;
const OffWrapper = styled.div`
  border-radius: 2px;
  background-color: #0f172a;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
  white-space: nowrap;
  z-index: 1;
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5999999999999943px 0px 0px;
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 34%, rgba(0, 0, 0, 0));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6.400000000000006px 9px 19.799999999999997px 7px;
  gap: 20px;
  z-index: 1;
`;
const FrameInner = styled.img`
  height: 4.5px;
  width: 31.5px;
  position: relative;
  z-index: 1;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 13px 0px 12.6px;
`;
const RectangleParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 43.599999999999994px;
  position: relative;
  gap: 88.7px;
  text-align: left;
  font-size: 9px;
  color: #fff;
  font-family: Poppins;
`;

const GroupComponent: FunctionComponent = () => {
  return (
    <RectangleParentRoot>
      <FrameChild alt="" src="/control-flow@2x.png" />
      <RectangleGroup>
        <FrameItem />
        <Unchecked type="checkbox"/>
        <FrameWrapper>
          <OffWrapper>
            <Off>10% Off</Off>
          </OffWrapper>
        </FrameWrapper>
      </RectangleGroup>
      <FrameContainer>
        <FrameInner alt="" src="/group-289589.svg"/>
      </FrameContainer>
    </RectangleParentRoot>
  );
};

export default GroupComponent;
