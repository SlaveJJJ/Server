import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

@InputType('userInput', { isAbstract: true })
@ObjectType()
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: 100 })
  @Field((type) => String)
  email: string;

  @Column({ length: 11 })
  @Field((type) => String)
  phone: string;

  @Column({ length: 100 })
  @Field((type) => String)
  address: string;

  @Column({ length: 2000 })
  @Field((type) => String)
  password: string;

  @Column({ length: 15 })
  @Field((type) => String)
  userName: string;

  @Column({ length: 10 })
  @Field((type) => String)
  gender: String;

  @Column({ type: 'timestamp' })
  @Field((type) => String)
  createdAt: Date;
}
