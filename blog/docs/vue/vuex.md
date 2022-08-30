# Vuex辅助函数

#### mapState

```js
import { mapState } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count,
    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',
      // 映射 this.count 为 store.state.count
  	'count'
  })
}
```

#### mapGetters

```js
// getters接收参数
getters: {
	getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

// 辅助函数
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      // 形式1
      'anotherGetter',
      // 形式2
      doneCount: 'doneTodosCount'
    ])
  }
}
```

#### mapMutations

```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', 
      'incrementBy'
    ]),
    ...mapMutations({
      add: 'increment'
    })
  }
}
```

#### mapActions

```js
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'increment',
      'incrementBy'
    ]),
    ...mapActions({
      add: 'increment'
    })
  }
}
```

