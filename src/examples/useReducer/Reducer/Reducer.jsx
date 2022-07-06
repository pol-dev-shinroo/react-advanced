export const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "ADD_ITEM") {
        const newPeople = [...state.people, action.payload];
        console.log(newPeople);
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "item added",
        };
    }
    if (action.type === "CLOSE_MODAL") {
        return { ...state, isModalOpen: false };
    }
    if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter(
            (item) => item.id !== action.payload
        );

        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "item removed",
        };
    }
    throw new Error("no matching action type");
};
