import axios from "axios";

const instance = axios.create({
	baseURL: 'https://dummyjson.com/'
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?skip=${pageSize * (currentPage - 1)
		}&limit=${pageSize}`
		).then(response => response.data);
	},
	getProfile(userId) {
		return instance.get(`users/${userId}`);
	}
}

export const authAPI = {
	me() {
		return instance
		.post(`auth/login`, {
			withCredentials: true,
			username: "kminchelle",
			// password: "0lelplR",
		})
	}
}

export const checklistAPI = {
	getTodos() {
		return instance.get("todos?limit=5", {});
	},
	onTodosChange (todo) {
		return instance.put(
			`todos/${todo.id}`,
			todo.completed ? { completed: false } : { completed: true }
		)
	}
}