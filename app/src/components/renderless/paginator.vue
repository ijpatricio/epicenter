<script>
export default {

  props: ['endpoint'],

  data: () => ({
    paginator: {
      data: [],
    },
  }),

  created() {
    this.updateData()
  },

  methods: {
    updateData() {
      this.$api
        .get(this.endpoint)
        .then(data => this.paginator = data)
    },
  },

  render() {
    return this.$scopedSlots.default({
      updateData: this.updateData,
      data: this.paginator.data,
      paginator: this.paginator,
    })
  },
}
</script>
