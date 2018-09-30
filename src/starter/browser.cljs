(ns starter.browser (:require
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
