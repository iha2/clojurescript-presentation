(ns cljs_workshop.theme
  (:require ["spectacle/lib/themes/default" :as create-theme]))


(def font-families {
  :primary "'Roboto Mono', Consolas, monaco, monospace"
  :secondary "'Roboto Mono', Consolas, monaco, monospace"
  })

(def cljs-blue "#15305d")

(def colours {
  :primary cljs-blue
  :secondary "white"
  :tertiary "white"
  :quartenary "#F2F2F2"
  :gold "#FFC400"
  :yellow "#FFEB3B"
  :pink "#FF7EAB"
  :blue "#36C3FF"
  :darkBlue "#2175FF"
  :darkPink "#D83C74"
  :green "#00E676"
  :lightGreen "#B2FF59"
  :mauve "#c3bbff"
  :purple "#5a5ae6"
})
