// Action Creator = Customers

// user = {id : 1 , username : 'rochafi, password: 'satuduatiga}
export let onLoginUser = (user) => {

    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id : user.id,
            username : user.username
        }
    }
}

export let onLogoutUser = () => {
    return {
        type: "LOGOUT_SUCCESS"
    }
}