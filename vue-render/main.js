import Vue from 'vue';
import Skeleton from './skeleton.vue';

let instant = new Vue({
    components: {
        Skeleton
    },
    template: '<skeleton/>'
});

export default instant