import create from "zustand"

const useScrollPosition = create(set => ({
  scrollPosition: 0,
  setScrollPosition: scroll => set({ scrollPosition: scroll })
}))

export default useScrollPosition