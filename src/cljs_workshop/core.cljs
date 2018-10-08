(ns cljs_workshop.core
  (:require ["spectacle" :as spectacle :refer [Deck Slide Text Image List ListItem Appear]]
            [reagent.core :as r :refer [adapt-react-class]]
            ["spectacle/lib/themes/default" :default create-theme]
            [cljs.core.async :refer [<! chan sliding-buffer put! close! timeout]]
            [cljs_workshop.theme :refer [colours font-families]])
  (:require-macros [cljs.core.async :refer [go]]))
;; STATE
(def app-state (r/atom 0))

;; THEME
(def theme (apply create-theme (map clj->js [colours font-families])))

; (defn [] #(+ %1 %2) [1 2 2 3 23 2])

;; ANIMATIONS
(defn start-rotation []
  (letfn [(rotate-loop [time]
            (swap! app-state inc)
            (go
              (<! (timeout 30))
              (.requestAnimationFrame js/window rotate-loop)))]
    (.requestAnimationFrame js/window (fn [time] (rotate-loop time)))))

;; COMPONENTS
(defn rotatable-logo [angle]
  (let [image-style
        {:transform (str "rotate(" angle "deg)")
         :margin "auto"}]
    [:div {:style image-style}
     [:> Image {:src "https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png"
                :height "10%"
                :width "10%"}]]))


(defn slide-1 [] 
  [:> Slide
    [:> Text {:textColor "white"} "Clojurescript for Beginners"]
    (rotatable-logo @app-state)])

(defn slide-2
  []
  [:> Slide
   [:> Text {:textColor "white"} "What is Clojure?"]
   [:> List
    [:> Appear [:> ListItem "Lisp Dialect"]]
    [:> Appear [:> ListItem "General Purpose"]]
    [:> Appear [:> ListItem "Dynamically Typed"]]
    [:> Appear [:> ListItem "Homoiconic"]]
    [:> Appear [:> ListItem "Functional Programming Language"]]]])

(defn slide-3 []
  [:> Slide
   [:> Text {:textColor "white"} "Huh?"]
   [:> List
     [:> Appear [:> ListItem "The only syntax involves curly braces"]]
     [:> Appear [:> ListItem "It can be used to write any   application"]]
     [:> Appear [:> ListItem "No types"]]
     [:> Appear [:> ListItem "Code is data"]]
     [:> Appear [:> ListItem 
                 [:span "Wants to be "]
                 [:span {:style {:color "red"}} "Stateless!"]]]]])

(defn slide-4 []
  [:> Slide 
   [:> Text {:textColor "white"} "Eval & Apply"]
   [:> Appear [:img {:src "img/evalapply.png" :width "95%"}]]])

(defn slide-5 []
  [:> Slide
   [:> Text {:textColor "white"} "Eval & Apply"]
   [:> Appear [:img {:src "/img/evalapplyjs.png" :width "85%"}]]])

(defn slide-6 []
  [:> Slide
   [:> Text {:textColor "white"} "Eval & Apply"]
   [:> Appear [:img {:src "/img/evalapplyjsdeep.png" :width "120%"}]]])

(defn slide-7 []
  [:> Slide
   [:> Text {:textColor "white"} "Clojurescript S Expressions"]
   [:> Appear [:> Text {:textColor "white"}
               [:span "("]
               [:span {:style {:color "#a1c75e"}} "function "]
               [:span {:style {:color "#647fbb"}} "arg-1 arg-2 arg-3"]
               [:span "...)"]]]])

(defn slide-8 []
  [:> Slide
   [:> Text {:textColor "white"} "Eval & Apply"]
   [:> Appear [:img {:src "/img/function-def.png" :width "100%"}]]])

(defn slide-9 []
  [:> Slide
   [:> Text {:textColor "white"} "Eval & Apply Expansion"]
   [:> Appear [:img {:src "/img/function-expansion.png" :width "100%"}]]])

(defn slide-10 []
  [:> Slide
   [:> Text {:textColor "white"} "Whats The Point?"]
   [:> Appear [:img {:src "/img/compilerengine.gif"}]]
   [:> Appear [:> Text {:textColor "white"} "You can build your own Compiler!"]]])

(defn slide-11 []
  [:> Slide
   [:> Text {:textColor "white"} "How?...."]
   [:> Appear [:> Text {:textColor "white"} "Macros!"]]]
   [:> Appear [:img {:src "/img/simple-unless.gif"}]]])

(defn slide-12 []
  [:> Slide
   [:Text "Clourescript Macros"]
   [:> Appear [:img {:src "for-loop-macro.png"}]]])

(defn slide-13 []
  [:> Slide
   [:Text "Clourescript Macros"]
   [:> Appear [:img {:src "map-macro.png"}]]])



; (defmacro unless
;   [condition & forms]
;   `(if (not ~condition)
;      ~@forms))

; (defmacro for
;   "iterate for a set period, while computing expressions with updated iterator"
;   [forms]
;   (let [~interaction-expression (first ~forms)
;         ~tail-form (rest forms)]
;     (loop [invariant 0
;            ~count (get-loop-max ~interaction-expression)]
;       (if (= invariant ~count)
;         nil
;         (let [~iter-variables (get-variables tail-form)]
;           (let [~reconstructed-form (construct-form ~iter-variables tail-form)]
;             ~reconstructed-form
;             (recur invariant (- 1 count) ~tail-form)))))))

; (defmacro map
;   "iterate for a set period, while computing expressions with updated iterator"
;   [forms]
;   (let [~interaction-expression (first ~forms)
;         ~tail-form (rest forms)]
;     (loop [invariant 0
;            ~count (get-loop-max ~interaction-expression)
;            result '()]
;       (if (= invariant ~count)
;         nil
;         (let [~iter-variables (get-variables tail-form)]
;           (let [~reconstructed-form (construct-form ~iter-variables tail-form)]
;             result
;             (recur invariant (- 1 count) ~tail-form (conj result ~reconstructued-form))))))))

(defn presentation []
  [:> Deck {:theme theme :transitionDuration 500}
   (slide-1)
   (slide-2)
   (slide-3)
   (slide-4)
   (slide-5)
   (slide-6)
   (slide-7)
   (slide-8)
   (slide-9)
   (slide-10)
   (slide-11)])

;; APP
(defn app [] (presentation))

(start-rotation)

(defn start []
  (r/render [app]
    (.getElementById js/document "app")))

(defn ^:export init []
  (start))
