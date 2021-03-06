(ns andel.search
  (:require [andel.tree :as tree]
            [andel.text :as text]
            [andel.cursor :as cursor])
  #?(:clj (:import [andel.tree ZipperLocation]
                   [andel.cursor TransientCursor])))

(def ^:dynamic j)

(def special-char (char 0))

;; naive kmp
(defn- str-kmp [text-string pattern]
  (let [s (str pattern special-char text-string)
        pl (count pattern)
        n (count s)
        p #^ints (make-array Integer/TYPE n)]
    (aset p 0 0)
    (binding [j 0]
      (doall
       (for [i (range 1 n)]
         (do (while
                 (and (< 0 j)
                      (not= (.charAt s i)
                            (.charAt s j)))
               (set! j (aget p (dec j))))
             (if (= (.charAt s i)
                    (.charAt s j))
               (set! j (inc j)))
             (aset p i ^int j)))))
    (into []
          (comp
           (filter some?)
           (map #(- % (* 2 pl))))
          (let [pl (count pattern)]
            (for [i (range 0 n)]
              (if (= pl (aget p i))
                i))))))

(defn- insert-pattern [text-tree pattern]
  (-> text-tree
      text/zipper
      (text/scan-to-offset 0)
      (text/insert (str pattern special-char))
      (tree/root)))

(defn text-kmp [text pattern]
  (let [text (insert-pattern text pattern)
        pl (count pattern)
        tl (text/text-length text)
        p #^ints (make-array Integer/TYPE tl)]
    (let [i-cursor ^TransientCursor (cursor/transient (cursor/make-cursor text 1))
          j-cursor ^TransientCursor (cursor/transient (cursor/make-cursor text 0))]
      (binding [j 0]
        (doall
         (for [i (range 1 tl)]
           (do (while
                   (and (< 0 j)
                        (not= (.getChar i-cursor)
                              (.getChar j-cursor)))
                 (do (set! j (aget p (dec j)))
                     (cursor/set-to-offset! j-cursor j)))
               (when (= (.getChar i-cursor)
                      (.getChar j-cursor))
                 (set! j (inc j))
                 (cursor/next! j-cursor))
               (aset p i ^int j)
               (cursor/next! i-cursor))))))
    (into []
          (comp
           (filter some?)
           (map #(- % (* 2 pl))))
          (let [pl (count pattern)]
            (for [i (range 0 tl)]
              (if (= pl (aget p i))
                i))))))
