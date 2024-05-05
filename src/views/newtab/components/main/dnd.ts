import { useSiteStore } from '@/stores';
import type { ISiteItem } from './types';
import { useDrag, useDrop } from 'vue3-dnd';
import { computed, ref, type Ref, type VNodeRef } from 'vue';

function getUseDrop(hoverId: string, hoverNode: Ref<VNodeRef | undefined>) {
    const siteStore = useSiteStore();
    const { moveSiteItem } = siteStore;

    const classList = [
        'z-10',
        'w-[400px]',
        'h-[400px]',
        // 'absolute',
        'mx-50%',
        'max-h-[100vh]',
        'scale-y-150'
    ];

    return useDrop(() => {
        return {
            accept: 'siteList',
            hover: ({ id: draggedId }: any) => {
                if (draggedId !== hoverId) {
                    classList.forEach((cls) => {
                        (
                            hoverNode.value as unknown as HTMLElement
                        ).classList.add(cls);
                    });
                }
            },
            drop({ id: draggedId }: any, monitor) {
                moveSiteItem(draggedId, hoverId);

                classList.forEach((cls) => {
                    (
                        hoverNode.value as unknown as HTMLElement
                    ).classList.remove(cls);
                });

                console.log('monitor', monitor, monitor.getItem(), hoverNode);
            }
        };
    });
}

function getUseDrag(id: string, originNode: Ref<VNodeRef | undefined>) {
    const siteStore = useSiteStore();
    const { moveSiteItem } = siteStore;

    return useDrag(() => ({
        type: 'siteList',
        item: () => ({
            id,
            originId: id,
            originNode
        }),
        collect: (monitor) => {
            // console.log('monitor', monitor, monitor.getItem());

            const dragItem = monitor.getItem();

            (
                dragItem?.originNode.value as unknown as HTMLElement
            )?.classList.add('bg-fuchsia-300');

            return {
                isDragging: monitor.isDragging()
            };
        },
        end: (item, monitor) => {
            const { id: droppedId, originId, originNode } = item;
            const didDrop = monitor.didDrop();

            if (!didDrop) {
                moveSiteItem(droppedId, originId);
            }

            (originNode.value as unknown as HTMLElement)?.classList.remove(
                'bg-fuchsia-300'
            );
            (originNode.value as unknown as HTMLElement)?.classList.remove(
                'bg-fuchsia-100'
            );
        }
    }));
}

export function initDnD({ id }: ISiteItem) {
    const refNode = ref<VNodeRef>();

    const [, drop] = getUseDrop(id, refNode);
    const [collect, drag] = getUseDrag(id, refNode);

    const opacity = computed(() => {
        return collect.value.isDragging ? 0 : 1;
    });

    function refNodeCallBack(node: VNodeRef) {
        refNode.value = node;
        return drag(drop(node)) as Ref<VNodeRef>;
    }

    return {
        opacity,

        refNodeCallBack
    };
}
