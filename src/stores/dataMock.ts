import { getUniqueId } from '@/utils';

/**
 * 生成菜单数据
 */
export function generateMenu(len = 5) {
    const menuTextArr = [
        '首页',
        '用户管理',
        '角色管理',
        '权限管理',
        '日志管理'
    ];

    const menuIconArr = [
        'tdesign:setting',
        'fa-solid:clock',
        'fa-solid:archway',
        'fa-solid:journal-whills',
        'fa-solid:globe-asia'
    ];

    const menuList = [];

    for (let index = 0; index < len; index++) {
        const menuItem = {
            icon: menuIconArr[getRandNum(0, 4)],
            text: menuTextArr[getRandNum(0, 4)],
            id: getUniqueId()
        };
        menuList.push(menuItem);
    }

    return menuList;
}

export function generateSearchServer(len = 5) {
    const serverList = [
        {
            id: getUniqueId(),
            name: '百度',
            urlPrefix: 'https://www.baidu.com/s?word=',
            icon: 'h-tab-i:baidu'
        },
        {
            id: getUniqueId(),
            name: '谷歌',
            urlPrefix: 'https://www.google.com/search?q=',
            icon: 'flat-color-icons:google'
        },
        {
            id: getUniqueId(),
            name: '必应',
            urlPrefix: 'https://cn.bing.com/search?q=',
            icon: 'h-tab-i:bing'
        },
        {
            id: getUniqueId(),
            name: '360',
            urlPrefix: 'https://www.so.com/s?q=',
            icon: 'h-tab-i:360'
        },
        {
            id: getUniqueId(),
            name: '搜狗',
            urlPrefix: 'https://www.sogou.com/web?query=',
            icon: 'h-tab-i:sogou'
        },
        {
            id: getUniqueId(),
            name: '雅虎',
            urlPrefix: 'https://search.yahoo.com/search?p=',
            icon: 'h-tab-i:yahoo'
        },
        {
            id: getUniqueId(),
            name: 'DuckDuckGo',
            urlPrefix: 'https://duckduckgo.com/?q=',
            icon: 'h-tab-i:duckduckgo'
        },
        {
            id: getUniqueId(),
            name: 'Yandex',
            urlPrefix: 'https://yandex.com/search/?text=',
            icon: 'h-tab-i:yandex'
        }
    ];

    return serverList;
}

function getRandNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
