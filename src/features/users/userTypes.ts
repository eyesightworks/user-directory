
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  location?: string;
  dob?: string;
}

export interface CreateUserRequest {
  name: string;
  location: string;
  dob: string;
}
