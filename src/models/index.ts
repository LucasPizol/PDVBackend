import { Customer } from "./Customers";
import { Pdv } from "./Pdv";
import { User } from "./User";

Customer.belongsTo(User, { as: "user" });
User.hasMany(Customer);

Pdv.belongsTo(Customer, { as: "customer" });
Customer.hasOne(Pdv);

export { Customer, Pdv, User };
