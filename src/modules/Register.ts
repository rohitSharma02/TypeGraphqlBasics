import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { User } from "../entity/User";

@Resolver(User)
export class RegisterResolver {
  //Trick - We are keeping the single query here as graphql sometime gets cranky when you don't have whole query
  @Query(() => String, { name: "testing" })
  async hello() {
    return "Hi testing...";
  }

  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName}`;
  }

  @Mutation(() => User)
  //name in schema - @Args , actual variablein graphql
  async register(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
    //Promise will do type check of the return 
  ): Promise <User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    //.create will create the entity and .save will save it to the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();
    /*if we want to return 5 we can instead user ...it should not happen 
    to STOP it from happening we are using line no. 20 --> : Promise <User> -->this will give 
    return type to our functions and will do the type check*/
    return user;
  }
}
