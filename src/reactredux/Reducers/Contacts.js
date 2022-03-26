import Editask from "../../Components/Editask";
import {
    ADD_ITEM,
    FILTRED_ITEM,
    EDIT_ITEM,
    LIST_ITEM ,
} from "../Constants/Actions-types";
const initialState = {
    contacts: [
        {
            id: Math.random(),
            description: "ooops",
            isDone: "IS DONE",
            
        },
        {
            id: Math.random(),
            decription: "the dog not good in the day",
            isDone: "IS NOT DONE",
            
        },
    ],
};
export const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, contacts: [...state.contacts, action.payload] };
        case EDIT_ITEM:
            return <Editask/> ;
        case LIST_ITEM:
            return { ...state, user: action.payload };
        case FILTRED_ITEM:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };

        default:
            return state;
    }
};