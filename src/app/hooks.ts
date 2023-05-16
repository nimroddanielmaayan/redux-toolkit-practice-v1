import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/* Copilot's explanation for this file: */

// q: Is all this used only for TS purposes?
// a: Yes, it's only for TS purposes. It's a way to get the type of the state
// q: Then why are we exporting const and not exporting type?
// a: Because we want to export the actual function, not just the type
// q: Why do we want to export the actual function?
// a: Because we want to use it in our components
// q: Why not use the original useDispatch and useSelector, and give them a type?
// a: Because we want to use the type of the state in the component, and not in the hook

// q: explain what's going on here
// a: we're using the useSelector hook, but we're giving it a type of RootState (which is the type of the state) so that we can use it in the component and get the type of the state there as well (and not just in the hook)

/* ChatGPT's explanation for this file: 

we import the necessary hooks from the react-redux library: useDispatch and useSelector. Additionally, we import TypedUseSelectorHook from react-redux, which is a type definition for the useSelector hook. Finally, we import RootState and AppDispatch types from a file called "./store".

we define two custom hooks: useAppDispatch and useAppSelector. These hooks are created by assigning the respective imported hooks (useDispatch and useSelector) to new names.

useAppDispatch is a custom hook that has a function signature () => AppDispatch. It means that when you use this hook, you will receive an instance of AppDispatch from the Redux store. AppDispatch is the type definition for the dispatch function provided by Redux.

useAppSelector is a custom hook that uses the TypedUseSelectorHook type definition with RootState as the generic argument. This hook allows you to select a specific part of the Redux state. RootState represents the complete state of your application defined in the "./store" file.

By exporting these custom hooks, other components in your application can easily access the Redux dispatch function (useAppDispatch) and select specific parts of the Redux state (useAppSelector) without the need to import react-redux and define types repeatedly.

These hooks provide a convenient way to integrate Redux with React components and simplify the usage of dispatch and state selection within your application.

*/
