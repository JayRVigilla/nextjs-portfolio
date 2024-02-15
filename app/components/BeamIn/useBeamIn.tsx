import { useState, useCallback, useEffect } from "react"

interface BeamInProps{
  initialValue: boolean;
  countdown?: number; // seconds
};

interface ReturnTypes {
  isVisible: boolean;
  toggle: () => void;
}

// Using a custom hook to manage state.

export const useBeamIn = ({initialValue, countdown = 0}: BeamInProps) : ReturnTypes => {
  const [isVisible, setIsVisible] = useState(initialValue)
  const toggle = useCallback(() => setIsVisible(prevState => !prevState), [])

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!initialValue)
    }, countdown * 1000 ?? 0)
  }, [toggle, countdown, initialValue])


  return {isVisible, toggle}
}