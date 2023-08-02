import React, {useReducer, useContext, useRef, createContext} from "react";


const StateContext = createContext(null);
const DispatchContext = createContext(null);
const NextIdContext = createContext(null); 

/*
    렌더링이란 서버로부터 HTML 파일을 받아서 브라우저에 뿌리는 과정
    Context에서 사용할 값을 지정할 때는 아래와 같이 Provider 컴포넌트를 렌더링하고
    Value 설정해주면 된다.
    props로 받아온 children 값을 내부에 렌더링해줌
    이렇게 하면 다른 컴포넌트에서 state나 dispatch를 사용하고 싶을 때 다음과 같이 할 수 있다.

*/

/*
    
    createContext 생성한 context 객체를 원하는 클래스의 contextType 프로퍼티로 지정 
    프로퍼티 = 이름이나 값 가지고 있다. (key, value)

*/

function reducer(state, action) {

    switch (action.type){
        case 'CREATE':
            return state.concat(action.todo); 
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id? {...todo, done: !todo.done}: todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }

}



const intodolist = [
    {
        id : 1,
        text : '리액트 공부',
        done : true
    },
    {
        id : 2,
        text : '코팅테스트 공부',
        done : true
    },
    {
        id : 3,
        text : '운동',
        done : true
    },
    {
        id : 4,
        text : '점심',
        done : true
    },
    {
        id : 5,
        text : '상담',
        done : false
    }
];

export function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, intodolist);
    const nextId = useRef(6);

    return(
    <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NextIdContext.Provider value={nextId}>
                    {children}
                </NextIdContext.Provider>
            </DispatchContext.Provider>

    </StateContext.Provider>

    );

}

export function useState(){
    return useContext(StateContext);
}

export function useDispatch(){
    return useContext(DispatchContext);
}

export function useNextID(){
    return useContext(NextIdContext);
}

