import { ObjectType, Field, ID } from "type-graphql"
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
// Object type will make the class type so that we can pass it like string, number, boolean
@ObjectType() 
@Entity()
export class User extends BaseEntity {
    //@Field means we can query them , we don't want to query the password
    //@field will providing graphql syntax 
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column("text",{unique: true})
    email: string

    @Field()
    name: string

    @Column()
    password: string
}


