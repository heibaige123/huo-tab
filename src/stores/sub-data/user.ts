import { defineStore, storeToRefs } from 'pinia';
import { reactive } from 'vue';
import type { IUserInfo } from '../types';

export const useUserStore = defineStore('user', () => {
    const userInfo = reactive<IUserInfo>({
        username: 'admin',
        avatar: 'https://images.unsplash.com/photo-1464798429116-8e26f96b2e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D'
    });

    function setUsername(username: string) {
        userInfo.username = username;
    }

    function setAvatar(avatar: string) {
        userInfo.avatar = avatar;
    }

    return {
        userInfo,

        setUsername,
        setAvatar
    };
});
