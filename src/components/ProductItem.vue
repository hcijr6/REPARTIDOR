<template>
  <tr>
    <td>{{order.id}}</td>
    <td>{{order.address}}</td>
    <td>
      <select v-model="selected">
        <option v-for="estado in estados" v-bind:value="estado.id" v-bind:key="estado.id">
          {{ estado.name }}
        </option>
      </select>
      <p>{{selected}}</p>
    </td>
    <td>{{order.timestamp}} €</td>
    <td><a class="btn btn-success" @click="updateState">GUARDAR</a></td>
  </tr>
</template>
<script>

export default{
  props:['order'],
  data() {
    return {
        selected:this.order.state,
    }
  },
  methods:{
    updateState(){
      this.order.state=this.selected;
      this.$store.dispatch('putOrder',this.order)
        .then(()=>alert('GUARDADO CORRECTAMENTE'),this.$store.dispatch('getOrders',this.order)
)
    }
  },
  computed:{
    estados(){
      return this.$store.state.states
    }
  }
}
</script>

<style>

</style>