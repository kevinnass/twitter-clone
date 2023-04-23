import axios from 'axios';
import jwt_decode from 'jwt-decode';
// import { getters, mutations } from '../store/index'; 

export default () => {
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');
    const useAuthLoading = () => useState('auth_loading', () => true);

    const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    }

    const setIsAuthLoading = (bool) => {
        const loading = useAuthLoading();
        loading.value = bool;
    }

    const login = ({ username, password }) => {
        axios.post('api/auth/login', 
        { 
            username,
            password
        }).then((response) => {
            setToken(response.data.accessToken);
            setUser(response.data.user);
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const refreshToken = () => {
        axios.get('api/auth/refresh')
        .then((response) => {
            setToken(response.data.accessToken);
            // mutations.set_token(response.data.accessToken);
        }).catch((error) => {
            console.log(error);
        });
    }

    const getUser = () => {
        axios.get('api/auth/user', {
        }).then((response) => {
            setUser(response.data.user);
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const reRefreshAccessToken = () => {
        const authToken = useAuthToken();

        if (!authToken.value) {
            return;
        }

        const jwt = jwt_decode(authToken.value);

        console.log(jwt);

        const newRefreshTime = jwt.exp - 60000;

        setTimeout(async () => {
            await refreshToken();
            reRefreshAccessToken();
        }, newRefreshTime);
    }

    const initAuth = () => {
        return new Promise((resolve, reject) => {
            setIsAuthLoading(true);
            try {
                getUser();
                refreshToken();
                reRefreshAccessToken();
                resolve(true);
            } catch(err) {
                reject(err);
            }
            finally {
                setIsAuthLoading(false);
            }
        });
    }

    return {
        login,
        useAuthUser,
        initAuth,
        useAuthLoading,
    }
}