import { FunctionComponent, useMemo, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styled from "styled-components";
import IfElseNode from "../components/IfElseNode";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import ProductCard from "../components/CardNew";
import Sidebar from "../components/SidebarTailwind";
import ProductItemCard from "../components/ProductItemCard";

const V = styled.div`
  position: absolute;
  margin: 0 !important;
  right: 13.9px;
  bottom: 4.4px;
  line-height: 25px;
  font-weight: 500;
`;
const WrapperGroup6287Child = styled.img`
  height: 100%;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  z-index: 2;
  object-fit: contain;
  position: absolute;
  left: 4px;
  top: 13px;
  width: 100%;
  transform: scale(1.494);
`;
const WrapperGroup = styled.div`
  height: 976.2px;
  flex: 1;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ConditionNode = styled.div`
  margin-top: -76.19999999999999px;
  margin-left: -7px;
  width: 70.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const FrameChild = styled.div`
  height: 48px;
  width: 695px;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const DateRange = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 30px;
  flex: 1;
  font-family: Poppins;
  font-size: 12px;
  color: #67768e;
  min-width: 149px;
  z-index: 1;
`;
const LayoutToggleIcon = styled.img`
  height: 30px;
  width: 89.1px;
  position: relative;
  min-height: 30px;
  z-index: 1;
`;
const Timer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9.9px;
  min-width: 213px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const DateRangeChild = styled.div`
  height: 18px;
  width: 22px;
  position: relative;
  display: none;
`;
const AddRemarks = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 500;
  font-family: Poppins;
  color: #7e8084;
  text-align: left;
  z-index: 1;
`;
const DateRange1 = styled.button`
  cursor: pointer;
  border: 1px solid #dae4ee;
  padding: 6px 10px 6px 11px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 65px;
  z-index: 1;
`;
const ShowBy = styled.span`
  color: #7e8084;
`;
const Span = styled.span`
  color: #0f172a;
  white-space: pre-wrap;
`;
const ShowBy1 = styled.span`
  font-family: Poppins;
`;
const Sizes = styled.span`
  font-weight: 600;
  font-family: Poppins;
`;
const ShowByContainer = styled.div`
  position: relative;
  font-size: 12px;
  text-align: left;
  z-index: 1;
`;
const DateRange2 = styled.div`
  flex: 1;
  background-color: #fff;
  border: 1px solid #dae4ee;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 14px 6px 8.5px;
  gap: 65px;
  z-index: 1;
`;
const DateRangeIcon = styled.img`
  height: 30px;
  width: 30px;
  position: relative;
  min-height: 30px;
  z-index: 1;
`;
const RelationalOperator = styled.div`
  width: 278px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9.5px;
`;
const RectangleParent = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 9px 11px 9px 10px;
  box-sizing: border-box;
  gap: 68px;
  max-width: 100%;
  @media screen and (max-width: 900px) {
    gap: 68px 34px;
  }
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 68px 17px;
  }
`;
const FrameItem = styled.div`
  align-self: stretch;
  width: 372px;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const CallStackIcon = styled.img`
  height: 20.2px;
  width: 20.2px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 20px;
  z-index: 1;
`;
const ScanProductBy = styled.div`
  position: relative;
  font-size: 12px;
  font-family: Poppins;
  color: #888a8e;
  text-align: left;
  z-index: 1;
`;
const ErrorLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.1000000000000014px 0px 0px;
`;
const FunctionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6.7999999999999545px;
`;
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13.9px 0px 0px;
`;
const Inputlabel1 = styled(InputLabel)``;
const DesignNo = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const Parent1 = styled(FormControl)`
  align-self: stretch;
  height: 28.3px;
  font-size: 12px;
  color: #000;
  z-index: 1;
`;
const Subroutine = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 9.799999999999995px;
`;
const LoopCounter = styled.div`
  height: 48px;
  width: 1px;
  position: relative;
  border-right: 1px solid #e7e8e8;
  box-sizing: border-box;
  z-index: 1;
`;
const ErrorMessageIcon = styled.img`
  width: 21px;
  height: 21px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const LoopLimit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 13.5px;
`;
const Listener = styled.div`
  height: 48px;
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 12.899999999999975px;
`;
const RectangleGroup = styled.div`
  width: 372px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 14px 0px 12px;
  box-sizing: border-box;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const IndexTracker = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 14px;
  max-width: 100%;
`;
const ControlFlowIcon = styled.img`
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
const FrameInner = styled.div`
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
  font-size: 9px;
  font-weight: 600;
  font-family: Poppins;
  color: #fff;
  text-align: left;
`;
const TextCluster = styled.div`
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
const TextClusterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5999999999999943px 0px 0px;
`;
const RectangleContainer = styled.div`
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
const PrevIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const GroupIcon = styled.img`
  height: 4.5px;
  width: 31.5px;
  position: relative;
  z-index: 1;
`;
const FrameChainInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 12.599999999999994px;
`;
const FrameChain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 44.20000000000002px;
`;
const NextChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
  display: none;
`;
const TextStringIcon = styled.img`
  position: absolute;
  top: 4.7px;
  left: 4.6px;
  width: 14.8px;
  height: 14.8px;
  overflow: hidden;
  z-index: 1;
`;
const Next = styled.div`
  height: 24px;
  width: 24px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;
const ContainerStack = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;
const ControlFlowParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 43.599999999999994px;
  position: relative;
  gap: 20.499999999999982px;
`;
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
const Dn = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 11px;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;
const DesignNumberParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Xl = styled.div`
  position: relative;
  font-size: 9px;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
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
const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
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
const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11px;
`;
const DateRangeIcon1 = styled.img`
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
  font-size: 11px;
  display: inline-block;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
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
const ListStructureParent = styled.div`
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
const FrameCollection = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-right: 1px solid #dddede;
  box-sizing: border-box;
  width: 1px;
  height: 30px;
`;
const ShapeClusterIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 8px;
  width: 12px;
  height: 12px;
  overflow: hidden;
`;
const FrameCollectionParent = styled.div`
  height: 30px;
  width: 20px;
  position: relative;
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
const DateRangeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
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
const ExceptionHandler = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px 1px;
  gap: 0px 15px;
`;
const Combiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 13px;
  max-width: calc(100% - 265px);
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;
const FrameChild2 = styled.div`
  width: 248.7px;
  height: 781px;
  position: relative;
  background-color: #fff;
  display: none;
`;
const FrameChild3 = styled.div`
  height: 42.7px;
  width: 219.9px;
  position: relative;
  background-color: #edeef1;
  display: none;
`;
const TableContainerIcon = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const SpacerNodes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
`;
const Customer = styled.div`
  position: relative;
  font-size: 10px;
  font-family: Poppins;
  color: #888a8e;
  text-align: left;
  z-index: 1;
`;
const SrgIndiaPvt = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;
const RowDividers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const RectangleParent2 = styled.div`
  flex: 1;
  background-color: #edeef1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.800000000000001px 12px 4.900000000000006px;
  gap: 9px;
  z-index: 1;
`;
const ButtonSet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 3.000000000000014px;
`;
const SliderComponentsChild = styled.img`
  width: 19.3px;
  height: 7px;
  position: relative;
  z-index: 1;
`;
const RectangleParent3 = styled.div`
  align-self: stretch;
  background-color: #edeef1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.900000000000006px 12.399999999999975px 4.799999999999997px;
  gap: 8.300000000000068px;
  z-index: 1;
`;
const Datepicker1 = styled(DatePicker)``;
const Wrapper = styled.div`
  align-self: stretch;
  height: 42.7px;
  z-index: 1;
`;
const TooltipsChild = styled(Button)`
  height: 27.6px;
  flex: 1;
  z-index: 1;
`;
const Tooltips = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 6.900000000000006px;
`;
const ThumbnailGrid = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid #eeefef;
  box-sizing: border-box;
  z-index: 1;
`;
const Summary = styled.div`
  position: relative;
  font-size: 12px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;
const FrameChild4 = styled.div`
  height: 24px;
  width: 218.9px;
  position: relative;
  background-color: rgba(217, 217, 217, 0.5);
  display: none;
`;
const SoDraft = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;
const RectangleParent4 = styled.div`
  align-self: stretch;
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 14px 2px 8px;
  z-index: 1;
`;
const ModalForms = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;
const TabSet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1px;
`;
const CheckboxGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 5.100000000000023px;
  gap: 9.900000000000006px;
`;
const TotalQuantity = styled.div`
  position: relative;
  font-size: 11px;
  font-family: Poppins;
  color: #7e8084;
  text-align: left;
  z-index: 1;
`;
const ListBuilder = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
`;
const StringParser = styled.div`
  width: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 1px;
  box-sizing: border-box;
`;
const SortingAlgorithm = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 500;
  font-family: Poppins;
  color: #7e8084;
  text-align: right;
  z-index: 1;
`;
const FilterEngine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
`;
const NumberProcessor = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
`;
const TextSplitter = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1px 2.5px;
`;
const FrameChild5 = styled.div`
  height: 42.7px;
  width: 219.9px;
  position: relative;
  border-radius: 5px;
  background-color: #f7f8fb;
  display: none;
`;
const FormatTransformer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
`;
const Div2 = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 600;
  font-family: Poppins;
  color: #0f172a;
  text-align: right;
  white-space: nowrap;
  z-index: 1;
`;
const RectangleParent5 = styled.div`
  flex: 1;
  border-radius: 5px;
  background-color: #f7f8fb;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11.300000000000011px 11.799999999999956px 11.399999999999975px;
  gap: 4.599999999999909px;
  z-index: 1;
`;
const SearchFunction = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 9.000000000000057px;
`;
const ReducerAlgorithm = styled.div`
  height: 1px;
  flex: 1;
  position: relative;
  border-top: 1px solid #eeefef;
  box-sizing: border-box;
  z-index: 1;
`;
const CombinerFunction = styled.div`
  align-self: stretch;
  height: 3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 3px;
  box-sizing: border-box;
`;
const SortNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
`;
const MergeNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 1px;
`;
const Div3 = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 500;
  font-family: Poppins;
  color: #7e8084;
  text-align: right;
  white-space: nowrap;
  z-index: 1;
`;
const MapFunction = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 5.399999999999977px 1px;
`;
const FrameChild6 = styled.div`
  height: 36.1px;
  width: 219.9px;
  position: relative;
  border-radius: 5px;
  background-color: #f7f8fb;
  display: none;
`;
const SplitFunctionIcon = styled.img`
  height: 16.6px;
  width: 16.6px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Discount = styled.div`
  flex: 1;
  position: relative;
  font-size: 11px;
  font-weight: 500;
  font-family: Poppins;
  color: #52924c;
  text-align: left;
  z-index: 1;
`;
const JoinFunction = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.199999999999932px;
`;
const ControlNode = styled.div`
  width: 95.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
  box-sizing: border-box;
`;
const Div4 = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 600;
  font-family: Poppins;
  color: #52924c;
  text-align: right;
  white-space: nowrap;
  z-index: 1;
`;
const RectangleParent6 = styled.div`
  align-self: stretch;
  border-radius: 5px;
  background-color: #f7f8fb;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8.100000000000023px 12px 8px 10px;
  gap: 20px;
  z-index: 1;
`;
const LogicController = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;
const TotalAmount = styled.div`
  position: relative;
  font-size: 11px;
  font-family: Poppins;
  color: #0f172a;
  text-align: left;
  z-index: 1;
`;
const SearchTree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
`;
const RectangleParent7 = styled.div`
  align-self: stretch;
  border-radius: 5px;
  background-color: #f7f8fb;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 11.300000000000068px 12px 11.399999999999975px 11.799999999999956px;
  gap: 20px;
  z-index: 1;
`;
const RectangleParent8 = styled.div`
  width: 248.7px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13.7px 13.700000000000044px 108.89999999999998px 14px;
  box-sizing: border-box;
  gap: 6.899999999999977px;
  @media screen and (max-width: 900px) {
    display: none;
    padding-top: 20px;
    padding-bottom: 71px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 46px;
    box-sizing: border-box;
  }
`;
const Sorter = styled.form`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  max-width: 100%;
`;
const Divider = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 14px 0px 14.099999999999994px;
  box-sizing: border-box;
  max-width: 100%;
`;
const LoopNode = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: calc(100% - 71px);
`;
const DesignRoot = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
  background-color: #f3f4f9;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  letter-spacing: normal;
  text-align: left;
  font-size: 12px;
  color: #707494;
  font-family: Poppins;
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;

const MainPage: FunctionComponent = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);

  const data = useMemo(() => {
    return [{
      color: "Mustard Yellow",
      multiplier: "5",
      productDescription: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      size: "XL",
      instock: "100",
      afterDiscount: "1299.67",
      beforeDiscount: "799.67",
      image: "/frame-4.svg"
    },
    {
      color: "Mustard Yellow",
      multiplier: "5",
      productDescription: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      size: "XL",
      instock: "100",
      afterDiscount: "1299.67",
      beforeDiscount: "799.67",
      image: "/frame-4.svg"
    },
    {
      color: "Mustard Yellow",
      multiplier: "5",
      productDescription: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      size: "XL",
      instock: "100",
      afterDiscount: "1299.67",
      beforeDiscount: "799.67",
      image: "/frame-4.svg"
    },
    {
      color: "Mustard Yellow",
      multiplier: "5",
      productDescription: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      size: "XL",
      instock: "100",
      afterDiscount: "1299.67",
      beforeDiscount: "799.67",
      image: "/frame-4.svg"
    },
    {
      color: "Mustard Yellow",
      multiplier: "5",
      productDescription: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      size: "XL",
      instock: "100",
      afterDiscount: "1299.67",
      beforeDiscount: "799.67",
      image: "/frame-4.svg"
    }
    ]
  }, [])
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesignRoot>
        {/* <Sidebar /> */}
        <ConditionNode>
          <WrapperGroup>
            <WrapperGroup6287Child
              loading="lazy"
              alt=""
              src="/group-6287.svg"
            />
          </WrapperGroup>
        </ConditionNode>
        <LoopNode>
          <IfElseNode />
          <Divider>
            <Sorter>
              <Combiner>
                <IndexTracker>
                  <RectangleParent>
                    <FrameChild />
                    <Timer>
                      <DateRange
                        placeholder="Search Products"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <img
                              width="15.9px"
                              height="15.6px"
                              src="/iconoutlinesearch.svg"
                            />
                          ),
                        }}
                        sx={{
                          "& fieldset": { borderColor: "#dae4ee" },
                          "& .MuiInputBase-root": {
                            height: "30px",
                            backgroundColor: "#fff",
                            paddingLeft: "8.199999999999989px",
                            borderRadius: "0px 0px 0px 0px",
                            fontSize: "12px",
                          },
                          "& .MuiInputBase-input": {
                            paddingLeft: "3.9000000000000057px",
                            color: "#67768e",
                          },
                        }}
                      />
                      <LayoutToggleIcon
                        loading="lazy"
                        alt=""
                        src="/layout-toggle.svg"
                      />
                    </Timer>
                    <RelationalOperator>
                      <DateRange1>
                        <DateRangeChild />
                        <AddRemarks>Add Remarks</AddRemarks>
                      </DateRange1>
                      <DateRange2>
                        <DateRangeChild />
                        <ShowByContainer>
                          <ShowBy1>
                            <ShowBy>{`Show by : `}</ShowBy>
                            <Span>{`  `}</Span>
                          </ShowBy1>
                          <Span>
                            <Sizes> Sizes</Sizes>
                          </Span>
                        </ShowByContainer>
                      </DateRange2>
                      <DateRangeIcon
                        loading="lazy"
                        alt=""
                        src="/date-range.svg"
                      />
                    </RelationalOperator>
                  </RectangleParent>
                  <RectangleGroup>
                    <FrameItem />
                    <DataContainer>
                      <FunctionContainer>
                        <CallStackIcon alt="" src="/frame-1.svg" />
                        <ErrorLog>
                          <ScanProductBy>Scan Product by...</ScanProductBy>
                        </ErrorLog>
                      </FunctionContainer>
                    </DataContainer>
                    <Listener>
                      <Subroutine>
                        <Parent1
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                            borderRadius: "0px 0px 0px 0px",
                            width: "93.20000000000005px",
                            height: "28.300000000000004px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "28.300000000000004px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "28.300000000000004px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "28.300000000000004px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "28.300000000000004px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#000",
                              fontSize: 12,
                              fontWeight: "Mixed",
                              fontFamily: "Mixed",
                              textAlign: "left",
                              p: "0 !important",
                              marginLeft: "5px",
                            },
                          }}
                        >
                          <Inputlabel1 color="secondary" />
                          <Select1
                            color="secondary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="14px"
                                height="14px"
                                src="/chevrondown.svg"
                                style={{ marginRight: "4.2000000000000455px" }}
                              />
                            )}
                          >
                            <DesignNo> Design No</DesignNo>
                          </Select1>
                          <Formhelpertext1 />
                        </Parent1>
                      </Subroutine>
                      <LoopCounter />
                      <LoopLimit>
                        <ErrorMessageIcon alt="" src="/frame-2.svg" />
                      </LoopLimit>
                    </Listener>
                  </RectangleGroup>
                </IndexTracker>
                <ExceptionHandler>
                  {
                    data.map((prodItemObj) => {
                      return (<ProductItemCard  {...prodItemObj} />)
                    })
                  }
                </ExceptionHandler>
              </Combiner>
              <RectangleParent8>
                <FrameChild2 />
                <ButtonSet>
                  <RectangleParent2>
                    <FrameChild3 />
                    <SpacerNodes>
                      <TableContainerIcon alt="" src="/frame-9.svg" />
                    </SpacerNodes>
                    <RowDividers>
                      <Customer>Customer</Customer>
                      <SrgIndiaPvt>SRG India Pvt Ltd</SrgIndiaPvt>
                    </RowDividers>
                  </RectangleParent2>
                </ButtonSet>
                <CheckboxGroup>
                  <RectangleParent3>
                    <FrameChild3 />
                    <EllipseWrapper>
                      <SliderComponentsChild alt="" src="/group-289570.svg" />
                    </EllipseWrapper>
                    <RowDividers>
                      <Customer>Delivery Location</Customer>
                      <SrgIndiaPvt>Gurugram-017838</SrgIndiaPvt>
                    </RowDividers>
                  </RectangleParent3>
                  <Wrapper>
                    <Datepicker1
                      value={groupDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setGroupDateTimePickerValue(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "transparent",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "transparent" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "#0f172a",
                          fontSize: 12,
                        },
                        input: {
                          color: "#0f172a",
                          fontSize: 12,
                          paddingLeft: 0,
                          textAlign: "left",
                          fontWeight: "600",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#edeef1",
                          height: 42.69999999999999,
                          gap: "36.300000000000026px",
                          flexDirection: { flexDirection: "row-reverse" },
                        },
                      }}
                      slotProps={{
                        textField: {
                          size: "medium",
                          fullWidth: true,
                          required: false,
                          autoFocus: false,
                          error: false,
                          placeholder: "Gurugram-017838",
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="19.3px"
                              height="7px"
                              src="/group-289570-1.png"
                            />
                          ),
                        },
                      }}
                    />
                  </Wrapper>
                  <Tooltips>
                    <TooltipsChild
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#7e8084",
                        fontSize: "12",
                        background: "#edeef1",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#edeef1" },
                        height: 27.59999999999999,
                      }}
                    >
                      Show More
                    </TooltipsChild>
                  </Tooltips>
                  <ThumbnailGrid />
                  <TabSet>
                    <ModalForms>
                      <Summary>Summary</Summary>
                      <RectangleParent4>
                        <FrameChild4 />
                        <SoDraft>#SO_DRAFT_00000017_2024</SoDraft>
                      </RectangleParent4>
                    </ModalForms>
                  </TabSet>
                </CheckboxGroup>
                <TextSplitter>
                  <NumberProcessor>
                    <StringParser>
                      <ListBuilder>
                        <TotalQuantity>Total Quantity</TotalQuantity>
                        <TotalQuantity>Total Items</TotalQuantity>
                        <TotalQuantity>Order Quantity</TotalQuantity>
                      </ListBuilder>
                    </StringParser>
                    <FilterEngine>
                      <SortingAlgorithm>21</SortingAlgorithm>
                      <SortingAlgorithm>7</SortingAlgorithm>
                      <SortingAlgorithm>21</SortingAlgorithm>
                    </FilterEngine>
                  </NumberProcessor>
                </TextSplitter>
                <SearchFunction>
                  <RectangleParent5>
                    <FrameChild5 />
                    <FormatTransformer>
                      <Dn>Total Bag Price</Dn>
                    </FormatTransformer>
                    <Div2>₹ 23031.808</Div2>
                  </RectangleParent5>
                </SearchFunction>
                <LogicController>
                  <CombinerFunction>
                    <ReducerAlgorithm />
                  </CombinerFunction>
                  <ListStructureParent>
                    <Summary>Price Breakup</Summary>
                  </ListStructureParent>
                  <MapFunction>
                    <NumberProcessor>
                      <MergeNode>
                        <SortNode>
                          <TotalQuantity>IGST</TotalQuantity>
                          <TotalQuantity>CGST</TotalQuantity>
                          <TotalQuantity>SGST</TotalQuantity>
                          <TotalQuantity>CESS</TotalQuantity>
                        </SortNode>
                      </MergeNode>
                      <FilterEngine>
                        <Div3>₹ 230.80</Div3>
                        <Div3>₹ 230.80</Div3>
                        <Div3>₹ 230.80</Div3>
                        <Div3>₹ 0.00</Div3>
                      </FilterEngine>
                    </NumberProcessor>
                  </MapFunction>
                  <RectangleParent6>
                    <FrameChild6 />
                    <ControlNode>
                      <JoinFunction>
                        <SplitFunctionIcon alt="" src="/frame-10.svg" />
                        <Discount>Discount</Discount>
                      </JoinFunction>
                    </ControlNode>
                    <Div4>₹ 690.00</Div4>
                  </RectangleParent6>
                </LogicController>
                <RectangleParent7>
                  <FrameChild5 />
                  <SearchTree>
                    <TotalAmount>Total Amount</TotalAmount>
                  </SearchTree>
                  <Div2>₹ 23031.808</Div2>
                </RectangleParent7>
              </RectangleParent8>
            </Sorter>
          </Divider>
        </LoopNode>
      </DesignRoot>
    </LocalizationProvider>
  );
};

export default MainPage;
