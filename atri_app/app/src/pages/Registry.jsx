import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex138Cb, useHeaderCb, useLinkLiquidHomeCb, useAllButtonCb, usebuttonCb, useSearchCb, useSearchAssetCb, useFlexFilterCb, useFlexNameFilteCb, useFlexTickerFilterCb, useFlexSupplyFilterCb, useFlexIssuerDomainFilterCb, useFlexResponseOnFilterCb, useNameResponseCb, useTickerResponseCb, useSupplyResponseCb, useIssuerDomainResponseCb, useLinkHomeCb, useButton20Cb, useButton21Cb, usesearchAssetCb, usenameFilterCb, useTickerFilterCb, useSupplyFilterCb, useIssuerDomainFilterCb, useName1Cb, useName19Cb, useName20Cb, useName2Cb, useName3Cb, useName18Cb, useName9Cb, useName17Cb, useName6Cb, useName12Cb, useName7Cb, useName5Cb, useName4Cb, useName8Cb, useName11Cb, useName10Cb, useName16Cb, useName13Cb, useName14Cb, useName15Cb, useTicker1Cb, useTicker2Cb, useTicker20Cb, useTicker3Cb, useTicker4Cb, useTicker5Cb, useTicker19Cb, useTicker6Cb, useTicker7Cb, useTicker8Cb, useTicker10Cb, useTicker9Cb, useTicker12Cb, useTicker18Cb, useTicker11Cb, useTicker17Cb, useTicker13Cb, useTicker16Cb, useTicker15Cb, useTicker14Cb, useSupply1Cb, useSupply19Cb, useSupply20Cb, useSupply2Cb, useSupply3Cb, useSupply4Cb, useSupply5Cb, useSupply6Cb, useSupply7Cb, useSupply18Cb, useSupply17Cb, useSupply8Cb, useSupply9Cb, useSupply16Cb, useSupply10Cb, useSupply11Cb, useSupply12Cb, useSupply14Cb, useSupply15Cb, useSupply13Cb, useIssuerDomain1Cb, useIssuerDomain19Cb, useIssuerDomain2Cb, useIssuerDomain18Cb, useIssuerDomain17Cb, useIssuerDomain3Cb, useIssuerDomain4Cb, useIssuerDomain5Cb, useIssuerDomain6Cb, useIssuerDomain16Cb, useIssuerDomain15Cb, useIssuerDomain7Cb, useIssuerDomain13Cb, useIssuerDomain8Cb, useIssuerDomain9Cb, useIssuerDomain12Cb, useIssuerDomain14Cb, useIssuerDomain11Cb, useIssuerDomain10Cb, useIssuerDomain20Cb } from "../page-cbs/Registry";
import "../page-css/Registry.css";
import "../custom/Registry";

