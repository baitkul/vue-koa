<template>
  <div class="home">
    <h1>Books</h1>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        align="left"
        prop="title"
        label="Title">
      </el-table-column>
      <el-table-column
        align="left"
        prop="author"
        label="Author">
      </el-table-column>
      <el-table-column
        align="left"
        prop="description"
        label="Description">
      </el-table-column>
      <el-table-column
        align="left"
        prop="date"
        label="Date">
        <template slot-scope="scope">
          {{ formatDate(scope.row) }}
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        prop="date"
        label="Action">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <BookForm :book="book"/>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import BookForm from '@/components/BookForm.vue'

export default {
  name: 'home',

  components: {
    BookForm,
  },

  data() {
    return {
      dialogState: false,
      book: {},
    }
  },

  computed: {
    ...mapGetters([
      'list'
    ]),
  },

  methods: {
    ...mapActions([
      'getList',
      'destroy'
    ]),

    formatDate(d) {
      return moment(d).format('dd.mm.yyyy')
    },

    handleCreate() {
      this.book = {}
    },

    handleEdit(index, v) {
      this.book = Object.assign(v)
    },

    handleDelete(index, v) {
      this.destroy(v.id)
        .then(() => this.getList())
    }
  },

  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 3rem;
  }
}
</style>

