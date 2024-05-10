import Sortable from './src/Sortable.js';
import Swap from './plugins/Swap/index.js';
import MultiDrag from './plugins/MultiDrag/index.js';
import AutoScroll from './plugins/AutoScroll/index.js';
import { RemoveOnSpill, RevertOnSpill } from './plugins/OnSpill/index.js';

Sortable.mount(new Swap());
Sortable.mount(new MultiDrag());
Sortable.mount(new AutoScroll());
Sortable.mount(RemoveOnSpill, RevertOnSpill);

export default Sortable;

export {
    Sortable,

    // Extra
    Swap,
    MultiDrag
};
