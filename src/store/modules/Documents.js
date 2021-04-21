export default {
  namespaced: true,
  state: {
    documents: [
      {
        id: 1,
        title: "Shawna Dubbin",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.",
      },
      {
        id: 2,
        title: "Odette Demageard",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.",
      },
      {
        id: 3,
        title: "Vera Taleworth",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.",
      },
      {
        id: 4,
        title: "Lonnie Izkovitz",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.",
      },
      {
        id: 5,
        title: "Thatcher Stave",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.",
      },
    ],
  },
  actions: {
  },
  mutations: {
    addDocuments(state, payload) {
      console.log(payload);

      state.documents.push({id: state.documents.length + 1, title: payload.title, description: payload.description})
    },

    editDocuments(state, payload) {
      console.log(payload);
      const docIndex = state.documents.findIndex((element) => {element.id === payload.id})
      console.log(docIndex)
      state.documents.splice(docIndex, 1, {id: payload.id, title: payload.title, description: payload.description})
    }
  },
  getters: {
    getDocuments(state) {
      return state.documents;
    }
  },
};
