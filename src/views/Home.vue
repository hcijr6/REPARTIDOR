<template>
  <div class="row" style="width:100%;height:100%;">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <table class="table table-striped table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Timestamp</th>
                        <th>Acciones</th>
                    </tr>
                </thead>fffff
                <tbody v-if="this.orders.length">
                    <product-item 
                        v-for="(item,index) in this.orders" 
                        :key="item.id"
                        :order="item"
                        :indice="index">
                    </product-item>
                </tbody>
                <p v-else>No hay órdenes que mostrar </p>
            </table>
        </div>
    </div>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'

export default{
    components:{
        ProductItem
    },
    data() {
        return {
            
        }
    },
    computed:{
        orders () {
            this.$store.dispatch('getOrders');
            return this.$store.state.orders;
        },
        loading() {
            return this.$store.state.loading
        }
    },
    beforeCreate(){
    this.$store.dispatch('getStates');
    if(!localStorage.getItem('token')){
        this.$router.push('/Login');}
    },
  
}
</script>
