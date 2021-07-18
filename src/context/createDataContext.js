import React, {  useReducer } from 'react';

export default (reducer, action, initState) => {

    const Context = React.createContext();

    const Provider = ({children}) => {

        const [state, dispatch] = useReducer(reducer, initState);
        
        const boundAction = {};

        for (let key in action) {
                boundAction[key] = action[key](dispatch);
        }

        return <Context.Provider
            value={{state, ...boundAction}}
        >
        {children}
        </Context.Provider>
    };

    return {Context, Provider};
};
