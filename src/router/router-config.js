/**
 * Created by xiajing on 2016/10/10.
 */
export function  configRouter(router) {
    router.map({
        '/': {
            component: require('../component/testOne.vue')
        },
        'testTwo':{
            component: require('../component/testTwo.vue')
        },
    })
}