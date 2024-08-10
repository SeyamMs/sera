import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
import Toolkit from "@alpine-collective/toolkit"

window.Alpine = Alpine

Alpine.plugin(collapse)
Alpine.plugin(Toolkit)
Alpine.start()
