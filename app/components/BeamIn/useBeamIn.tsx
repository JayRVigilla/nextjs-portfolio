"use client"
import { useState, useCallback } from "react"

interface iProps {initialValue: boolean}

interface ReturnTypes {
  isVisible: boolean;
  toggle: () => void;
}

export const useBeamIn = ({initialValue}: iProps) : ReturnTypes => {
  const [isVisible, setIsVisible] = useState(false)

  const toggle = useCallback(() => setIsVisible(prevState => !prevState), [])

  return {isVisible, toggle}
}