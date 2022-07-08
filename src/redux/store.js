const GET_PRODUCTS = 'GET-PRODUCTS';

let store = {

    _state: {
        productsPage: {
            products: [

            ]
        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed'); //OBSERVER
    },

    subscribe(observer) {
        this._callSubscriber = observer; //OBSERVER
    },

    dispatch(action) {
        if (action.type === GET_PRODUCTS) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => this._state.productsPage.products.push(...json))
        }
        console.log(this._state)
        this._callSubscriber(this._state);

    }
}

export const getProductsCreator = () => ({type: GET_PRODUCTS})


export default store;