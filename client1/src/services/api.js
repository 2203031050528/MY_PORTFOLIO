const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = {
  // Projects
  async getProjects() {
    try {
      const response = await fetch(`${API_URL}/projects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Contact
  async sendMessage(data) {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to send message');
      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}; 