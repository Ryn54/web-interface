import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex137Cb, useHeaderCb, useSearchAndTestAssetCb, usebuttonlistCb, useLinkHomeCb, useFlex250Cb, useFlex257Cb, useFlex272Cb, useFlex260Cb, useinfoNameCb, useNameCb, useName:Cb, useFlex261Cb, useFlex121Cb, useFlex123Cb, useFlex124Cb, useFlex262Cb, useFlex129Cb, useFlex131Cb, useFlex132Cb, useFlex274Cb, useinfoAssetHashCb, useassetHashCb, useassetHash:Cb, useLogoCb, useInputCb, useDropdown1Cb, useLiquidtestnetCb, useRegistryCb, useLinkLiquidHomeCb, useTextBox118Cb, useTextBox120Cb, useTickerCb, useTextBox121Cb, useTextBox125Cb, useTextBox126Cb, useNameAssetHashCb, useresponseAssetHash:Cb } from "../page-cbs/asset Hash";
import "../page-css/asset Hash.css";
import "../custom/asset Hash";

export default function AssetHash() {
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

  const Flex137Props = useStore((state)=>state["asset Hash"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["asset Hash"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const HeaderProps = useStore((state)=>state["asset Hash"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["asset Hash"]["Header"]);
const HeaderCb = useHeaderCb()
const SearchAndTestAssetProps = useStore((state)=>state["asset Hash"]["SearchAndTestAsset"]);
const SearchAndTestAssetIoProps = useIoStore((state)=>state["asset Hash"]["SearchAndTestAsset"]);
const SearchAndTestAssetCb = useSearchAndTestAssetCb()
const buttonlistProps = useStore((state)=>state["asset Hash"]["buttonlist"]);
const buttonlistIoProps = useIoStore((state)=>state["asset Hash"]["buttonlist"]);
const buttonlistCb = usebuttonlistCb()
const LinkHomeProps = useStore((state)=>state["asset Hash"]["LinkHome"]);
const LinkHomeIoProps = useIoStore((state)=>state["asset Hash"]["LinkHome"]);
const LinkHomeCb = useLinkHomeCb()
const Flex250Props = useStore((state)=>state["asset Hash"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["asset Hash"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex257Props = useStore((state)=>state["asset Hash"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["asset Hash"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex272Props = useStore((state)=>state["asset Hash"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["asset Hash"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex260Props = useStore((state)=>state["asset Hash"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["asset Hash"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const infoNameProps = useStore((state)=>state["asset Hash"]["infoName"]);
const infoNameIoProps = useIoStore((state)=>state["asset Hash"]["infoName"]);
const infoNameCb = useinfoNameCb()
const NameProps = useStore((state)=>state["asset Hash"]["Name"]);
const NameIoProps = useIoStore((state)=>state["asset Hash"]["Name"]);
const NameCb = useNameCb()
const Name:Props = useStore((state)=>state["asset Hash"]["Name:"]);
const Name:IoProps = useIoStore((state)=>state["asset Hash"]["Name:"]);
const Name:Cb = useName:Cb()
const Flex261Props = useStore((state)=>state["asset Hash"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["asset Hash"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex121Props = useStore((state)=>state["asset Hash"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["asset Hash"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex123Props = useStore((state)=>state["asset Hash"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["asset Hash"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex124Props = useStore((state)=>state["asset Hash"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["asset Hash"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex262Props = useStore((state)=>state["asset Hash"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["asset Hash"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex129Props = useStore((state)=>state["asset Hash"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["asset Hash"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex131Props = useStore((state)=>state["asset Hash"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["asset Hash"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["asset Hash"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["asset Hash"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex274Props = useStore((state)=>state["asset Hash"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["asset Hash"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const infoAssetHashProps = useStore((state)=>state["asset Hash"]["infoAssetHash"]);
const infoAssetHashIoProps = useIoStore((state)=>state["asset Hash"]["infoAssetHash"]);
const infoAssetHashCb = useinfoAssetHashCb()
const assetHashProps = useStore((state)=>state["asset Hash"]["assetHash"]);
const assetHashIoProps = useIoStore((state)=>state["asset Hash"]["assetHash"]);
const assetHashCb = useassetHashCb()
const assetHash:Props = useStore((state)=>state["asset Hash"]["assetHash:"]);
const assetHash:IoProps = useIoStore((state)=>state["asset Hash"]["assetHash:"]);
const assetHash:Cb = useassetHash:Cb()
const LogoProps = useStore((state)=>state["asset Hash"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["asset Hash"]["Logo"]);
const LogoCb = useLogoCb()
const InputProps = useStore((state)=>state["asset Hash"]["Input"]);
const InputIoProps = useIoStore((state)=>state["asset Hash"]["Input"]);
const InputCb = useInputCb()
const Dropdown1Props = useStore((state)=>state["asset Hash"]["Dropdown1"]);
const Dropdown1IoProps = useIoStore((state)=>state["asset Hash"]["Dropdown1"]);
const Dropdown1Cb = useDropdown1Cb()
const LiquidtestnetProps = useStore((state)=>state["asset Hash"]["Liquidtestnet"]);
const LiquidtestnetIoProps = useIoStore((state)=>state["asset Hash"]["Liquidtestnet"]);
const LiquidtestnetCb = useLiquidtestnetCb()
const RegistryProps = useStore((state)=>state["asset Hash"]["Registry"]);
const RegistryIoProps = useIoStore((state)=>state["asset Hash"]["Registry"]);
const RegistryCb = useRegistryCb()
const LinkLiquidHomeProps = useStore((state)=>state["asset Hash"]["LinkLiquidHome"]);
const LinkLiquidHomeIoProps = useIoStore((state)=>state["asset Hash"]["LinkLiquidHome"]);
const LinkLiquidHomeCb = useLinkLiquidHomeCb()
const TextBox118Props = useStore((state)=>state["asset Hash"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["asset Hash"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox120Props = useStore((state)=>state["asset Hash"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["asset Hash"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TickerProps = useStore((state)=>state["asset Hash"]["Ticker"]);
const TickerIoProps = useIoStore((state)=>state["asset Hash"]["Ticker"]);
const TickerCb = useTickerCb()
const TextBox121Props = useStore((state)=>state["asset Hash"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["asset Hash"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox125Props = useStore((state)=>state["asset Hash"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["asset Hash"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["asset Hash"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["asset Hash"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const NameAssetHashProps = useStore((state)=>state["asset Hash"]["NameAssetHash"]);
const NameAssetHashIoProps = useIoStore((state)=>state["asset Hash"]["NameAssetHash"]);
const NameAssetHashCb = useNameAssetHashCb()
const responseAssetHash:Props = useStore((state)=>state["asset Hash"]["responseAssetHash:"]);
const responseAssetHash:IoProps = useIoStore((state)=>state["asset Hash"]["responseAssetHash:"]);
const responseAssetHash:Cb = useresponseAssetHash:Cb()

  return (<>
  <Flex1 className="p-asset Hash Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Flex1 className="p-asset Hash Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex1 className="p-asset Hash LinkHome bpt" {...LinkHomeProps} {...LinkHomeCb} {...LinkHomeIoProps}>
<Link1 className="p-asset Hash LinkLiquidHome bpt" {...LinkLiquidHomeProps} {...LinkLiquidHomeCb} {...LinkLiquidHomeIoProps}/>
</Flex1>
<Flex1 className="p-asset Hash SearchAndTestAsset bpt" {...SearchAndTestAssetProps} {...SearchAndTestAssetCb} {...SearchAndTestAssetIoProps}>
<Dropdown className="p-asset Hash Dropdown1 bpt" {...Dropdown1Props} {...Dropdown1Cb} {...Dropdown1IoProps}/>
<Flex1 className="p-asset Hash buttonlist bpt" {...buttonlistProps} {...buttonlistCb} {...buttonlistIoProps}>
<Button1 className="p-asset Hash Liquidtestnet bpt" {...LiquidtestnetProps} {...LiquidtestnetCb} {...LiquidtestnetIoProps}/>
<Button1 className="p-asset Hash Registry bpt" {...RegistryProps} {...RegistryCb} {...RegistryIoProps}/>
</Flex1>
<Input1 className="p-asset Hash Input bpt" {...InputProps} {...InputCb} {...InputIoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-asset Hash Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex1 className="p-asset Hash Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Flex1 className="p-asset Hash Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Flex1 className="p-asset Hash Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex1 className="p-asset Hash infoAssetHash bpt" {...infoAssetHashProps} {...infoAssetHashCb} {...infoAssetHashIoProps}>
<Flex1 className="p-asset Hash assetHash bpt" {...assetHashProps} {...assetHashCb} {...assetHashIoProps}>
<TextBox1 className="p-asset Hash NameAssetHash bpt" {...NameAssetHashProps} {...NameAssetHashCb} {...NameAssetHashIoProps}/>
</Flex1>
<Flex1 className="p-asset Hash assetHash: bpt" {...assetHash:Props} {...assetHash:Cb} {...assetHash:IoProps}>
<TextBox1 className="p-asset Hash responseAssetHash: bpt" {...responseAssetHash:Props} {...responseAssetHash:Cb} {...responseAssetHash:IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-asset Hash Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Flex1 className="p-asset Hash infoName bpt" {...infoNameProps} {...infoNameCb} {...infoNameIoProps}>
<Flex1 className="p-asset Hash Name bpt" {...NameProps} {...NameCb} {...NameIoProps}>
<TextBox1 className="p-asset Hash TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
</Flex1>
<Flex1 className="p-asset Hash Name: bpt" {...Name:Props} {...Name:Cb} {...Name:IoProps}>
<TextBox1 className="p-asset Hash TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-asset Hash Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Flex1 className="p-asset Hash Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Flex1 className="p-asset Hash Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<TextBox1 className="p-asset Hash Ticker bpt" {...TickerProps} {...TickerCb} {...TickerIoProps}/>
</Flex1>
<Flex1 className="p-asset Hash Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox1 className="p-asset Hash TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-asset Hash Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex1 className="p-asset Hash Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Flex1 className="p-asset Hash Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox1 className="p-asset Hash TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex1>
<Flex1 className="p-asset Hash Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox1 className="p-asset Hash TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Image className="p-asset Hash Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}/>
</Flex1>
  </>);
}
