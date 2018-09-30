(ns clojurescript_workshop.core (:require
                                 ["spectacle" :as spectacle :refer [Deck, Slide, Text]]
                                 [reagent.core :as r :refer [adapt-react-class]]))

(defonce greeting "hello")
(def who "world")

(defn app []
  [:> Deck [:> Slide [:> Text "hello"]]])

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting...")
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))
(reduce #(+ %2 %1) [1 2 3 1 2 34 4 5])
