import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
// import store from './store';
// import Redux from 'redux'

// store example from scratch!
// const createStore = (reducer) => {
//     let state;
//     let listeners = []

//     const getState = () => state;

//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => lister())
//     };

//     const subscribe = (listener) => {
//         listeners.push(listener)
//         return () =>{
//             listeners = listeners.filter(l => l !== listener)
//         }
//     };

//     dispatch({})

//     return { getSTate, dispatch, subscribe }


// }

// SIMPLE COUNTER!
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1
        default:
            return state;
    }
};

//////////////////////////
// SIMPLE COMPONENT!!! //
////////////////////////


// STEP ONE
const Counter = () => {

}

// // STEP TWO
// const Counter = ({ value }) => {
//     <h1>{value}</h1>
// }

// STEP THREE
// Counter = ({ 
//     value,
//     onInc,
//     onDec
//  }) => {
//     <h1>{value}</h1>
//     <button onClick={onInc}>+</button>
//     <button onClick={onDec}>-</button>
// }


// const store = createStore(counter);

// const render = () => {

//     reactDOM.render(

//         <Counter 

//         value = { store.getState() }

//         onInc = {() => 
//             store.dispatch({ 
//                 type: 'INC' 
//             })    
//         }

//         onDec = {() => 
//             store.dispatch({ 
//                 type: 'DEC' 
//             })    
//         }

//         />,
//         document.getElementById('root')
//     );
// };

// store.subscribe(render);
// render();


///////////////////////
// ARRAY MuTATIONS
///////////////////////

const addCounterEX = (list) => {
    // return list.push(0) NO!

    //  BEST
    return [ ...list, 0 ];

    // OR 
    // list.concat([0]) // OK!
}

const removeCouterEX = (list, index) => {
    // return list.splice(index, 1) NO!

    // BEST
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];

    // OR 
    // return list
    // .slice(0, index)
    // .concat(list.slice(index+1)) OK!
     
}

const incrementEX = (list, index) => {
    // return list[index]++; NO!

    // BEST
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index+1)
    ]

    //  OR
    // return list
    //     .slice(0, index)
    //     .concat([list[index] + 1]
    //     .concat(list.slice(index + 1)))
     
}

///////////////////////
// AVOIDING OBJECT MUTATIONS!!
///////////////////////

 const toggleTodoEX = ( todo ) => {
    //  NO!
    // return todo.completed = !todo.completed;

    // BEST (ES7)
    return {
        ...todo,
        completed: !todo.completed
    }

    // OR
    // return Object.assign({}, todo, {
    //     completed: !todo.completed)
    // }
    
}

//////////////////////////////////////////////
// TODO REDUCER ARRAYS (PURE + REDUCER COMPOSITION)
//////////////////////////////////////////////


// const todo = (state, action) => {
//     switch(action.type) {

//         case 'ADD_TODO':
//             return {
//                 id: action.id,
//                 text: action.text,
//                 completed: false
//             };

//         case 'TOGGLE_TODO':
//             if ( state.id !== action.id) {
//                 return state;
//             } 

//             return {
//                 ...state,
//                 completed: !state.completed
//             }

//         default:
//             return state;
//     }
// }


// const todos = (state = [], action => {
//     switch(action.type) {

//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 todo(undefined, action)
//             ];

//         case 'TOGGLE_TODO':
//             return state.map(t => todo(t, action))

//         default:
//             return state
//     }
// })

//////////////////////////////////////////////
// TODO REDUCER OBJECTS (PURE + REDUCER COMPOSITION)
//////////////////////////////////////////////

// const visibilityFilter = ({
//     state = 'SHOW_ALL',
//     action
//     ) => {
//         switch (action.type) {
//             case 'SET_VISIBILITY_FILTER':
//                 return action.filter;
//             default:
//                 return state;
//         }
//     };
// }


//////////////////////////////////////////////
// ADDING VISIBILITY + HELPS SCALABILITY
// COMBINES REDUCERS INTO A SINGLE STATE OBJECT
//////////////////////////////////////////////

// COMBINE MULTIPLE SIMPLE REDUCERS METHOD!
// const todoApp = (state = {}, action) => {
//     return {
//         todos: todo(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     };
// };

// PURE COMBINE REDUCERS FROM SCRATCH
// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers)
//             .reduce((nextState, key) => {
//                 nextState[key] = reducers[key](
//                     state[key],
//                     action
//                 );
//                 return nextState
//             },
//         {}
//         )
//     };
// };

// THE ABOVE IS EQUAL TO...
// const { combineReducers } = Redux;

