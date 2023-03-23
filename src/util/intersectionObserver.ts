
import { useEffect, useState, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const IntersectionObserverHook = (settings = {}) => {
    const [intersecting, setIntersectig] = useState(false)
    const elementRef = useRef()

    useEffect(() => {
        const element = elementRef.current

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log('here')
                setIntersectig(entry.isIntersecting)
            })
        }, settings)
        if (element != null) {
            observer.observe(element)
        }
        return () => {
            if (element != null) { observer.unobserve(element) }
        }
    }, [])
    return [elementRef, intersecting
    ]
}
