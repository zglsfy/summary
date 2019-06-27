<template>
    <div class="tree-item-container">
        <p class="tree-title">{{treeData.title}}<span @click="openFolder" class="tree-open_icon">{{hasFolder ? '+' : ''}}</span></p>
        <ul class="tree-children" ref="tree-box" :style="{height: isOpen ? (this.$refs['tree-box'].scrollHeight + 'px') : '0'}">
            <!--   -->
            <li v-if="hasFolder">
                <item v-for="item in treeData.children" :key="item.title" :treeData="item"></item>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        treeData: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            isOpen: false
        }
    },
    computed: {
        hasFolder () {
            return this.treeData.children && this.treeData.children.length
        }
    },
    methods: {
        openFolder () {
            this.isOpen = !this.isOpen
            this.$refs['tree-box'].style.height = this.$refs['tree-box'].scrollHeight
        }
    }
}
</script>

<style scoped>
.tree-title{
    font-size: 16px;
}
.tree-children{
    overflow: hidden;
    transition: all 0.3s;
}
.tree-item-container{
    cursor: pointer;
    width: 200px;
    padding: 0 10px;
}
</style>

