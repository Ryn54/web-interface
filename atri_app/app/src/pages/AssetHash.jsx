import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useBackgroundCb, useFlex291Cb, useCardCb, useInfoAssetCb, usePrecisionCb, useTickerCb, useNameCb, useAssetHashCb, useFlex292Cb, useHeaderCb, useFlex284Cb, useFlex296Cb, useFlex297Cb, useFlex298Cb, useFlex300Cb, useImage51Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useTextBox208Cb, useLinkHomeCb, useInput14Cb, useButton31Cb, useButton32Cb, useLink7Cb } from "../page-cbs/AssetHash";
import "../page-css/AssetHash.css";
import "../custom/AssetHash";

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

  const BackgroundProps = useStore((state)=>state["AssetHash"]["Background"]);
const BackgroundIoProps = useIoStore((state)=>state["AssetHash"]["Background"]);
const BackgroundCb = useBackgroundCb()
const Flex291Props = useStore((state)=>state["AssetHash"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["AssetHash"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const CardProps = useStore((state)=>state["AssetHash"]["Card"]);
const CardIoProps = useIoStore((state)=>state["AssetHash"]["Card"]);
const CardCb = useCardCb()
const InfoAssetProps = useStore((state)=>state["AssetHash"]["InfoAsset"]);
const InfoAssetIoProps = useIoStore((state)=>state["AssetHash"]["InfoAsset"]);
const InfoAssetCb = useInfoAssetCb()
const PrecisionProps = useStore((state)=>state["AssetHash"]["Precision"]);
const PrecisionIoProps = useIoStore((state)=>state["AssetHash"]["Precision"]);
const PrecisionCb = usePrecisionCb()
const TickerProps = useStore((state)=>state["AssetHash"]["Ticker"]);
const TickerIoProps = useIoStore((state)=>state["AssetHash"]["Ticker"]);
const TickerCb = useTickerCb()
const NameProps = useStore((state)=>state["AssetHash"]["Name"]);
const NameIoProps = useIoStore((state)=>state["AssetHash"]["Name"]);
const NameCb = useNameCb()
const AssetHashProps = useStore((state)=>state["AssetHash"]["AssetHash"]);
const AssetHashIoProps = useIoStore((state)=>state["AssetHash"]["AssetHash"]);
const AssetHashCb = useAssetHashCb()
const Flex292Props = useStore((state)=>state["AssetHash"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["AssetHash"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const HeaderProps = useStore((state)=>state["AssetHash"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["AssetHash"]["Header"]);
const HeaderCb = useHeaderCb()
const Flex284Props = useStore((state)=>state["AssetHash"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["AssetHash"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex296Props = useStore((state)=>state["AssetHash"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["AssetHash"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex297Props = useStore((state)=>state["AssetHash"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["AssetHash"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Flex298Props = useStore((state)=>state["AssetHash"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["AssetHash"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Flex300Props = useStore((state)=>state["AssetHash"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["AssetHash"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Image51Props = useStore((state)=>state["AssetHash"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["AssetHash"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox200Props = useStore((state)=>state["AssetHash"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["AssetHash"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["AssetHash"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["AssetHash"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["AssetHash"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["AssetHash"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["AssetHash"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["AssetHash"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["AssetHash"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["AssetHash"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["AssetHash"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["AssetHash"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["AssetHash"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["AssetHash"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox208Props = useStore((state)=>state["AssetHash"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["AssetHash"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const LinkHomeProps = useStore((state)=>state["AssetHash"]["LinkHome"]);
const LinkHomeIoProps = useIoStore((state)=>state["AssetHash"]["LinkHome"]);
const LinkHomeCb = useLinkHomeCb()
const Input14Props = useStore((state)=>state["AssetHash"]["Input14"]);
const Input14IoProps = useIoStore((state)=>state["AssetHash"]["Input14"]);
const Input14Cb = useInput14Cb()
const Button31Props = useStore((state)=>state["AssetHash"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["AssetHash"]["Button31"]);
const Button31Cb = useButton31Cb()
const Button32Props = useStore((state)=>state["AssetHash"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["AssetHash"]["Button32"]);
const Button32Cb = useButton32Cb()
const Link7Props = useStore((state)=>state["AssetHash"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["AssetHash"]["Link7"]);
const Link7Cb = useLink7Cb()

  return (<>
  <Flex1 className="p-AssetHash Background bpt" {...BackgroundProps} {...BackgroundCb} {...BackgroundIoProps}>
<Flex1 className="p-AssetHash Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<Flex1 className="p-AssetHash Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Link1 className="p-AssetHash LinkHome bpt" {...LinkHomeProps} {...LinkHomeCb} {...LinkHomeIoProps}/>
<Flex1 className="p-AssetHash Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex1 className="p-AssetHash Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<Input1 className="p-AssetHash Input14 bpt" {...Input14Props} {...Input14Cb} {...Input14IoProps}/>
<Button1 className="p-AssetHash Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
</Flex1>
<Flex1 className="p-AssetHash Flex297 bpt" {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<Flex1 className="p-AssetHash Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Button1 className="p-AssetHash Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
<Flex1 className="p-AssetHash Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Link1 className="p-AssetHash Link7 bpt" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-AssetHash Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Flex1 className="p-AssetHash Card bpt" {...CardProps} {...CardCb} {...CardIoProps}>
<Flex1 className="p-AssetHash InfoAsset bpt" {...InfoAssetProps} {...InfoAssetCb} {...InfoAssetIoProps}>
<Flex1 className="p-AssetHash AssetHash bpt" {...AssetHashProps} {...AssetHashCb} {...AssetHashIoProps}>
<TextBox1 className="p-AssetHash TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox1 className="p-AssetHash TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
</Flex1>
<Flex1 className="p-AssetHash Name bpt" {...NameProps} {...NameCb} {...NameIoProps}>
<TextBox1 className="p-AssetHash TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox1 className="p-AssetHash TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
</Flex1>
<Flex1 className="p-AssetHash Ticker bpt" {...TickerProps} {...TickerCb} {...TickerIoProps}>
<TextBox1 className="p-AssetHash TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox1 className="p-AssetHash TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
</Flex1>
<Flex1 className="p-AssetHash Precision bpt" {...PrecisionProps} {...PrecisionCb} {...PrecisionIoProps}>
<TextBox1 className="p-AssetHash TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox1 className="p-AssetHash TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex1>
</Flex1>
<Image className="p-AssetHash Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
