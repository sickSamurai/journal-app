import { useEffect, useRef, useState } from 'react'

export const useNavBarMarginAutoAdjust = () => {
  const navBarRef = useRef<HTMLDivElement>(null)
  const [margin, setMargin] = useState(0)

  useEffect(() => {
    if (navBarRef.current != null) setMargin(navBarRef.current?.clientHeight)
  })
  return { navBarRef, margin }
}
