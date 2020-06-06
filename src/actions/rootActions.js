export function showModal(payload) {
    return {
        type: "SHOW_MODAL",
        payload: payload
    };
}

export function hideModal(payload) {
    return {
        type: "HIDE_MODAL",
        payload: payload
    };
}

export function updateSymName(payload) {
    return {
        type: "UPDATE_SYM_NAME",
        payload: payload
    };
}

export function addStock(payload) {
    return {
        type: "ADD_STOCK",
        payload: payload
    };
}

export function initStock(payload) {
    return {
        type: "INIT_STOCK",
        payload: payload
    };
}

export function deleteStock(payload) {
    return {
        type: "DELETE_STOCK",
        payload: payload
    };
}