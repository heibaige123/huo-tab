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

/**
 * 收藏的网址信息
 */
export interface ISiteInfo {
    /**
     * 网址名称
     */
    name: string;

    /**
     * 网址链接
     */
    url: string;

    /**
     * 网站图标
     */
    img: string;

    /**
     * 网站唯一标识
     */
    id: string;

    /**
     * 背景颜色
     */
    bgColor?: string;
}
