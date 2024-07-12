import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/selectors";
import { selectContacts } from "./selectors";

export const handlePeding = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.isError = action.payload;
};
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePeding)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePeding)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePeding)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                const index = state.items.findIndex(
                    (contact) => contact.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected);
    },
});

export const contactReducer = contactsSlice.reducer;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, contactFilter) => {
        return contacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(contactFilter.toLowerCase()) ||
                contact.number.includes(contactFilter)
        );
    }
);