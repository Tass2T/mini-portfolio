import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

export const useScroll = () => {
    // once the element is selected with the ref, view will tell by true/false if we see it or not
    // 0.5 is halfway in
    const [element, view] = useInView({threshold: 0.2})
    const controls = useAnimation()

    if (view){
        controls.start("show")
    } else {
        controls.start("hidden")
    }
    return [element, controls]
}