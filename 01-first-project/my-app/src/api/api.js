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
		console.warn('Obsolete method. Please use profileAPI object.')
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`users/${userId}`);
	},
	updateStatus(userId, statusInfo) {
		return instance.put(`users/${userId}`, { company: {title: statusInfo} })
	}
}

export const authAPI = {
	me() {
		return instance
		.post(`auth/login`, {
			withCredentials: true,
			username: "kminchelle",
			password: "0lelplR",
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