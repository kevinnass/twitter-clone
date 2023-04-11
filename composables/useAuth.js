import axios from 'axios'

export default () => {
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');

    const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    }

    const login = ({ username, password }) => {
        axios.post('api/auth/login', 
        { 
            username,
            password
        }
        ).then((response) => {
            console.log(response.data);
            setToken(response.data.accessToken);
            setUser(response.data.user);
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const refreshToken = () => {
        axios.get('api/auth/refreshToken')
        .then((response) => {
            setToken(response.data.accessToken);
        }).catch((error) => {
            console.log(error);
        });
    }

    const initAuth = () => {
    }

    return {
        login,
        useAuthUser
    }
}