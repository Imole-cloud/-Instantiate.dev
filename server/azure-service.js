
class AzureService {
  constructor() {
    this.isAuthenticated = false;
    this.credentials = null;
    this.subscriptionId = null;
  }

  async authenticate(credentials) {
    this.credentials = credentials;
    this.isAuthenticated = true;
    this.subscriptionId = 'mock-subscription-id';
    return { success: true, subscriptionId: this.subscriptionId };
  }

  async listResourceGroups() {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    
    return [
      { name: 'rg-instantiate-dev', location: 'eastus' },
      { name: 'rg-production', location: 'westus2' }
    ];
  }

  async createResourceGroup(name, location) {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    
    return {
      name,
      location,
      id: `/subscriptions/${this.subscriptionId}/resourceGroups/${name}`,
      provisioningState: 'Succeeded'
    };
  }

  async deployContainer(spec) {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    
    return {
      id: `container-${Date.now()}`,
      name: spec.name,
      status: 'Running',
      fqdn: `${spec.name}.eastus.azurecontainer.io`,
      ipAddress: '20.1.2.3',
      ports: spec.ports || [80]
    };
  }

  async listContainers() {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    
    return [
      {
        id: 'container-1',
        name: 'web-app',
        status: 'Running',
        fqdn: 'web-app.eastus.azurecontainer.io'
      }
    ];
  }

  async deleteContainer(name) {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    
    return { success: true, message: `Container ${name} deleted` };
  }

  async getContainerLogs(name) {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    
    return {
      logs: `Container ${name} started successfully\nListening on port 80\nApplication ready`
    };
  }
}

export function getAzureService() {
  return new AzureService();
}
