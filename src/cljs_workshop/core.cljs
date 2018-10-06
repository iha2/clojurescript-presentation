(ns cljs_workshop.core (:require ["spectacle" :as spectacle :refer [Deck Slide Text Image]]
                                 [reagent.core :as r :refer [adapt-react-class]]
                                 ["spectacle/lib/themes/default" :default create-theme]
                                 [cljs.core.async :refer [<! go chan sliding-buffer put! close! timeout]]
                                 ; [cljs.core.async.macros :require-macro [go]]

                                 [cljs_workshop.theme :refer [colours font-families]]))

(def app-state (r/atom 0))

; theming of application
(def theme (apply create-theme (map clj->js [colours font-families])))

(defn start-rotation []
  (letfn [(rotate-loop [time]
            (let [rotation-state (swap! app-state inc)]
              (go
                (<! (timeout 30))
                (.requestAnimationFrame js/window rotate-loop))))]
    (.requestAnimationFrame js/window (fn [time] (rotate-loop time)))))

(defn cljs-logo [angle]
  [:img
   {:src "https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png"
    :style {:transform (str "rotate(" angle "deg)")
            :height "50px"
            :width "50px"}}])

(defn rotatable-logo [angle] (let [image-style {:transform (str "rotate(" angle "deg)")
                                                :margin "auto"}]
                               [:div {:style image-style}
                                [:> Image {:src "https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png"
                                           :height "10%"
                                           :width "10%"}]]))

(defn app []
  [:> Deck {:theme theme}
   [:> Slide
    [:> Text {:textColor "white"} "Clojurescript for Beginners"]
    (rotatable-logo @app-state)]])

(start-rotation)

(defn start []
  (r/render [app]
    (.getElementById js/document "app")))

(defn ^:export init []
  (start))

; (str "rotate(" 20 "deg)")
