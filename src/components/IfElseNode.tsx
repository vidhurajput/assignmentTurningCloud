import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styled from "styled-components";

const IfElseNodeChild = styled.div`
  align-self: stretch;
  height: 95px;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 4px 20px -16px #8b93bb;
  display: none;
`;
const SearchBarChild = styled.div`
  height: 35px;
  width: 429.3px;
  position: relative;
  background-color: #fff;
  border: 1px solid #dae4ee;
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Search2Line = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const BranchNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
`;
const SearchPosAsns = styled.div`
  position: relative;
  white-space: nowrap;
  z-index: 1;
`;
const ConnectNode = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
`;
const FrameChild = styled.div`
  height: 21.8px;
  width: 122.1px;
  position: relative;
  border-radius: 4px;
  background-color: rgba(112, 116, 148, 0.1);
  display: none;
  z-index: 0;
`;
const CommandIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const CommandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
`;
const K = styled.div`
  position: relative;
  font-weight: 500;
  z-index: 1;
`;
const MulNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SqrtNodeIcon = styled.img`
  height: 7.8px;
  width: 4.4px;
  position: absolute;
  margin: 0 !important;
  bottom: 6.9px;
  left: 41.4px;
  object-fit: contain;
  z-index: 1;
`;
const RectangleParent = styled.div`
  border-radius: 4px;
  background-color: rgba(112, 116, 148, 0.1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 6px 1.7999999999999972px 5px;
  position: relative;
  gap: 21px;
  z-index: 2;
  font-size: 12px;
`;
const SearchBar = styled.div`
  align-self: stretch;
  background-color: #fff;
  border: 1px solid #dae4ee;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 8px 7.200000000000003px 9px;
  gap: 7px;
  max-width: 100%;
  z-index: 1;
`;
const VariableNode = styled.div`
  width: 429.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 1px;
  box-sizing: border-box;
  max-width: 100%;
`;
const HelpIcon = styled.img`
  width: 25px;
  height: 25px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const LogNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px 0px 0px;
`;
const UploadIcon = styled.img`
  width: 22px;
  height: 19px;
  position: relative;
  z-index: 1;
`;
const SinNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 20px 0px 0px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(102, 106, 246, 0.2);
  width: 100%;
  height: 100%;
  display: none;
`;
const Imageedit = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #5d5fef;
  width: 6px;
  height: 2px;
  z-index: 1;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 28px;
  left: 0px;
  background-color: rgba(102, 106, 246, 0.2);
  width: 18px;
  height: 2px;
  z-index: 1;
`;
const FileTextLine1Icon = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  margin: 0 !important;
  bottom: -12px;
  left: -14px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameInner = styled.div`
  height: 15px;
  width: 20px;
  position: relative;
  border-radius: 3px;
  background-color: #5d5fef;
  display: none;
`;
const FloorNode = styled.b`
  position: relative;
  line-height: 9px;
  z-index: 1;
`;
const RectangleContainer = styled.div`
  border-radius: 3px;
  background-color: #5d5fef;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3px 3px 3px 4px;
  z-index: 2;
`;
const SqrtOfXNode = styled.div`
  position: absolute;
  top: -5px;
  left: -2.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ASinNode = styled.div`
  align-self: stretch;
  height: 30px;
  position: relative;
`;
const TanNode = styled.div`
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 24px 0px 0px;
  box-sizing: border-box;
`;
const NotificationLine1Icon = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  margin: 0 !important;
  bottom: -12px;
  left: -13px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const RectangleDiv = styled.div`
  height: 15px;
  width: 25px;
  position: relative;
  border-radius: 3px;
  background-color: #5d5fef;
  display: none;
`;
const MaxNode = styled.b`
  position: relative;
  line-height: 5px;
  z-index: 1;
`;
const GroupDiv = styled.div`
  border-radius: 3px;
  background-color: #5d5fef;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 2px 3px 5px;
  z-index: 2;
