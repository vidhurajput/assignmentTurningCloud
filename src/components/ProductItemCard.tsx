import styled from "styled-components";
import GroupComponent from "../components/GroupComponent";

const TracebackStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 200px;
  max-width: 204px;
`;
const RectangleDiv = styled.div`
  width: 204px;
  height: 229.4px;
  position: relative;
  background-color: #fff;
  display: none;
`;
const EllipseDiv = styled.div`
  width: 5.8px;
  height: 5.8px;
  position: relative;
  border-radius: 50%;
  background-color: #fc9d03;
`;
const EllipseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.099999999999994px 0px 0px;
`;
const MustardYellow = styled.div`
  position: relative;
  font-size: 9px;
  font-weight: 500;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
`;
const FrameContainer = styled.div`
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
const Multiplier5Wrapper = styled.div`
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
const FrameGroup = styled.div`
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
  font-size: 9px;
  font-family: Poppins;
  color: #74767a;
  text-align: left;
  z-index: 1;
`;
const FrameParent = styled.div`
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
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  display: inline-block;
  z-index: 1;
`;
const DesignNumber = styled.div`
  width: 176.7px;
  position: relative;
  font-size: 9px;
  font-family: Poppins;
  color: #74767a;
  text-align: left;
  display: inline-block;
  z-index: 1;
`;

const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;

const GroupDiv = styled.div`
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
`;

const DesignNumberParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;

const XlWrapper = styled.div`
  border-radius: 2px;
  background-color: #e3e4e7;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
  z-index: 1;
`;

const Dn = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 11px;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;

const Xl = styled.div`
  position: relative;
  font-size: 9px;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
`;

const Instock100Wrapper = styled.div`
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

const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11px;
`;

const Div = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  white-space: nowrap;
  z-index: 1;
`;

const Div1 = styled.div`
  position: relative;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 500;
  font-family: Poppins;
  color: #a6a8ac;
  text-align: left;
  white-space: nowrap;
  z-index: 1;
`;

const DateRangeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

const DateRangeIcon1 = styled.img`
  height: 30px;
  width: 32px;
  position: relative;
  min-height: 30px;
  z-index: 1;
`;

const DateRange3 = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 8px 0px 10px;
  gap: 25px;
  z-index: 1;
`;
const DateRangeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 5px;
`;

const ListStructureParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;


const ListStructure = styled.div`
  width: 22px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
  box-sizing: border-box;
`;

const RectangleParent1 = styled.div`
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

const Xl1 = styled.b`
  margin-left: -1px;
  flex: 1;
  position: relative;
  font-size: 11px;
  display: inline-block;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;

const FrameChild1 = styled.div`
  height: 19px;
  width: 55px;
  position: relative;
  border-radius: 40px;
  background-color: #fff;
  display: none;
`;

const More = styled.div`
  position: relative;
  font-size: 11px;
  font-weight: 500;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;
const FrameCollection = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-right: 1px solid #dddede;
  box-sizing: border-box;
  width: 1px;
  height: 30px;
`;

const FrameCollectionParent = styled.div`
  height: 30px;
  width: 20px;
  position: relative;
`;

const ShapeClusterIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 8px;
  width: 12px;
  height: 12px;
  overflow: hidden;
`;

interface IProductItemCard {
    color: string;
    multiplier: string,
    productDescription: string,
    designNumber: string,
    size: string,
    instock: string
    afterDiscount: string
    beforeDiscount: string
    image: string
}

function ProductItemCard({ color, multiplier, productDescription, designNumber, size, instock, afterDiscount, beforeDiscount, image }: IProductItemCard) {

    return (
        <TracebackStyle>
            <GroupComponent />
            <GroupDiv>
                <RectangleDiv />
                <FrameParent>
                    <FrameGroup>
                        <FrameContainer>
                            <EllipseWrapper>
                                <EllipseDiv />
                            </EllipseWrapper>
                            <MustardYellow>{color}</MustardYellow>
                        </FrameContainer>
                        <Multiplier5Wrapper>
                            <MustardYellow>Multiplier : {multiplier}</MustardYellow>
                        </Multiplier5Wrapper>
                    </FrameGroup>
                    <ItemName>Item Name</ItemName>
                </FrameParent>
                <MensWhiteCheck>
                    {productDescription}
                </MensWhiteCheck>
                <FrameDiv>
                    <DesignNumberParent>
                        <DesignNumber>Design Number</DesignNumber>
                        <Dn>{designNumber}</Dn>
                    </DesignNumberParent>
                    <FrameParent1>
                        <XlWrapper>
                            <Xl>{size}</Xl>
                        </XlWrapper>
                        <Instock100Wrapper>
                            <Xl>Instock : {instock}</Xl>
                        </Instock100Wrapper>
                    </FrameParent1>
                    <Group>
                        <Div>₹ {afterDiscount}</Div>
                        <Div1>₹ {beforeDiscount}</Div1>
                    </Group>
                    <DateRangeParent>
                        <DateRangeIcon1 alt="" onClick={() => { }} src="/date-range-1.svg" />
                        <DateRange3>
                            <DateRangeInner>
                                <ListStructureParent>
                                    <ListStructure>
                                        <Xl1>{size}</Xl1>
                                    </ListStructure>
                                    <RectangleParent1>
                                        <FrameChild1 />
                                        <More>+5 More</More>
                                    </RectangleParent1>
                                </ListStructureParent>
                            </DateRangeInner>
                            <FrameCollectionParent>
                                <FrameCollection />
                                <ShapeClusterIcon alt="" src={image} />
                            </FrameCollectionParent>
                        </DateRange3>
                    </DateRangeParent>
                </FrameDiv>
            </GroupDiv>
        </TracebackStyle>
    )
}

export default ProductItemCard;