// const todoApp = combineReducers({
//     todos,
//     visibilityFilter
// });
// COMBINING REDUCERS IN THE STORE
// store = createStore(todoApp);







////////////////////////////////////////////////
        // TODO APP EXAMPLE///
        // ADDING TODO///////
////////////////////////////

/////////////////////////////////////////////////////////
// ## REDUX STORE ## ////////////
////////////////////////////////
// example from scratch! //////
//////////////////////////////

// const createStore = (reducer) => {
//     let state;
//     let listeners = []

//     const getState = () => state;

//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener())
//     };

//     const subscribe = (listener) => {
//         listeners.push(listener)
//         return () =>{
//             listeners = listeners.filter(l => l !== listener)
//         }
//     };

//     dispatch({})

//     return { getState, dispatch, subscribe }
// }

// store = createStore(todoApp)

/////////////////////////////////////////
// PURE COMBINE REDUCERS FROM SCRATCH///
///////////////////////////////////////
// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers)
//             .reduce((nextState, key) => {
//                 nextState[key] = reducers[key](
//                     state[key],
//                     action
//                 );
//                 return nextState
//             },
//         {}
//         )
//     };
// };



const todoApp = combineReducers({
    todos,
    visibilityFilter
})

// const { createStore } = Redux;
const store = createStore(todoApp)

console.log('store!', store.getState());




/////////////////////////
// ## REDUCERS ## //////
/////////////////////////////////
/////////////////
// VISIBILITY //
///////////////
const visibilityFilter = ({
    state = 'SHOW_ALL',
    action
}) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


/////////////////
// TODOS /////////////////////////
/////////////// THIS?!
const todos = (state = [], action => {

    switch(action.type) {

        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];

        case 'TOGGLE_TODO':
            return state.map(t => this.todo(t, action))

        default:
            return state
    }
})
/////////////////////////////////////////
// ^^ REDUX STORE && REDUCERRS ^^ //////
///////////////////////////////////////
////////////////////////////////////////////
/////////////




//////////////////////////////////////////////////////////////////////////////////////
// PRESENTATIONAL AND CONTAINER COMPONENT?! /////////////
////////////////////////////////////////////////////////
// THE INPUT AND THE BUTTON ARE PRESENTATIONAL ////////
// THE DISPATCH OF ACTION ONCLICK IS CONTAINER DUTY //
/////////////////////////////////////////////////////
let nextTodoId = 0;
const AddTodo = ({
    onAddClick
}) => {
    let input;

    return (
        <div>
            <input ref={node => {
                this.input = node;
            }} />

            <button onClick = {() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text: input.value
                })
                input.value = '';
            }}>
                ADD TODO
            </button>
        </div>
    )
}


const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            )
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

/////////////////////////////////////////////////////////////////////////////////
//## VISIBLE TODO LIST ## //////
///////////////////////////////
///////////////////////////////
// PRESENTATIONAL COMPONENT //
/////////////////////////////
const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li 
        onClick = { onClick }
        style = {{
            textDecoration:
                completed ?
                    'line-through' :
                    'none'
        }}>
    {text}
    </li>
);
///////////////////////////////
// PRESENTATIONAL COMPONENT///
/////////////////////////////
const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
        <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
        />
        )}
    </ul>
)
////////////////
// CONTAINER //
//////////////
class VisibleTodoList extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props
        const state = store.getState()

        return (
            <TodoList 
                todos={
                    getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick={ id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
        );
    }
}
/////////////////////////////
// ^^VISIBLE TODO LIST ^^///
///////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
////## FOOTER && FILTER LINK ## /////////
///////////////////////////////////////
// PRESENTATIONAL COMPONENT //////////
/////////////////////////////////////
const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href='#'
            onClick = { e => {
                e.preventDefault()
                onClick()
                }
            }
        >
        {children}
        </a>
    );
};
///////////////////////////////////////
// PRESENTATIONAL COMPONENT //////////
/////////////////////////////////////
const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
        >
            All
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_ACTIVE'
        >
            Active
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_COMPLETED'
        >
            Completed
        </FilterLink>
    </p>
)

//////////////////////////
// CONTAINER ////////////
////////////////////////
class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props
        const state = state.getState()

        return (
            <Link 
                active = {
                    props.filter ===
                    state.visibilityFilter
                }
                onClick={ () => 
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        )
    }
}
///////////////////////////
/// ^^ FILTER LINK ^^ ////
/////////////////////////////////////////////////////////////////////////////////


const TodoApp = () => (
    <div>
        {/* react callbackref API */}
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);


ReactDOM.render(
    <TodoApp store = {createStore(todoApp)}/>,
    document.getElementById('root')
);

 