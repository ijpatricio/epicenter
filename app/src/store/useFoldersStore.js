import {defineStore} from 'pinia'

export const useFoldersStore = defineStore('folderStore', {
  state: () => ({
    folders: [
      'Pictures',
      'Movies',
      'Documents',
      'Applications',
    ],
  }),
  actions: {
    addFolder(folder) {
      this.folders.push(folder)
    },
  }
})
