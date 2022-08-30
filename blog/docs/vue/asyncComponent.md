# 异步组件

```vue
<script>
export default {
  components: {
    Login: () => import('../user/Login')
  }
}
</script>
```

