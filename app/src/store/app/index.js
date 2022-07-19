import configs from '../../configs'
import mutations from './mutations'

const { product, theme  } = configs
const { globalTheme, menuTheme, toolbarTheme, isToolbarDetached, isContentBoxed, isRTL } = theme

// state initial values
const state = () => ({
  product,

  // themes and layout configurations
  globalTheme,
  menuTheme,
  toolbarTheme,
  isToolbarDetached,
  isContentBoxed,
  isRTL
})

export default {
  namespaced: true,
  state,
  mutations
}
