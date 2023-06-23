import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items; // Всі контакти зі стейта Store
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

// Сортування контактів за алфавітом
export const selectSortedContacts = state => {
  const sortedContacts = [...state.contacts.items].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return sortedContacts;
};

// Фільтрація відсортованих контактів за значенням фільтра
export const selectFilteredContacts = createSelector(
  [selectSortedContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

// Фільтрація контактів за значенням фільтра
// export const selectFilteredContacts = createSelector(
//   [selectItems, selectFilter],
//   (contacts, filter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     )
// );
