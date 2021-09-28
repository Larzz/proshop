import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@larryparba.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Normal User",
    email: "normal@larryparba.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Normal1 User",
    email: "normal1@larryparba.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
