import Realm from "realm";

// Define your schema
const OrderSchema = {
    name: "Order",
    properties: {
        id: "string", // Use a unique identifier
        clientName: "string",
        address: "string",
        phoneNumber: "string",
        quantity: "string",
        orderType: "string",
    },
    primaryKey: "id", // Set the primary key
};

// Initialize Realm
const realm = new Realm({ schema: [OrderSchema] });

export default realm;
