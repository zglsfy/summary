<template>
    <div>
        <item :treeData="treeData"></item>
    </div>
</template>

<script>
import Item from './Item'
export default {
    components: {
        Item
    },
    data () {
        return {
            treeData: {
                title: '1',
                children: [
                    {
                        title: '1-1',
                        children: [
                            {
                                title: '1-1-1'
                            }
                        ]
                    },
                    {
                        title: '1-2',
                        children: [
                            {
                                title: '1-2-1',
                                children: [
                                    {
                                        title: '1-2-1-1'
                                    },
                                    {
                                        title: '1-2-1-2'
                                    },
                                    {
                                        title: '1-2-1-3'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '1-3',
                        children: [
                            {
                                title: '1-3-1'
                            }
                        ]
                    }
                ]
            }
        }
    },

}
</script>

<style scoped>

</style>

