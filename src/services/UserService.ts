const SERVICE_URL = "https://randomuser.me/api?results=40";

class UserService {
  async fetchUsers() {
    const response = await fetch(SERVICE_URL);
    return response.json();
  }
}

export default UserService;
