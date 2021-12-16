const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingType): typeof initState => {
    switch (action.type) {
        case "LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export type LoadingType = {
    type: "LOADING"
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingType => {
    return {
        type: "LOADING",
        isLoading
    }
}