export default function Registry() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex138Props = useStore((state)=>state["Registry"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Registry"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const HeaderProps = useStore((state)=>state["Registry"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Registry"]["Header"]);
const HeaderCb = useHeaderCb()
const LinkLiquidHomeProps = useStore((state)=>state["Registry"]["LinkLiquidHome"]);
const LinkLiquidHomeIoProps = useIoStore((state)=>state["Registry"]["LinkLiquidHome"]);
const LinkLiquidHomeCb = useLinkLiquidHomeCb()
const AllButtonProps = useStore((state)=>state["Registry"]["AllButton"]);
const AllButtonIoProps = useIoStore((state)=>state["Registry"]["AllButton"]);
const AllButtonCb = useAllButtonCb()
const buttonProps = useStore((state)=>state["Registry"]["button"]);
const buttonIoProps = useIoStore((state)=>state["Registry"]["button"]);
const buttonCb = usebuttonCb()
const SearchProps = useStore((state)=>state["Registry"]["Search"]);
const SearchIoProps = useIoStore((state)=>state["Registry"]["Search"]);
const SearchCb = useSearchCb()
const SearchAssetProps = useStore((state)=>state["Registry"]["SearchAsset"]);
const SearchAssetIoProps = useIoStore((state)=>state["Registry"]["SearchAsset"]);
const SearchAssetCb = useSearchAssetCb()
const FlexFilterProps = useStore((state)=>state["Registry"]["FlexFilter"]);
const FlexFilterIoProps = useIoStore((state)=>state["Registry"]["FlexFilter"]);
const FlexFilterCb = useFlexFilterCb()
const FlexNameFilteProps = useStore((state)=>state["Registry"]["FlexNameFilte"]);
const FlexNameFilteIoProps = useIoStore((state)=>state["Registry"]["FlexNameFilte"]);
const FlexNameFilteCb = useFlexNameFilteCb()
const FlexTickerFilterProps = useStore((state)=>state["Registry"]["FlexTickerFilter"]);
const FlexTickerFilterIoProps = useIoStore((state)=>state["Registry"]["FlexTickerFilter"]);
const FlexTickerFilterCb = useFlexTickerFilterCb()
const FlexSupplyFilterProps = useStore((state)=>state["Registry"]["FlexSupplyFilter"]);
const FlexSupplyFilterIoProps = useIoStore((state)=>state["Registry"]["FlexSupplyFilter"]);
const FlexSupplyFilterCb = useFlexSupplyFilterCb()
const FlexIssuerDomainFilterProps = useStore((state)=>state["Registry"]["FlexIssuerDomainFilter"]);
const FlexIssuerDomainFilterIoProps = useIoStore((state)=>state["Registry"]["FlexIssuerDomainFilter"]);
const FlexIssuerDomainFilterCb = useFlexIssuerDomainFilterCb()
const FlexResponseOnFilterProps = useStore((state)=>state["Registry"]["FlexResponseOnFilter"]);
const FlexResponseOnFilterIoProps = useIoStore((state)=>state["Registry"]["FlexResponseOnFilter"]);
const FlexResponseOnFilterCb = useFlexResponseOnFilterCb()
const NameResponseProps = useStore((state)=>state["Registry"]["NameResponse"]);
const NameResponseIoProps = useIoStore((state)=>state["Registry"]["NameResponse"]);
const NameResponseCb = useNameResponseCb()
const TickerResponseProps = useStore((state)=>state["Registry"]["TickerResponse"]);
const TickerResponseIoProps = useIoStore((state)=>state["Registry"]["TickerResponse"]);
const TickerResponseCb = useTickerResponseCb()
const SupplyResponseProps = useStore((state)=>state["Registry"]["SupplyResponse"]);
const SupplyResponseIoProps = useIoStore((state)=>state["Registry"]["SupplyResponse"]);
const SupplyResponseCb = useSupplyResponseCb()
const IssuerDomainResponseProps = useStore((state)=>state["Registry"]["IssuerDomainResponse"]);
const IssuerDomainResponseIoProps = useIoStore((state)=>state["Registry"]["IssuerDomainResponse"]);
const IssuerDomainResponseCb = useIssuerDomainResponseCb()
const LinkHomeProps = useStore((state)=>state["Registry"]["LinkHome"]);
const LinkHomeIoProps = useIoStore((state)=>state["Registry"]["LinkHome"]);
const LinkHomeCb = useLinkHomeCb()
const Button20Props = useStore((state)=>state["Registry"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Registry"]["Button20"]);
const Button20Cb = useButton20Cb()
const Button21Props = useStore((state)=>state["Registry"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Registry"]["Button21"]);
const Button21Cb = useButton21Cb()
const searchAssetProps = useStore((state)=>state["Registry"]["searchAsset"]);
const searchAssetIoProps = useIoStore((state)=>state["Registry"]["searchAsset"]);
const searchAssetCb = usesearchAssetCb()
const nameFilterProps = useStore((state)=>state["Registry"]["nameFilter"]);
const nameFilterIoProps = useIoStore((state)=>state["Registry"]["nameFilter"]);
const nameFilterCb = usenameFilterCb()
const TickerFilterProps = useStore((state)=>state["Registry"]["TickerFilter"]);
const TickerFilterIoProps = useIoStore((state)=>state["Registry"]["TickerFilter"]);
const TickerFilterCb = useTickerFilterCb()
const SupplyFilterProps = useStore((state)=>state["Registry"]["SupplyFilter"]);
const SupplyFilterIoProps = useIoStore((state)=>state["Registry"]["SupplyFilter"]);
const SupplyFilterCb = useSupplyFilterCb()
const IssuerDomainFilterProps = useStore((state)=>state["Registry"]["IssuerDomainFilter"]);
const IssuerDomainFilterIoProps = useIoStore((state)=>state["Registry"]["IssuerDomainFilter"]);
const IssuerDomainFilterCb = useIssuerDomainFilterCb()
const Name1Props = useStore((state)=>state["Registry"]["Name1"]);
const Name1IoProps = useIoStore((state)=>state["Registry"]["Name1"]);
const Name1Cb = useName1Cb()
const Name19Props = useStore((state)=>state["Registry"]["Name19"]);
const Name19IoProps = useIoStore((state)=>state["Registry"]["Name19"]);
const Name19Cb = useName19Cb()
const Name20Props = useStore((state)=>state["Registry"]["Name20"]);
const Name20IoProps = useIoStore((state)=>state["Registry"]["Name20"]);
const Name20Cb = useName20Cb()
const Name2Props = useStore((state)=>state["Registry"]["Name2"]);
const Name2IoProps = useIoStore((state)=>state["Registry"]["Name2"]);
const Name2Cb = useName2Cb()
const Name3Props = useStore((state)=>state["Registry"]["Name3"]);
const Name3IoProps = useIoStore((state)=>state["Registry"]["Name3"]);
const Name3Cb = useName3Cb()
const Name18Props = useStore((state)=>state["Registry"]["Name18"]);
const Name18IoProps = useIoStore((state)=>state["Registry"]["Name18"]);
const Name18Cb = useName18Cb()
const Name9Props = useStore((state)=>state["Registry"]["Name9"]);
const Name9IoProps = useIoStore((state)=>state["Registry"]["Name9"]);
const Name9Cb = useName9Cb()
const Name17Props = useStore((state)=>state["Registry"]["Name17"]);
const Name17IoProps = useIoStore((state)=>state["Registry"]["Name17"]);
const Name17Cb = useName17Cb()
const Name6Props = useStore((state)=>state["Registry"]["Name6"]);
const Name6IoProps = useIoStore((state)=>state["Registry"]["Name6"]);
const Name6Cb = useName6Cb()
const Name12Props = useStore((state)=>state["Registry"]["Name12"]);
const Name12IoProps = useIoStore((state)=>state["Registry"]["Name12"]);
const Name12Cb = useName12Cb()
const Name7Props = useStore((state)=>state["Registry"]["Name7"]);
const Name7IoProps = useIoStore((state)=>state["Registry"]["Name7"]);
const Name7Cb = useName7Cb()
const Name5Props = useStore((state)=>state["Registry"]["Name5"]);
const Name5IoProps = useIoStore((state)=>state["Registry"]["Name5"]);
const Name5Cb = useName5Cb()
const Name4Props = useStore((state)=>state["Registry"]["Name4"]);
const Name4IoProps = useIoStore((state)=>state["Registry"]["Name4"]);
const Name4Cb = useName4Cb()
const Name8Props = useStore((state)=>state["Registry"]["Name8"]);
const Name8IoProps = useIoStore((state)=>state["Registry"]["Name8"]);
const Name8Cb = useName8Cb()
const Name11Props = useStore((state)=>state["Registry"]["Name11"]);
const Name11IoProps = useIoStore((state)=>state["Registry"]["Name11"]);
const Name11Cb = useName11Cb()
const Name10Props = useStore((state)=>state["Registry"]["Name10"]);
const Name10IoProps = useIoStore((state)=>state["Registry"]["Name10"]);
const Name10Cb = useName10Cb()
const Name16Props = useStore((state)=>state["Registry"]["Name16"]);
const Name16IoProps = useIoStore((state)=>state["Registry"]["Name16"]);
const Name16Cb = useName16Cb()
const Name13Props = useStore((state)=>state["Registry"]["Name13"]);
const Name13IoProps = useIoStore((state)=>state["Registry"]["Name13"]);
const Name13Cb = useName13Cb()
const Name14Props = useStore((state)=>state["Registry"]["Name14"]);
const Name14IoProps = useIoStore((state)=>state["Registry"]["Name14"]);
const Name14Cb = useName14Cb()
const Name15Props = useStore((state)=>state["Registry"]["Name15"]);
const Name15IoProps = useIoStore((state)=>state["Registry"]["Name15"]);
const Name15Cb = useName15Cb()
const Ticker1Props = useStore((state)=>state["Registry"]["Ticker1"]);
const Ticker1IoProps = useIoStore((state)=>state["Registry"]["Ticker1"]);
const Ticker1Cb = useTicker1Cb()
const Ticker2Props = useStore((state)=>state["Registry"]["Ticker2"]);
const Ticker2IoProps = useIoStore((state)=>state["Registry"]["Ticker2"]);
const Ticker2Cb = useTicker2Cb()
const Ticker20Props = useStore((state)=>state["Registry"]["Ticker20"]);
const Ticker20IoProps = useIoStore((state)=>state["Registry"]["Ticker20"]);
const Ticker20Cb = useTicker20Cb()
const Ticker3Props = useStore((state)=>state["Registry"]["Ticker3"]);
const Ticker3IoProps = useIoStore((state)=>state["Registry"]["Ticker3"]);
const Ticker3Cb = useTicker3Cb()
const Ticker4Props = useStore((state)=>state["Registry"]["Ticker4"]);
const Ticker4IoProps = useIoStore((state)=>state["Registry"]["Ticker4"]);
const Ticker4Cb = useTicker4Cb()
const Ticker5Props = useStore((state)=>state["Registry"]["Ticker5"]);
const Ticker5IoProps = useIoStore((state)=>state["Registry"]["Ticker5"]);
const Ticker5Cb = useTicker5Cb()
const Ticker19Props = useStore((state)=>state["Registry"]["Ticker19"]);
const Ticker19IoProps = useIoStore((state)=>state["Registry"]["Ticker19"]);
const Ticker19Cb = useTicker19Cb()
const Ticker6Props = useStore((state)=>state["Registry"]["Ticker6"]);
const Ticker6IoProps = useIoStore((state)=>state["Registry"]["Ticker6"]);
const Ticker6Cb = useTicker6Cb()
const Ticker7Props = useStore((state)=>state["Registry"]["Ticker7"]);
const Ticker7IoProps = useIoStore((state)=>state["Registry"]["Ticker7"]);
const Ticker7Cb = useTicker7Cb()
const Ticker8Props = useStore((state)=>state["Registry"]["Ticker8"]);
const Ticker8IoProps = useIoStore((state)=>state["Registry"]["Ticker8"]);
const Ticker8Cb = useTicker8Cb()
const Ticker10Props = useStore((state)=>state["Registry"]["Ticker10"]);
const Ticker10IoProps = useIoStore((state)=>state["Registry"]["Ticker10"]);
const Ticker10Cb = useTicker10Cb()
const Ticker9Props = useStore((state)=>state["Registry"]["Ticker9"]);
const Ticker9IoProps = useIoStore((state)=>state["Registry"]["Ticker9"]);
const Ticker9Cb = useTicker9Cb()
const Ticker12Props = useStore((state)=>state["Registry"]["Ticker12"]);
const Ticker12IoProps = useIoStore((state)=>state["Registry"]["Ticker12"]);
const Ticker12Cb = useTicker12Cb()
const Ticker18Props = useStore((state)=>state["Registry"]["Ticker18"]);
const Ticker18IoProps = useIoStore((state)=>state["Registry"]["Ticker18"]);
const Ticker18Cb = useTicker18Cb()
const Ticker11Props = useStore((state)=>state["Registry"]["Ticker11"]);
const Ticker11IoProps = useIoStore((state)=>state["Registry"]["Ticker11"]);
const Ticker11Cb = useTicker11Cb()
const Ticker17Props = useStore((state)=>state["Registry"]["Ticker17"]);
const Ticker17IoProps = useIoStore((state)=>state["Registry"]["Ticker17"]);
const Ticker17Cb = useTicker17Cb()
const Ticker13Props = useStore((state)=>state["Registry"]["Ticker13"]);
const Ticker13IoProps = useIoStore((state)=>state["Registry"]["Ticker13"]);
const Ticker13Cb = useTicker13Cb()
const Ticker16Props = useStore((state)=>state["Registry"]["Ticker16"]);
const Ticker16IoProps = useIoStore((state)=>state["Registry"]["Ticker16"]);
const Ticker16Cb = useTicker16Cb()
const Ticker15Props = useStore((state)=>state["Registry"]["Ticker15"]);
const Ticker15IoProps = useIoStore((state)=>state["Registry"]["Ticker15"]);
const Ticker15Cb = useTicker15Cb()
const Ticker14Props = useStore((state)=>state["Registry"]["Ticker14"]);
const Ticker14IoProps = useIoStore((state)=>state["Registry"]["Ticker14"]);
const Ticker14Cb = useTicker14Cb()
const Supply1Props = useStore((state)=>state["Registry"]["Supply1"]);
const Supply1IoProps = useIoStore((state)=>state["Registry"]["Supply1"]);
const Supply1Cb = useSupply1Cb()
const Supply19Props = useStore((state)=>state["Registry"]["Supply19"]);
const Supply19IoProps = useIoStore((state)=>state["Registry"]["Supply19"]);
const Supply19Cb = useSupply19Cb()
const Supply20Props = useStore((state)=>state["Registry"]["Supply20"]);
const Supply20IoProps = useIoStore((state)=>state["Registry"]["Supply20"]);
const Supply20Cb = useSupply20Cb()
const Supply2Props = useStore((state)=>state["Registry"]["Supply2"]);
const Supply2IoProps = useIoStore((state)=>state["Registry"]["Supply2"]);
const Supply2Cb = useSupply2Cb()
const Supply3Props = useStore((state)=>state["Registry"]["Supply3"]);
const Supply3IoProps = useIoStore((state)=>state["Registry"]["Supply3"]);
const Supply3Cb = useSupply3Cb()
const Supply4Props = useStore((state)=>state["Registry"]["Supply4"]);
const Supply4IoProps = useIoStore((state)=>state["Registry"]["Supply4"]);
const Supply4Cb = useSupply4Cb()
const Supply5Props = useStore((state)=>state["Registry"]["Supply5"]);
const Supply5IoProps = useIoStore((state)=>state["Registry"]["Supply5"]);
const Supply5Cb = useSupply5Cb()
const Supply6Props = useStore((state)=>state["Registry"]["Supply6"]);
const Supply6IoProps = useIoStore((state)=>state["Registry"]["Supply6"]);
const Supply6Cb = useSupply6Cb()
const Supply7Props = useStore((state)=>state["Registry"]["Supply7"]);
const Supply7IoProps = useIoStore((state)=>state["Registry"]["Supply7"]);
const Supply7Cb = useSupply7Cb()
const Supply18Props = useStore((state)=>state["Registry"]["Supply18"]);
const Supply18IoProps = useIoStore((state)=>state["Registry"]["Supply18"]);
const Supply18Cb = useSupply18Cb()
const Supply17Props = useStore((state)=>state["Registry"]["Supply17"]);
const Supply17IoProps = useIoStore((state)=>state["Registry"]["Supply17"]);
const Supply17Cb = useSupply17Cb()
const Supply8Props = useStore((state)=>state["Registry"]["Supply8"]);
const Supply8IoProps = useIoStore((state)=>state["Registry"]["Supply8"]);
const Supply8Cb = useSupply8Cb()
const Supply9Props = useStore((state)=>state["Registry"]["Supply9"]);
const Supply9IoProps = useIoStore((state)=>state["Registry"]["Supply9"]);
const Supply9Cb = useSupply9Cb()
const Supply16Props = useStore((state)=>state["Registry"]["Supply16"]);
const Supply16IoProps = useIoStore((state)=>state["Registry"]["Supply16"]);
const Supply16Cb = useSupply16Cb()
const Supply10Props = useStore((state)=>state["Registry"]["Supply10"]);
const Supply10IoProps = useIoStore((state)=>state["Registry"]["Supply10"]);
const Supply10Cb = useSupply10Cb()
const Supply11Props = useStore((state)=>state["Registry"]["Supply11"]);
const Supply11IoProps = useIoStore((state)=>state["Registry"]["Supply11"]);
const Supply11Cb = useSupply11Cb()
const Supply12Props = useStore((state)=>state["Registry"]["Supply12"]);
const Supply12IoProps = useIoStore((state)=>state["Registry"]["Supply12"]);
const Supply12Cb = useSupply12Cb()
const Supply14Props = useStore((state)=>state["Registry"]["Supply14"]);
const Supply14IoProps = useIoStore((state)=>state["Registry"]["Supply14"]);
const Supply14Cb = useSupply14Cb()
const Supply15Props = useStore((state)=>state["Registry"]["Supply15"]);
const Supply15IoProps = useIoStore((state)=>state["Registry"]["Supply15"]);
const Supply15Cb = useSupply15Cb()
const Supply13Props = useStore((state)=>state["Registry"]["Supply13"]);
const Supply13IoProps = useIoStore((state)=>state["Registry"]["Supply13"]);
const Supply13Cb = useSupply13Cb()
const IssuerDomain1Props = useStore((state)=>state["Registry"]["IssuerDomain1"]);
const IssuerDomain1IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain1"]);
const IssuerDomain1Cb = useIssuerDomain1Cb()
const IssuerDomain19Props = useStore((state)=>state["Registry"]["IssuerDomain19"]);
const IssuerDomain19IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain19"]);
const IssuerDomain19Cb = useIssuerDomain19Cb()
const IssuerDomain2Props = useStore((state)=>state["Registry"]["IssuerDomain2"]);
const IssuerDomain2IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain2"]);
const IssuerDomain2Cb = useIssuerDomain2Cb()
const IssuerDomain18Props = useStore((state)=>state["Registry"]["IssuerDomain18"]);
const IssuerDomain18IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain18"]);
const IssuerDomain18Cb = useIssuerDomain18Cb()
const IssuerDomain17Props = useStore((state)=>state["Registry"]["IssuerDomain17"]);
const IssuerDomain17IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain17"]);
const IssuerDomain17Cb = useIssuerDomain17Cb()
const IssuerDomain3Props = useStore((state)=>state["Registry"]["IssuerDomain3"]);
const IssuerDomain3IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain3"]);
const IssuerDomain3Cb = useIssuerDomain3Cb()
const IssuerDomain4Props = useStore((state)=>state["Registry"]["IssuerDomain4"]);
const IssuerDomain4IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain4"]);
const IssuerDomain4Cb = useIssuerDomain4Cb()
const IssuerDomain5Props = useStore((state)=>state["Registry"]["IssuerDomain5"]);
const IssuerDomain5IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain5"]);
const IssuerDomain5Cb = useIssuerDomain5Cb()
const IssuerDomain6Props = useStore((state)=>state["Registry"]["IssuerDomain6"]);
const IssuerDomain6IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain6"]);
const IssuerDomain6Cb = useIssuerDomain6Cb()
const IssuerDomain16Props = useStore((state)=>state["Registry"]["IssuerDomain16"]);
const IssuerDomain16IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain16"]);
const IssuerDomain16Cb = useIssuerDomain16Cb()
const IssuerDomain15Props = useStore((state)=>state["Registry"]["IssuerDomain15"]);
const IssuerDomain15IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain15"]);
const IssuerDomain15Cb = useIssuerDomain15Cb()
const IssuerDomain7Props = useStore((state)=>state["Registry"]["IssuerDomain7"]);
const IssuerDomain7IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain7"]);
const IssuerDomain7Cb = useIssuerDomain7Cb()
const IssuerDomain13Props = useStore((state)=>state["Registry"]["IssuerDomain13"]);
const IssuerDomain13IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain13"]);
const IssuerDomain13Cb = useIssuerDomain13Cb()
const IssuerDomain8Props = useStore((state)=>state["Registry"]["IssuerDomain8"]);
const IssuerDomain8IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain8"]);
const IssuerDomain8Cb = useIssuerDomain8Cb()
const IssuerDomain9Props = useStore((state)=>state["Registry"]["IssuerDomain9"]);
const IssuerDomain9IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain9"]);
const IssuerDomain9Cb = useIssuerDomain9Cb()
const IssuerDomain12Props = useStore((state)=>state["Registry"]["IssuerDomain12"]);
const IssuerDomain12IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain12"]);
const IssuerDomain12Cb = useIssuerDomain12Cb()
const IssuerDomain14Props = useStore((state)=>state["Registry"]["IssuerDomain14"]);
const IssuerDomain14IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain14"]);
const IssuerDomain14Cb = useIssuerDomain14Cb()
const IssuerDomain11Props = useStore((state)=>state["Registry"]["IssuerDomain11"]);
const IssuerDomain11IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain11"]);
const IssuerDomain11Cb = useIssuerDomain11Cb()
const IssuerDomain10Props = useStore((state)=>state["Registry"]["IssuerDomain10"]);
const IssuerDomain10IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain10"]);
const IssuerDomain10Cb = useIssuerDomain10Cb()
const IssuerDomain20Props = useStore((state)=>state["Registry"]["IssuerDomain20"]);
const IssuerDomain20IoProps = useIoStore((state)=>state["Registry"]["IssuerDomain20"]);
const IssuerDomain20Cb = useIssuerDomain20Cb()

  return (<>
  <Flex2 className="p-Registry Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Flex2 className="p-Registry Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex2 className="p-Registry LinkLiquidHome bpt" {...LinkLiquidHomeProps} {...LinkLiquidHomeCb} {...LinkLiquidHomeIoProps}>
<Link2 className="p-Registry LinkHome bpt" {...LinkHomeProps} {...LinkHomeCb} {...LinkHomeIoProps}/>
</Flex2>
<Flex2 className="p-Registry AllButton bpt" {...AllButtonProps} {...AllButtonCb} {...AllButtonIoProps}>
<Flex2 className="p-Registry button bpt" {...buttonProps} {...buttonCb} {...buttonIoProps}>
<Button2 className="p-Registry Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
<Button2 className="p-Registry Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Registry Search bpt" {...SearchProps} {...SearchCb} {...SearchIoProps}>
<Flex2 className="p-Registry SearchAsset bpt" {...SearchAssetProps} {...SearchAssetCb} {...SearchAssetIoProps}>
<Input2 className="p-Registry searchAsset bpt" {...searchAssetProps} {...searchAssetCb} {...searchAssetIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Registry FlexFilter bpt" {...FlexFilterProps} {...FlexFilterCb} {...FlexFilterIoProps}>
<Flex2 className="p-Registry FlexNameFilte bpt" {...FlexNameFilteProps} {...FlexNameFilteCb} {...FlexNameFilteIoProps}>
<TextBox2 className="p-Registry nameFilter bpt" {...nameFilterProps} {...nameFilterCb} {...nameFilterIoProps}/>
</Flex2>
<Flex2 className="p-Registry FlexTickerFilter bpt" {...FlexTickerFilterProps} {...FlexTickerFilterCb} {...FlexTickerFilterIoProps}>
<TextBox2 className="p-Registry TickerFilter bpt" {...TickerFilterProps} {...TickerFilterCb} {...TickerFilterIoProps}/>
</Flex2>
<Flex2 className="p-Registry FlexSupplyFilter bpt" {...FlexSupplyFilterProps} {...FlexSupplyFilterCb} {...FlexSupplyFilterIoProps}>
<TextBox2 className="p-Registry SupplyFilter bpt" {...SupplyFilterProps} {...SupplyFilterCb} {...SupplyFilterIoProps}/>
</Flex2>
<Flex2 className="p-Registry FlexIssuerDomainFilter bpt" {...FlexIssuerDomainFilterProps} {...FlexIssuerDomainFilterCb} {...FlexIssuerDomainFilterIoProps}>
<TextBox2 className="p-Registry IssuerDomainFilter bpt" {...IssuerDomainFilterProps} {...IssuerDomainFilterCb} {...IssuerDomainFilterIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Registry FlexResponseOnFilter bpt" {...FlexResponseOnFilterProps} {...FlexResponseOnFilterCb} {...FlexResponseOnFilterIoProps}>
<Flex2 className="p-Registry NameResponse bpt" {...NameResponseProps} {...NameResponseCb} {...NameResponseIoProps}>
<TextBox2 className="p-Registry Name1 bpt" {...Name1Props} {...Name1Cb} {...Name1IoProps}/>
<TextBox2 className="p-Registry Name2 bpt" {...Name2Props} {...Name2Cb} {...Name2IoProps}/>
<TextBox2 className="p-Registry Name3 bpt" {...Name3Props} {...Name3Cb} {...Name3IoProps}/>
<TextBox2 className="p-Registry Name4 bpt" {...Name4Props} {...Name4Cb} {...Name4IoProps}/>
<TextBox2 className="p-Registry Name5 bpt" {...Name5Props} {...Name5Cb} {...Name5IoProps}/>
<TextBox2 className="p-Registry Name6 bpt" {...Name6Props} {...Name6Cb} {...Name6IoProps}/>
<TextBox2 className="p-Registry Name7 bpt" {...Name7Props} {...Name7Cb} {...Name7IoProps}/>
<TextBox2 className="p-Registry Name8 bpt" {...Name8Props} {...Name8Cb} {...Name8IoProps}/>
<TextBox2 className="p-Registry Name9 bpt" {...Name9Props} {...Name9Cb} {...Name9IoProps}/>
<TextBox2 className="p-Registry Name10 bpt" {...Name10Props} {...Name10Cb} {...Name10IoProps}/>
<TextBox2 className="p-Registry Name11 bpt" {...Name11Props} {...Name11Cb} {...Name11IoProps}/>
<TextBox2 className="p-Registry Name12 bpt" {...Name12Props} {...Name12Cb} {...Name12IoProps}/>
<TextBox2 className="p-Registry Name13 bpt" {...Name13Props} {...Name13Cb} {...Name13IoProps}/>
<TextBox2 className="p-Registry Name14 bpt" {...Name14Props} {...Name14Cb} {...Name14IoProps}/>
<TextBox2 className="p-Registry Name15 bpt" {...Name15Props} {...Name15Cb} {...Name15IoProps}/>
<TextBox2 className="p-Registry Name16 bpt" {...Name16Props} {...Name16Cb} {...Name16IoProps}/>
<TextBox2 className="p-Registry Name17 bpt" {...Name17Props} {...Name17Cb} {...Name17IoProps}/>
<TextBox2 className="p-Registry Name18 bpt" {...Name18Props} {...Name18Cb} {...Name18IoProps}/>
<TextBox2 className="p-Registry Name19 bpt" {...Name19Props} {...Name19Cb} {...Name19IoProps}/>
<TextBox2 className="p-Registry Name20 bpt" {...Name20Props} {...Name20Cb} {...Name20IoProps}/>
</Flex2>
<Flex2 className="p-Registry TickerResponse bpt" {...TickerResponseProps} {...TickerResponseCb} {...TickerResponseIoProps}>
<TextBox2 className="p-Registry Ticker1 bpt" {...Ticker1Props} {...Ticker1Cb} {...Ticker1IoProps}/>
<TextBox2 className="p-Registry Ticker2 bpt" {...Ticker2Props} {...Ticker2Cb} {...Ticker2IoProps}/>
<TextBox2 className="p-Registry Ticker3 bpt" {...Ticker3Props} {...Ticker3Cb} {...Ticker3IoProps}/>
<TextBox2 className="p-Registry Ticker4 bpt" {...Ticker4Props} {...Ticker4Cb} {...Ticker4IoProps}/>
<TextBox2 className="p-Registry Ticker5 bpt" {...Ticker5Props} {...Ticker5Cb} {...Ticker5IoProps}/>
<TextBox2 className="p-Registry Ticker6 bpt" {...Ticker6Props} {...Ticker6Cb} {...Ticker6IoProps}/>
<TextBox2 className="p-Registry Ticker7 bpt" {...Ticker7Props} {...Ticker7Cb} {...Ticker7IoProps}/>
<TextBox2 className="p-Registry Ticker8 bpt" {...Ticker8Props} {...Ticker8Cb} {...Ticker8IoProps}/>
<TextBox2 className="p-Registry Ticker9 bpt" {...Ticker9Props} {...Ticker9Cb} {...Ticker9IoProps}/>
<TextBox2 className="p-Registry Ticker10 bpt" {...Ticker10Props} {...Ticker10Cb} {...Ticker10IoProps}/>
<TextBox2 className="p-Registry Ticker11 bpt" {...Ticker11Props} {...Ticker11Cb} {...Ticker11IoProps}/>
<TextBox2 className="p-Registry Ticker12 bpt" {...Ticker12Props} {...Ticker12Cb} {...Ticker12IoProps}/>
<TextBox2 className="p-Registry Ticker13 bpt" {...Ticker13Props} {...Ticker13Cb} {...Ticker13IoProps}/>
<TextBox2 className="p-Registry Ticker14 bpt" {...Ticker14Props} {...Ticker14Cb} {...Ticker14IoProps}/>
<TextBox2 className="p-Registry Ticker15 bpt" {...Ticker15Props} {...Ticker15Cb} {...Ticker15IoProps}/>
<TextBox2 className="p-Registry Ticker16 bpt" {...Ticker16Props} {...Ticker16Cb} {...Ticker16IoProps}/>
<TextBox2 className="p-Registry Ticker17 bpt" {...Ticker17Props} {...Ticker17Cb} {...Ticker17IoProps}/>
<TextBox2 className="p-Registry Ticker18 bpt" {...Ticker18Props} {...Ticker18Cb} {...Ticker18IoProps}/>
<TextBox2 className="p-Registry Ticker19 bpt" {...Ticker19Props} {...Ticker19Cb} {...Ticker19IoProps}/>
<TextBox2 className="p-Registry Ticker20 bpt" {...Ticker20Props} {...Ticker20Cb} {...Ticker20IoProps}/>
</Flex2>
<Flex2 className="p-Registry SupplyResponse bpt" {...SupplyResponseProps} {...SupplyResponseCb} {...SupplyResponseIoProps}>
<TextBox2 className="p-Registry Supply1 bpt" {...Supply1Props} {...Supply1Cb} {...Supply1IoProps}/>
<TextBox2 className="p-Registry Supply2 bpt" {...Supply2Props} {...Supply2Cb} {...Supply2IoProps}/>
<TextBox2 className="p-Registry Supply3 bpt" {...Supply3Props} {...Supply3Cb} {...Supply3IoProps}/>
<TextBox2 className="p-Registry Supply4 bpt" {...Supply4Props} {...Supply4Cb} {...Supply4IoProps}/>
<TextBox2 className="p-Registry Supply5 bpt" {...Supply5Props} {...Supply5Cb} {...Supply5IoProps}/>
<TextBox2 className="p-Registry Supply6 bpt" {...Supply6Props} {...Supply6Cb} {...Supply6IoProps}/>
<TextBox2 className="p-Registry Supply7 bpt" {...Supply7Props} {...Supply7Cb} {...Supply7IoProps}/>
<TextBox2 className="p-Registry Supply8 bpt" {...Supply8Props} {...Supply8Cb} {...Supply8IoProps}/>
<TextBox2 className="p-Registry Supply9 bpt" {...Supply9Props} {...Supply9Cb} {...Supply9IoProps}/>
<TextBox2 className="p-Registry Supply10 bpt" {...Supply10Props} {...Supply10Cb} {...Supply10IoProps}/>
<TextBox2 className="p-Registry Supply11 bpt" {...Supply11Props} {...Supply11Cb} {...Supply11IoProps}/>
<TextBox2 className="p-Registry Supply12 bpt" {...Supply12Props} {...Supply12Cb} {...Supply12IoProps}/>
<TextBox2 className="p-Registry Supply13 bpt" {...Supply13Props} {...Supply13Cb} {...Supply13IoProps}/>
<TextBox2 className="p-Registry Supply14 bpt" {...Supply14Props} {...Supply14Cb} {...Supply14IoProps}/>
<TextBox2 className="p-Registry Supply15 bpt" {...Supply15Props} {...Supply15Cb} {...Supply15IoProps}/>
<TextBox2 className="p-Registry Supply16 bpt" {...Supply16Props} {...Supply16Cb} {...Supply16IoProps}/>
<TextBox2 className="p-Registry Supply17 bpt" {...Supply17Props} {...Supply17Cb} {...Supply17IoProps}/>
<TextBox2 className="p-Registry Supply18 bpt" {...Supply18Props} {...Supply18Cb} {...Supply18IoProps}/>
<TextBox2 className="p-Registry Supply19 bpt" {...Supply19Props} {...Supply19Cb} {...Supply19IoProps}/>
<TextBox2 className="p-Registry Supply20 bpt" {...Supply20Props} {...Supply20Cb} {...Supply20IoProps}/>
</Flex2>
<Flex2 className="p-Registry IssuerDomainResponse bpt" {...IssuerDomainResponseProps} {...IssuerDomainResponseCb} {...IssuerDomainResponseIoProps}>
<TextBox2 className="p-Registry IssuerDomain1 bpt" {...IssuerDomain1Props} {...IssuerDomain1Cb} {...IssuerDomain1IoProps}/>
<TextBox2 className="p-Registry IssuerDomain2 bpt" {...IssuerDomain2Props} {...IssuerDomain2Cb} {...IssuerDomain2IoProps}/>
<TextBox2 className="p-Registry IssuerDomain3 bpt" {...IssuerDomain3Props} {...IssuerDomain3Cb} {...IssuerDomain3IoProps}/>
<TextBox2 className="p-Registry IssuerDomain4 bpt" {...IssuerDomain4Props} {...IssuerDomain4Cb} {...IssuerDomain4IoProps}/>
<TextBox2 className="p-Registry IssuerDomain5 bpt" {...IssuerDomain5Props} {...IssuerDomain5Cb} {...IssuerDomain5IoProps}/>
<TextBox2 className="p-Registry IssuerDomain6 bpt" {...IssuerDomain6Props} {...IssuerDomain6Cb} {...IssuerDomain6IoProps}/>
<TextBox2 className="p-Registry IssuerDomain7 bpt" {...IssuerDomain7Props} {...IssuerDomain7Cb} {...IssuerDomain7IoProps}/>
<TextBox2 className="p-Registry IssuerDomain8 bpt" {...IssuerDomain8Props} {...IssuerDomain8Cb} {...IssuerDomain8IoProps}/>
<TextBox2 className="p-Registry IssuerDomain9 bpt" {...IssuerDomain9Props} {...IssuerDomain9Cb} {...IssuerDomain9IoProps}/>
<TextBox2 className="p-Registry IssuerDomain10 bpt" {...IssuerDomain10Props} {...IssuerDomain10Cb} {...IssuerDomain10IoProps}/>
<TextBox2 className="p-Registry IssuerDomain11 bpt" {...IssuerDomain11Props} {...IssuerDomain11Cb} {...IssuerDomain11IoProps}/>
<TextBox2 className="p-Registry IssuerDomain12 bpt" {...IssuerDomain12Props} {...IssuerDomain12Cb} {...IssuerDomain12IoProps}/>
<TextBox2 className="p-Registry IssuerDomain13 bpt" {...IssuerDomain13Props} {...IssuerDomain13Cb} {...IssuerDomain13IoProps}/>
<TextBox2 className="p-Registry IssuerDomain14 bpt" {...IssuerDomain14Props} {...IssuerDomain14Cb} {...IssuerDomain14IoProps}/>
<TextBox2 className="p-Registry IssuerDomain15 bpt" {...IssuerDomain15Props} {...IssuerDomain15Cb} {...IssuerDomain15IoProps}/>
<TextBox2 className="p-Registry IssuerDomain16 bpt" {...IssuerDomain16Props} {...IssuerDomain16Cb} {...IssuerDomain16IoProps}/>
<TextBox2 className="p-Registry IssuerDomain17 bpt" {...IssuerDomain17Props} {...IssuerDomain17Cb} {...IssuerDomain17IoProps}/>
<TextBox2 className="p-Registry IssuerDomain18 bpt" {...IssuerDomain18Props} {...IssuerDomain18Cb} {...IssuerDomain18IoProps}/>
<TextBox2 className="p-Registry IssuerDomain19 bpt" {...IssuerDomain19Props} {...IssuerDomain19Cb} {...IssuerDomain19IoProps}/>
<TextBox2 className="p-Registry IssuerDomain20 bpt" {...IssuerDomain20Props} {...IssuerDomain20Cb} {...IssuerDomain20IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
