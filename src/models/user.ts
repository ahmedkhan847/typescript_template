import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

@Table({
  tableName: "users",
})
export class User extends Model<User> {
  @CreatedAt
  created_at: Date;
  @UpdatedAt
  updated_at: Date;
  @Column
  username: string;
  @Column
  password: string;
  @Column
  email: string;
}