`;
const RoundNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const CeilNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 4px 0px 0px;
`;
const ClampNode = styled.div`
  width: 1px;
  height: 17px;
  position: relative;
  border-right: 1px solid #b7c6de;
  box-sizing: border-box;
  z-index: 1;
`;
const RandomNode = styled.div`
  height: 27px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 3px 0px 0px;
  box-sizing: border-box;
`;
const ProfilePlaceholderChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8.07px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: none;
`;
const Line = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8.07px;
  background-color: #5f677a;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const ProfileIcon = styled.img`
  position: absolute;
  height: 62.74%;
  width: 62.74%;
  top: 18.47%;
  right: 18.79%;
  bottom: 18.79%;
  left: 18.47%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 2;
`;
const ProfilePlaceholder = styled.div`
  width: 31.4px;
  height: 31.4px;
  position: relative;
  border-radius: 8.07px;
  background-color: #fff;
  z-index: 1;
`;
const RandIntNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3.5999999999999943px 0px 0px;
`;
const Inputlabel1 = styled(InputLabel)``;
const VmartProcurementTeam = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const ReduceNode = styled(FormControl)`
  align-self: stretch;
  height: 21px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  color: #23235f;
`;
const AshishKumarSingla = styled.div`
  width: 145px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  padding-right: 20px;
  z-index: 1;
`;
const FilterNode = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: #67768e;
`;
const ExpNode = styled.div`
  width: 485px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: 100%;
  font-size: 10px;
  color: #fff;
`;
const GroupNode = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 1px 0px 0px;
  box-sizing: border-box;
  gap: 20px;
  max-width: 100%;
`;
const FunctionNode = styled.div`
  width: 1363.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 13px 0px 13.099999999999994px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Tiktok = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid #f3f6f9;
  box-sizing: border-box;
  z-index: 1;
`;
const HomeIcon = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Label = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 500;
`;
const Inline = styled.div`
  width: 63px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const SlashBoldIcon = styled.img`
  height: 12px;
  width: 12px;
  position: relative;
`;
const Inline1 = styled(FormControl)`
  height: 30px;
  width: 107.7px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  color: #4b5563;
`;
const Label1 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
`;
const Breadcrumb = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5.8px;
  max-width: 100%;
`;
const Breadcrumb1 = styled.div`
  width: 335.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 1;
`;
const PlaceOrder = styled.div`
  flex: 1;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
`;
const DateRange = styled.div`
  align-self: stretch;
  background-color: #5d5fef;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 34px 6px 33px;
  white-space: nowrap;
  z-index: 1;
`;
const DataValidator = styled.div`
  width: 158px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.1000000000000014px 0px 0px;
  box-sizing: border-box;
  color: #fff;
`;
const ConditionSplitter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
`;
const DataAggregator = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 12px 0px 13.099999999999994px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 12px;
  color: #4b5563;
`;
const IfElseNodeRoot = styled.header`
  align-self: stretch;
  background-color: #fff;
  box-shadow: 0px 4px 20px -16px #8b93bb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 8px;
  box-sizing: border-box;
  gap: 6.449999999999999px;
  max-width: 100%;
  text-align: left;
  font-size: 13px;
  color: #67768e;
  font-family: Poppins;
`;

