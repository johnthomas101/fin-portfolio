// This is the initial state
let initialState = {
    modalState: false,
    modalDetails: {
        symbol: null,
        name: "My company",
        no: null,
        price: null,
        date: null
    },
    myStocks: [
        {
            symbol: "A",
            name: "A",
            no: 10,
            buy: 200,
            curr: 100,
            profit: 20
        }, {
            symbol: "B",
            name: "B",
            no: 10,
            buy: 200,
            curr: 100,
            profit: 20
        }, {
            symbol: "C",
            name: "C",
            no: 10,
            buy: 200,
            curr: 100,
            profit: 20
        },
    ],
    myStocks: []
}

// This is your reducer

const rootReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "UPDATE_SYM_NAME":
            state = {
                ...state,
                modalDetails: {
                    ...state.modalDetails,
                    symbol: action.payload.symbol,
                    name: action.payload.name
                }
            }
            break;
        case "HIDE_MODAL":
            state = {
                ...state,
                modalState: false
            }
            break;
        case "SHOW_MODAL":
            state = {
                ...state,
                modalState: true
            }
            break;
        case "ADD_STOCK":
            state = {
                ...state,
                myStocks: [...state.myStocks, action.payload.stock]
            }
            break;
        case "INIT_STOCK":
            state = {
                ...state,
                myStocks: [...action.payload.stocks]
            }
            break;
        case "DELETE_STOCK":
            debugger
            let deletedStockNum = -1; 
            for(let i=0; i<state.myStocks.length;i++){
                if(state.myStocks[i]['key'] == action.payload.key){
                    deletedStockNum = i;
                }
            }
            let newArray = state.myStocks.splice(deletedStockNum, 1);
            state = {
                ...state,
                myStocks: [...newArray]
            }
            break;
        case "OTHER_ACTION":
            break;

    }
    return state;
}

export default rootReducer;