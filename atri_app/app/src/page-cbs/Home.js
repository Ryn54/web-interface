import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";




export function useFlex134Cb() {
	const onClick = useCallback(callbackFactory("Flex134", "Home", "/Home", "onClick", 
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
export function useFlex135Cb() {
	const onClick = useCallback(callbackFactory("Flex135", "Home", "/Home", "onClick", 
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
export function useTitleCb() {
	const onClick = useCallback(callbackFactory("Title", "Home", "/Home", "onClick", 
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
export function useBackgroundCb() {
	const onClick = useCallback(callbackFactory("Background", "Home", "/Home", "onClick", 
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
export function useButton22Cb() {
	const onClick = useCallback(callbackFactory("Button22", "Home", "/Home", "onClick", 
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
export function useFlex276Cb() {
	const onClick = useCallback(callbackFactory("Flex276", "Home", "/Home", "onClick", 
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
export function useInput16Cb() {
	const onChange = useCallback(callbackFactory("Input16", "Home", "/Home", "onChange", 
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
	const onPressEnter = useCallback(callbackFactory("Input16", "Home", "/Home", "onPressEnter", 
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



export function useFlex303Cb() {
	const onClick = useCallback(callbackFactory("Flex303", "Home", "/Home", "onClick", 
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
export function useFlex304Cb() {
	const onClick = useCallback(callbackFactory("Flex304", "Home", "/Home", "onClick", 
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
export function useLink10Cb() {

	return {  }
}
export function useButton34Cb() {
	const onClick = useCallback(callbackFactory("Button34", "Home", "/Home", "onClick", 
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
export function useFlex307Cb() {
	const onClick = useCallback(callbackFactory("Flex307", "Home", "/Home", "onClick", 
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
export function useFlex309Cb() {
	const onClick = useCallback(callbackFactory("Flex309", "Home", "/Home", "onClick", 
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
export function useLink11Cb() {

	return {  }
}
export function useFlex310Cb() {
	const onClick = useCallback(callbackFactory("Flex310", "Home", "/Home", "onClick", 
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