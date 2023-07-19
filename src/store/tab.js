export default {
    mutations: {
        collapseMenu(state, value) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                // console.log(val.path);
                // console.log(state.tabsList[state.tabsList.length - 1].path);
                if (index === -1) {
                    state.tabsList.push(val)
                } 
            }
        },
        closeTag(state, item){
            const index = state.tabsList.findIndex(val=> val.name === item.name)
            state.tabsList.splice(index, 1)
        }
    },
    state: {
        isCollapse: false,   //用于控制菜单展开与收起
        // 导航栏条
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ]
    },
}