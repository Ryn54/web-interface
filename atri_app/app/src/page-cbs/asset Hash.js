import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useHeaderCb() {
	const onClick = useCallback(callbackFactory("Header", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}



export function useSearchAndTestAssetCb() {
	const onClick = useCallback(callbackFactory("SearchAndTestAsset", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInputCb() {
	const onChange = useCallback(callbackFactory("Input", "asset Hash", "/asset Hash", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input", "asset Hash", "/asset Hash", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function usebuttonlistCb() {
	const onClick = useCallback(callbackFactory("buttonlist", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLiquidtestnetCb() {
	const onClick = useCallback(callbackFactory("Liquidtestnet", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useRegistryCb() {
	const onClick = useCallback(callbackFactory("Registry", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLinkLiquidHomeCb() {

	return {  }
}
export function useLinkHomeCb() {
	const onClick = useCallback(callbackFactory("LinkHome", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex137Cb() {
	const onClick = useCallback(callbackFactory("Flex137", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDropdown1Cb() {
	const onChange = useCallback(callbackFactory("Dropdown1", "asset Hash", "/asset Hash", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "selectedValue"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useFlex250Cb() {
	const onClick = useCallback(callbackFactory("Flex250", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex257Cb() {
	const onClick = useCallback(callbackFactory("Flex257", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex260Cb() {
	const onClick = useCallback(callbackFactory("Flex260", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex261Cb() {
	const onClick = useCallback(callbackFactory("Flex261", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex262Cb() {
	const onClick = useCallback(callbackFactory("Flex262", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useinfoAssetHashCb() {
	const onClick = useCallback(callbackFactory("infoAssetHash", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useinfoNameCb() {
	const onClick = useCallback(callbackFactory("infoName", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex121Cb() {
	const onClick = useCallback(callbackFactory("Flex121", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex129Cb() {
	const onClick = useCallback(callbackFactory("Flex129", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLogoCb() {
	const onClick = useCallback(callbackFactory("Logo", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useassetHashCb() {
	const onClick = useCallback(callbackFactory("assetHash", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useassetHash:Cb() {
	const onClick = useCallback(callbackFactory("assetHash:", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useNameCb() {
	const onClick = useCallback(callbackFactory("Name", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useName:Cb() {
	const onClick = useCallback(callbackFactory("Name:", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex123Cb() {
	const onClick = useCallback(callbackFactory("Flex123", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex124Cb() {
	const onClick = useCallback(callbackFactory("Flex124", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex131Cb() {
	const onClick = useCallback(callbackFactory("Flex131", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex132Cb() {
	const onClick = useCallback(callbackFactory("Flex132", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useNameAssetHashCb() {
	const onClick = useCallback(callbackFactory("NameAssetHash", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useresponseAssetHash:Cb() {
	const onClick = useCallback(callbackFactory("responseAssetHash:", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox118Cb() {
	const onClick = useCallback(callbackFactory("TextBox118", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox120Cb() {
	const onClick = useCallback(callbackFactory("TextBox120", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTickerCb() {
	const onClick = useCallback(callbackFactory("Ticker", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox121Cb() {
	const onClick = useCallback(callbackFactory("TextBox121", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox125Cb() {
	const onClick = useCallback(callbackFactory("TextBox125", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox126Cb() {
	const onClick = useCallback(callbackFactory("TextBox126", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex272Cb() {
	const onClick = useCallback(callbackFactory("Flex272", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex274Cb() {
	const onClick = useCallback(callbackFactory("Flex274", "asset Hash", "/asset Hash", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}