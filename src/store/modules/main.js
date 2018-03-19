const GET_DATA = 'exam2_GET_DATA'
const PICK_TILE = 'exam2_PICK_TILE'

export default {
  namespaced: true,
  state: {
    tiles: [],
    pickedTile: undefined
  },
  mutations: {
    [GET_DATA] (state, tiles) {
      state.tiles = tiles
    },
    [PICK_TILE] (state, tile) {
      state.pickedTile = tile
    }
  },
  actions: {
    getTiles ({commit}) {
      let url = `/api/tiles`
      let options = {
        method: 'GET',
        cache: 'default'
      }
      fetch(url, options).then((res) => {
        return res.json()
      }).then((data) => {
        commit(GET_DATA, data.tiles)
      }).catch((err) => {
        throw err
      })
    },
    pickTile ({commit}, tile) {
      commit(PICK_TILE, tile)
    }
  }
}
