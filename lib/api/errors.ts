export class ApiError extends Error {
  status: number;
  data: any;

  constructor({ message, status, data }: { message: string; status: number; data: any }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}