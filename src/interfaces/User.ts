interface User {
  username: string;
  email: string;
  password?: string;
  role: string;
  dateOfBirth: Date;
  address: string;
  phoneNumber: number;
  note: string;
  classIds: string[];
}

export default User;
