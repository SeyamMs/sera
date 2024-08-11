import Alpine from "alpinejs"
import intersect from "@alpinejs/intersect"
import collapse from "@alpinejs/collapse"
import Toolkit from "@alpine-collective/toolkit"

import countdown from "./countdown.js"

Alpine.data("countdown", countdown)

window.Alpine = Alpine

Alpine.plugin(intersect)
Alpine.plugin(collapse)
Alpine.plugin(Toolkit)
Alpine.start()

import EmblaCarousel from "embla-carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons"
import { addPlayBtnListeners, addNavBtnListeners } from "./EmblaCarouselAutoScroll"
import "./css/embla.css"

const OPTIONS = { loop: true, dragFree: true, direction: "rtl" }

const emblaNode = document.querySelector(".embla")
const viewportNode = emblaNode.querySelector(".embla__viewport")
const prevBtn = emblaNode.querySelector(".embla__button--prev")
const nextBtn = emblaNode.querySelector(".embla__button--next")
// const playBtn = document.querySelector(".embla__play")

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [AutoScroll({ playOnInit: true, stopOnInteraction: false })])

// const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn)
const removePlayBtnListeners = addPlayBtnListeners(emblaApi)
// const removeNavBtnListeners = addNavBtnListeners(emblaApi, prevBtn, nextBtn)

emblaApi
	// .on("destroy", removePrevNextBtnsClickHandlers)
	.on("destroy", removePlayBtnListeners)
// .on("destroy", removeNavBtnListeners)
