# front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### sideBarMenu toggle ====> store이용
관련page
1. SideBar.vue : :class="{ shrinked: isShrinked }
2. Header.vue : :class="{ active: isToggleBtnActive }"
            @click.prevent="toggle"
3. store
    state: {
    isSideOpen: false
  },
  mutations: {
    toggleNav() {
      this.state.isSideOpen = !this.state.isSideOpen;
    }
  }
