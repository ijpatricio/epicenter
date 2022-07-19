export default {
  /**
   * Theme and Layout
   */
  setGlobalTheme: function (state, theme) {
    this.app.vuetify.framework.theme.dark = theme === 'dark'
    state.globalTheme = theme
  },
  setRTL: function (state, isRTL) {
    this.app.vuetify.framework.rtl = isRTL
    state.isRTL = isRTL
  },
  setContentBoxed: (state, isBoxed) => {
    state.isContentBoxed = isBoxed
  },
  setMenuTheme: (state, theme) => {
    state.menuTheme = theme
  },
  setToolbarTheme: (state, theme) => {
    state.toolbarTheme = theme
  },
  setToolbarDetached: (state, isDetached) => {
    state.isToolbarDetached = isDetached
  }
}
