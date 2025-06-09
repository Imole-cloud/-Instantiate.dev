
class Storage {
  constructor() {
    this.users = [];
    this.projects = [];
    this.deployments = [];
    this.chatMessages = [];
    this.nextUserId = 1;
    this.nextProjectId = 1;
    this.nextDeploymentId = 1;
    this.nextChatId = 1;
  }

  async createUser(userData) {
    const user = {
      id: this.nextUserId++,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      createdAt: new Date().toISOString()
    };
    this.users.push(user);
    return user;
  }

  async getUserByUsername(username) {
    return this.users.find(user => user.username === username);
  }

  async getUser(id) {
    return this.users.find(user => user.id === id);
  }

  async getProjectsByUserId(userId) {
    return this.projects.filter(project => project.userId === userId);
  }

  async createProject(projectData) {
    const project = {
      id: this.nextProjectId++,
      userId: projectData.userId,
      name: projectData.name,
      description: projectData.description,
      createdAt: new Date().toISOString()
    };
    this.projects.push(project);
    return project;
  }

  async getAllDeployments() {
    return this.deployments;
  }

  async createDeployment(deploymentData) {
    const deployment = {
      id: this.nextDeploymentId++,
      userId: deploymentData.userId || 1,
      name: deploymentData.name,
      provider: deploymentData.provider,
      status: deploymentData.status || 'pending',
      cost: deploymentData.cost || 0,
      createdAt: new Date().toISOString(),
      ...deploymentData
    };
    this.deployments.push(deployment);
    return deployment;
  }

  async updateDeploymentStatus(id, status) {
    const deployment = this.deployments.find(d => d.id === id);
    if (deployment) {
      deployment.status = status;
      deployment.updatedAt = new Date().toISOString();
    }
    return deployment;
  }

  async createChatMessage(messageData) {
    const chatMessage = {
      id: this.nextChatId++,
      userId: messageData.userId,
      message: messageData.message,
      response: null,
      createdAt: new Date().toISOString()
    };
    this.chatMessages.push(chatMessage);
    return chatMessage;
  }

  async updateChatResponse(id, response) {
    const chatMessage = this.chatMessages.find(m => m.id === id);
    if (chatMessage) {
      chatMessage.response = response;
      chatMessage.updatedAt = new Date().toISOString();
    }
    return chatMessage;
  }
}

export const storage = new Storage();