const IfElseNode: FunctionComponent = () => {
  return (
    <IfElseNodeRoot>
      <IfElseNodeChild />
      <FunctionNode>
        <GroupNode>
          <VariableNode>
            <SearchBar>
              <SearchBarChild />
              <BranchNode>
                <Search2Line alt="" src="/search2line-3-1.svg" />
              </BranchNode>
              <ConnectNode>
                <SearchPosAsns>{`Search POs, ASNs, & pages etc`}</SearchPosAsns>
              </ConnectNode>
              <RectangleParent>
                <FrameChild />
                <MulNode>
                  <CommandWrapper>
                    <CommandIcon alt="" src="/command.svg" />
                  </CommandWrapper>
                  <K>+K</K>
                </MulNode>
                <MulNode>
                  <CommandWrapper>
                    <CommandIcon alt="" src="/command.svg" />
                  </CommandWrapper>
                  <K>+Shift+K</K>
                </MulNode>
                <SqrtNodeIcon alt="" />
              </RectangleParent>
            </SearchBar>
          </VariableNode>
          <ExpNode>
            <LogNode>
              <HelpIcon loading="lazy" alt="" src="/help.svg" />
            </LogNode>
            <SinNode>
              <UploadIcon loading="lazy" alt="" src="/upload.svg" />
            </SinNode>
            <TanNode>
              <ASinNode>
                <RectangleGroup>
                  <FrameItem />
                  <Imageedit />
                </RectangleGroup>
                <SqrtOfXNode>
                  <FileTextLine1Icon
                    loading="lazy"
                    alt=""
                    src="/filetextline-1.svg"
                  />
                  <RectangleContainer>
                    <FrameInner />
                    <FloorNode>20</FloorNode>
                  </RectangleContainer>
                </SqrtOfXNode>
              </ASinNode>
            </TanNode>
            <CeilNode>
              <RoundNode>
                <NotificationLine1Icon
                  loading="lazy"
                  alt=""
                  src="/notificationline-1.svg"
                />
                <GroupDiv>
                  <RectangleDiv />
                  <MaxNode>120</MaxNode>
                </GroupDiv>
              </RoundNode>
            </CeilNode>
            <RandomNode>
              <ClampNode />
            </RandomNode>
            <RandIntNode>
              <ProfilePlaceholder>
                <ProfilePlaceholderChild />
                <Line />
                <ProfileIcon loading="lazy" alt="" src="/profile.svg" />
              </ProfilePlaceholder>
            </RandIntNode>
            <FilterNode>
              <ReduceNode
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "21px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "21px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "21px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "21px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "21px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#23235f",
                    fontSize: 14,
                    fontWeight: "SemiBold",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <Inputlabel1 color="primary" />
                <Select1
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="18px"
                      height="18px"
                      src="/arrowdownsfill-1-1.svg"
                      style={{ marginRight: "2.273736754432321e-13px" }}
                    />
                  )}
                >
                  <VmartProcurementTeam>
                    Vmart-Procurement Team
                  </VmartProcurementTeam>
                </Select1>
                <Formhelpertext1 />
              </ReduceNode>
              <AshishKumarSingla>Ashish Kumar Singla</AshishKumarSingla>
            </FilterNode>
          </ExpNode>
        </GroupNode>
      </FunctionNode>
      <Tiktok />
      <DataAggregator>
        <ConditionSplitter>
          <Breadcrumb1>
            <Breadcrumb>
              <Inline>
                <HomeIcon alt="" src="/home.svg" />
                <Label>Home</Label>
              </Inline>
              <SlashBoldIcon alt="" src="/slashbold.svg" />
              <Inline1
                variant="standard"
                sx={{
                  borderColor: "#e5e7eb",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "8px",
                  width: "32.171581769437%",
                  height: "30px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "30px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "30px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "30px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "30px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#4b5563",
                    fontSize: 12,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "8px",
                  },
                }}
              >
                <Inputlabel1 color="primary" />
                <Select1
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="17.7px"
                      height="17.7px"
                      src="/text-manipulator.png"
                      style={{ marginRight: "8.3px" }}
                    />
                  )}
                >
                  <VmartProcurementTeam>Sales Order</VmartProcurementTeam>
                </Select1>
                <Formhelpertext1 />
              </Inline1>
              <SlashBoldIcon alt="" src="/slashbold-1.svg" />
              <Label1>Product Catalogue</Label1>
            </Breadcrumb>
          </Breadcrumb1>
          <DataValidator>
            <DateRange>
              <PlaceOrder>Place Order</PlaceOrder>
            </DateRange>
          </DataValidator>
        </ConditionSplitter>
      </DataAggregator>
    </IfElseNodeRoot>
  );
};

export default IfElseNode;
