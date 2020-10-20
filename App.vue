<template>
    <div>
        
    </div>
</template>
<script>
import { uuid } from './lib/index'
import { a } from './test'
export default {
    created() {
        console.log(uuid(4))
    },
}
</script>