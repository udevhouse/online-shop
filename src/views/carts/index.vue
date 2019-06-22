<template>
  <div>
    <!-- <empty-product></empty-product> -->
    <products></products>
  </div>
</template>
<script>
import EmptyProduct from '@/views/carts/components/EmptyProduct'
import Products from '@/views/carts/components/Products'

export default {
  name: 'Cart',
  components: {
    EmptyProduct,
    Products
  }
}
</script>
