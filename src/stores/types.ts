/**
 * 菜单项
 */
export interface IMenuItem {
    /**
     * 菜单项索引
     */
    id: string;

    /**
     * 图标
     */
    icon: string;

    /**
     * 菜单项名称
     */
    text: string;
}

/**
 * 用户信息
 */
export interface IUserInfo {
    /**
     * 用户名
     */
    username: string;

    /**
     * 用户头像
     */
    avatar: string;
}
