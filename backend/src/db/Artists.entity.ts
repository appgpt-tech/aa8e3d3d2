//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Artists")
export class ArtistsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Name: string;

@Column({nullable: true})
Nationality: string;

@Column({nullable: true})
BirthYear: string;


}
