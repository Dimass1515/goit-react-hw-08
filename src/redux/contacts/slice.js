import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/selectors";
import { selectContacts } from "./selectors";
import { logOut } from "../auth/operations";


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
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePeding)
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePeding)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
                state.loading = false;
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
            });
    },
});

export const contactReducer = contactsSlice.reducer;
5
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