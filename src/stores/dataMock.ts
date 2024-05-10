import { getRandomColor, getUniqueId } from '@/utils';
import { useMenuStore } from './sub-data/menu';

function getRandNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

/**
 * 生成搜索引擎数据
 */
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

/**
 * 生成网站数据
 */
export function generateSiteList(len = 5) {
    const { menuList } = useMenuStore();

    const result: Record<string, any[]> = {};

    menuList.forEach((menuItem) => {
        result[menuItem.id] = [];

        for (let index = 0; index < len; index++) {
            const id = getUniqueId();

            result[menuItem.id].push({
                name: '搜狗' + id,
                url: 'https://www.sogou.com',
                img: 'data:image/png;base64,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',
                id,
                bgColor: getRandomColor()
            });
        }
    });

    return result;
}
