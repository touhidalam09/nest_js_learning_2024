import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PropertyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  price: number;
}
