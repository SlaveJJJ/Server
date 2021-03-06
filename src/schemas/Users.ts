import { EntitySchema } from 'typeorm';
import { Users } from '../user/entity/user.entity';

export const UserSchema = new EntitySchema<Users>({
  name: 'Users',
  target: Users,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      nullable: true,
    },
    address: {
      type: String,
    },
    userName: {
      type: String,
      nullable: true,
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  //   relations: {
  //     photos: {
  //       type: 'one-to-many',
  //       target: 'Photo', // the name of the PhotoSchema
  //     },
  //   },
});
