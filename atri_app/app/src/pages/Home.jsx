import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useBackgroundCb, useFlex134Cb, useFlex135Cb, useFlex276Cb, useFlex307Cb, useFlex303Cb, useFlex304Cb, useFlex309Cb, useFlex310Cb, useTitleCb, useButton22Cb, useInput16Cb, useLink10Cb, useButton34Cb, useLink11Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
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

  const BackgroundProps = useStore((state)=>state["Home"]["Background"]);
const BackgroundIoProps = useIoStore((state)=>state["Home"]["Background"]);
const BackgroundCb = useBackgroundCb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex276Props = useStore((state)=>state["Home"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Home"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex307Props = useStore((state)=>state["Home"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["Home"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex303Props = useStore((state)=>state["Home"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["Home"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex309Props = useStore((state)=>state["Home"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["Home"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex310Props = useStore((state)=>state["Home"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["Home"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const TitleProps = useStore((state)=>state["Home"]["Title"]);
const TitleIoProps = useIoStore((state)=>state["Home"]["Title"]);
const TitleCb = useTitleCb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const Input16Props = useStore((state)=>state["Home"]["Input16"]);
const Input16IoProps = useIoStore((state)=>state["Home"]["Input16"]);
const Input16Cb = useInput16Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Button34Props = useStore((state)=>state["Home"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["Home"]["Button34"]);
const Button34Cb = useButton34Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()

  return (<>
  <Flex className="p-Home Background bpt" {...BackgroundProps} {...BackgroundCb} {...BackgroundIoProps}>
<Flex className="p-Home Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<Flex className="p-Home Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<Flex className="p-Home Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<Link className="p-Home Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex>
<Flex className="p-Home Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<Button className="p-Home Button34 bpt" {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
<Flex className="p-Home Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<Link className="p-Home Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<TextBox className="p-Home Title bpt" {...TitleProps} {...TitleCb} {...TitleIoProps}/>
<Flex className="p-Home Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Input className="p-Home Input16 bpt" {...Input16Props} {...Input16Cb} {...Input16IoProps}/>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
