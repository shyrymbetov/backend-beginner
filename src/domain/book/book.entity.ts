import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";

import { AuthorEntity } from "./../author/author.entity"

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @ManyToOne((type) => AuthorEntity)
  @JoinColumn()
  author!: AuthorEntity

  @Column()
  authorId!: number;

  @Column()
  publishedAt!: Date;
  
  @Column({nullable: true, default: null})
  coverImageName!: string;

  @Column({nullable: true, default: null})
  coverMimeType!: string;


  @Column({nullable: true, default: null})
  coverImageBuffer!: string;


  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
