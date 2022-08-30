# mixin混合

> 冲突: 组件中的属性优先级 > mixin中的优先级

```js
import { mapState } from 'vuex';
export default {
  data() {
    return {
      province: '',
      region: '',
      provinceId:0,
      regionList: [],
    }
  },
  computed:{
    ...mapState({
      province: state => state.province
    })
  },
  watch: {
    'province': {
      handler(value) {
        const index = this.province.findIndex(i => i.label = value)
      	if(index > 0) this.region = this.province[index].children
      }
    }
  }
}
```

```js
// 使用
import myMixin from './myMixin'
export default {
	mixins: [myMixin]
}
```

