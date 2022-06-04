import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"


//Typescript class
/*

Below will create the followig: 

+-------------+--------------+----------------------------+
|                          user                           |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| firstName   | varchar(255) |                            |
| lastName    | varchar(255) |                            |
| isActive    | boolean      |                            |

*/
// BaseEntity have .find and .create methods 
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column("text",{unique: true})
    email: string

    @Column()
    password: string
}


