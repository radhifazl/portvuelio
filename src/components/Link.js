import { useIntersectionObserver } from "@vueuse/core";
import { useRoute } from "vue-router";

export const pageObserve = (target, element, params) => {
    const el = document.getElementById(element)
    const route = useRoute()
    useIntersectionObserver(
        target, 
        ([{ isIntersecting }], observerElement) => {
            if(isIntersecting === true) {
                el.classList.add('link-active')
                history.pushState(
                    {},
                    null,
                    `${route.path}#${encodeURIComponent(params)}`
                );
            } else {
                el.classList.remove('link-active')
            }
        }
        
    )
}