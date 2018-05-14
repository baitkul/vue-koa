<template>
  <div class="pa4 ba b--black-10">
    <div class="mt4 flex flex-column">
      <span class="tl">Author</span>
      <el-input
        class="mt2"
        placeholder="Please input author"
        v-model="item.author"></el-input>
    </div>
    <div class="mt4 flex flex-column">
      <span class="tl">Title</span>
      <el-input
        class="mt2"
        placeholder="Please input title"
        v-model="item.title"></el-input>
    </div>
    <div class="mt4 flex flex-column">
      <span class="tl">Description</span>
      <el-input
        class="mt2"
        placeholder="Please input description"
        v-model="item.description"></el-input>
    </div>
    <div class="mt4 flex flex-column">
      <span class="tl">Date</span>
      <el-date-picker
        class="mt2"
        v-model="item.date"
        type="date"
        placeholder="Pick a day"
        format="dd.MM.yyyy"
        value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },

  computed: {
    item() {
      return this.book
    }
  }
}
</script>

<style>

</style>
