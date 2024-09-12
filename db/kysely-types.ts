import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, string | number | bigint, string | number | bigint>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Account {
  id: Generated<string>;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: Int8 | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}

export interface Migrations {
  id: Generated<number>;
  migration: string;
  batch: number;
}

export interface Session {
  id: Generated<string>;
  userId: string;
  sessionToken: string;
  expires: Timestamp;
}

export interface User {
  id: Generated<string>;
  name: string | null;
  email: string;
  emailVerified: Timestamp | null;
  image: string | null;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Timestamp;
}

export interface DB {
  Account: Account;
  migrations: Migrations;
  Session: Session;
  User: User;
  VerificationToken: VerificationToken;
}
