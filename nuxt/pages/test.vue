<template>
    <div>
        <h2>test</h2>
        <p>{{counter}}</p>
        <button @click.prevent.stop="increment">+</button>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
      computed: {
        ...mapState(['counter'])
      },
      methods: {
        ...mapMutations(['increment'])
      }
    }
</script>