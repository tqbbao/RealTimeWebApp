import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("actor")
export class Actor {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "actor_id",
    unsigned: true,
  })
  actorId: number;

  @Column("varchar", { name: "first_name", length: 45 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 45 })
  lastName: string;

  @Column("timestamp", {
    name: "last_update",
    default: () => "CURRENT_TIMESTAMP",
  })
  lastUpdate: Date;
}
