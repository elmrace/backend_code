class ApiError extends Error {
  constructor(message: string, public status: number, public method: string, public agent: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.method = method;
    this.agent = agent;
  }
}

export default ApiError;
