export default {
  namespaced: true,
  state: {
    tasks: []
  },
  mutations: {
    addTasks(state, tasks) {
      state.tasks = tasks;
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
    },
    toggleTask(state, index) {
      state.tasks[index].complete = !state.tasks[index].complete;
    }
  },
  actions: {
    getTasks({ commit, rootState }) {
      fetch(process.env.VUE_APP_API_HOST, {
        headers: {
          Authorization: `Bearer ${rootState.user.keycloak.token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          commit("addTasks", data);
        });
    },
    toggleTask({ dispatch, rootState }, task_id) {
      fetch(`${process.env.VUE_APP_API_HOST}/${task_id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${rootState.user.keycloak.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data == 'OK') {
            dispatch('getTasks');
          }
        });
    },
    deleteTask({ dispatch, rootState }, task_id) {
      fetch(`${process.env.VUE_APP_API_HOST}/${task_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${rootState.user.keycloak.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data == 'OK') {
            dispatch('getTasks');
          }
        });
    },
    addTask({ dispatch, rootState }, task) {
      let taskToAdd = {
        task,
        complete: 0
      };
      fetch(`${process.env.VUE_APP_API_HOST}`, {
        method: 'POST',
        body: JSON.stringify(taskToAdd),
        headers: {
          Authorization: `Bearer ${rootState.user.keycloak.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data == 'OK') {
            dispatch('getTasks');
          }
        });
    }
  }
};
