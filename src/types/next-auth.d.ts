/*eslint-disable no-unused-vars */

import { Session, User } from "inspector";
import { JWT } from "next-auth/jwt";

type userId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: userId;
  }
}
declare module "next-auth" {
  interface Session {
    user: User & {
      id: userId;
    };
  }
}
