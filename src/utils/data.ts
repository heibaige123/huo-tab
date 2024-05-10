/**
 * 获取唯一ID
 * @returns 生成的唯一ID
 */
export function getUniqueId() {
    return (
        Math.random().toString().slice(-2) +
        '_' +
        Math.random().toString().slice(-4) +
        '_' +
        Math.random().toString().slice(-2)
    );
}

/**
 * 生成随机颜色
 */
export function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
