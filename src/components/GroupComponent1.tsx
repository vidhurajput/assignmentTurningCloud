import { FunctionComponent } from "react";
import styled from "styled-components";

const FrameChild = styled.div`
  width: 204px;
  height: 229.4px;
  position: relative;
  background-color: #fff;
  display: none;
`;
const ImageStack = styled.div`
  width: 5.8px;
  height: 5.8px;
  position: relative;
  border-radius: 50%;
  background-color: #fc9d03;
`;
const ImageStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.099999999999994px 0px 0px;
`;
const MustardYellow = styled.div`
  position: relative;
  font-weight: 500;
`;
const EllipseSet = styled.div`
  flex: 1;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #fc9d03;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2px;
  gap: 3px;
  z-index: 1;
`;
const SliceSet = styled.div`
  width: 61px;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #e3e4e7;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2px;
  white-space: nowrap;
  z-index: 1;
`;
const StarGroup = styled.div`
  width: 149.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;
const ItemName = styled.div`
  align-self: stretch;
  position: relative;
  color: #74767a;
  z-index: 1;
`;
const StarGroupParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9px;
`;
const MensWhiteCheck = styled.div`
  width: 176.7px;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const DesignNumber = styled.div`
  width: 176.7px;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const Dn = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 11px;
  color: #0f172a;
  z-index: 1;
`;
const DesignNumberParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #74767a;
`;
const Xl = styled.div`
  position: relative;
  font-weight: 600;
`;
const RadialGradient = styled.div`
  border-radius: 2px;
  background-color: #e3e4e7;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
  z-index: 1;
`;
const ShapeBlend = styled.div`
  border-radius: 2px;
  background-color: #e3e4e7;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
  white-space: nowrap;
  z-index: 1;
`;
const RadialGradientParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;
const Div = styled.div`
  position: relative;
  font-weight: 600;
  white-space: nowrap;
  z-index: 1;
`;
const Div1 = styled.div`
  position: relative;
  text-decoration: line-through;
  font-weight: 500;
  color: #a6a8ac;
  white-space: nowrap;
  z-index: 1;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11px;
`;
const DateRangeIcon = styled.img`
  height: 30px;
  width: 32px;
  position: relative;
  min-height: 30px;
  z-index: 1;
`;
const Xl1 = styled.b`
  margin-left: -1px;
  flex: 1;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const SuperscriptText = styled.div`
  width: 22px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
  box-sizing: border-box;
`;
const FrameItem = styled.div`
  height: 19px;
  width: 55px;
  position: relative;
  border-radius: 40px;
  background-color: #fff;
  display: none;
`;
const More = styled.div`
  position: relative;
  font-weight: 500;
  z-index: 1;
`;
const RectangleGroup = styled.div`
  border-radius: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 4px 1px 5px;
  white-space: nowrap;
  z-index: 1;
  margin-left: -1px;
`;
const SuperscriptTextParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const DateRangeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 5px;
`;
const KerningPair = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-right: 1px solid #dddede;
  box-sizing: border-box;
  width: 1px;
  height: 30px;
`;
const TextFlowIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 8px;
  width: 12px;
  height: 12px;
  overflow: hidden;
`;
const KerningPairParent = styled.div`
  height: 30px;
  width: 20px;
  position: relative;
`;
const DateRange = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 8px 0px 10px;
  gap: 25px;
  z-index: 1;
`;
const DateRangeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  font-size: 11px;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 12px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
`;
const RectangleParentRoot = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11px 11.199999999999989px 10.399999999999975px 12px;
  gap: 3px;
  z-index: 2;
  margin-top: -33px;
  text-align: left;
  font-size: 9px;
  color: #0f172a;
  font-family: Poppins;
`;

const GroupComponent1: FunctionComponent = () => {
  return (
    <RectangleParentRoot>
      <FrameChild />
      <StarGroupParent>
        <StarGroup>
          <EllipseSet>
            <ImageStackWrapper>
              <ImageStack />
            </ImageStackWrapper>
            <MustardYellow>Mustard Yellow</MustardYellow>
          </EllipseSet>
          <SliceSet>
            <MustardYellow>Multiplier : 5</MustardYellow>
          </SliceSet>
        </StarGroup>
        <ItemName>Item Name</ItemName>
      </StarGroupParent>
      <MensWhiteCheck>Mens white check Shirt regular fit</MensWhiteCheck>
      <FrameParent>
        <DesignNumberParent>
          <DesignNumber>Design Number</DesignNumber>
          <Dn>DN098234839</Dn>
        </DesignNumberParent>
        <RadialGradientParent>
          <RadialGradient>
            <Xl>XL</Xl>
          </RadialGradient>
          <ShapeBlend>
            <Xl>Instock : 100</Xl>
          </ShapeBlend>
        </RadialGradientParent>
        <FrameGroup>
          <Parent1>
            <Div>₹ 799.67</Div>
            <Div1>₹ 1299.67</Div1>
          </Parent1>
          <DateRangeParent>
            <DateRangeIcon alt="" src="/date-range-1.svg" />
            <DateRange>
              <DateRangeInner>
                <SuperscriptTextParent>
                  <SuperscriptText>
                    <Xl1>XL</Xl1>
                  </SuperscriptText>
                  <RectangleGroup>
                    <FrameItem />
                    <More>+5 More</More>
                  </RectangleGroup>
                </SuperscriptTextParent>
              </DateRangeInner>
              <KerningPairParent>
                <KerningPair />
                <TextFlowIcon alt="" src="/frame-4.svg" />
              </KerningPairParent>
            </DateRange>
          </DateRangeParent>
        </FrameGroup>
      </FrameParent>
    </RectangleParentRoot>
  );
};

export default GroupComponent1;
