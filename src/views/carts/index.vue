<template>
  <div>
    <products
      v-if="showProduct"
      :productsData="productsData"></products>
    <empty-product v-else></empty-product>
  </div>
</template>
<script>
import EmptyProduct from '@/views/carts/components/EmptyProduct'
import Products from '@/views/carts/components/Products'
import d from '../../mocks/products.json'

export default {
  name: 'Cart',
  components: {
    EmptyProduct,
    Products
  },
  data () {
    return {
      productsData: []
    }
  },
  created () {
    this.productsData = d
  },
  computed: {
    showProduct () {
      return this.productsData.length > 0
    }
  }
}
</script>
