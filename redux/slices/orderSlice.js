import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Realm from "../../realm"; // Adjust the path to your Realm configuration
import { ObjectId } from "bson";



export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    try {
        const realm = await Realm.open({ schema: [/* Add your schemas here */] }); // Open Realm
        const orders = realm.objects("Order"); // Fetch all orders
        // Transform Realm objects into plain JavaScript objects
        const ordersArray = orders.map((order) => ({
            id: order.id,
            clientName: order.clientName,
            address: order.address,
            phoneNumber: order.phoneNumber,
            orderType: order.orderType,
            quantity: order.quantity,
            price: order.price,
        }));
        realm.close(); // Close Realm instance
        return ordersArray;
    } catch (error) {
        throw new Error("Failed to fetch orders");
    }
});

export const submitOrder = createAsyncThunk("orders/submitOrder", async (order) => {
    try {
        const realm = await Realm.open({ schema: [/* Add your schemas here */] }); // Open Realm
        let createdOrder;
        realm.write(() => {
            createdOrder = realm.create("Order", {
                id: new ObjectId().toString(), // Generate a unique ID
                clientName: order.clientName,
                address: order.address,
                phoneNumber: order.phoneNumber,
                orderType: order.orderType,
                quantity: order.quantity,
                prince: order.price,
            });
        });
        const plainOrder = {
            id: createdOrder.id,
            clientName: createdOrder.clientName,
            address: createdOrder.address,
            phoneNumber: createdOrder.phoneNumber,
            orderType: createdOrder.orderType,
            quantity: createdOrder.quantity,
            price: createdOrder.price,
        };
        realm.close(); // Close Realm instance
        return plainOrder;
    } catch (error) {
        throw new Error("Failed to submit order");
    }
});

// Slice
const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(submitOrder.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orders.push(action.payload);
            })
            .addCase(submitOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;
