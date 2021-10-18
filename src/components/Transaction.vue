<template>
  <v-container fluid>
      <br>
    <v-row dense >
      <v-col v-for="(card,i) in cards" :key="card.title" :cols="card.flex">
        <v-card style="padding: 10px;height: 250px;overflow:hidden" >
          <div v-if="per[i]">
          <v-card-title v-text="card.title" class="ms-n3"></v-card-title>
          <div class="text--primary">
            {{ card.content }}
          </div>
          </div>
          <div v-else> 
           Access  Denied
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { vxm } from "../store/store.vuex";
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class Transaction extends Vue {
  cards = [
    {
      title: "Goods",
      content:
        "Labore sit est sunt esse magna consequat fugiat elit magna incididunt Dolor eiusmod aliqua sint cupidatat. Nostrud eiusmod velit nisi qui magna nostrud nostrud pariatur non esse. Reprehenderit excepteur mollit non nostrud exercitation ad qui culpa sint elit cupidatat commodo enim. Voluptate in commodo nulla non sint culpa do velit fugiat." ,
      flex: 4,
    },
    {
      title: "Services ",
      content:
        "Occaecat sint voluptate non consequat aliquip. Ea non nisi enim quis. Ut cupidatat commodo deserunt dolor elit nulla dolore duis velit eiusmod est do magna duis. Est anim occaecat consequat magna culpa ex in enim anim ex aute aliqua.",
      flex: 4,
    },
    {
      title: "Inbound",
      content:
        "Quis ut Lorem est proident fugiat sunt. Sint cupidatat do incididunt excepteur occaecat dolor aliqua laboris esse eiusmod laborum. Veniam sint consectetur ex non excepteur sit sunt laborum ut deserunt sunt esse nisi deserunt. Sint nostrud ea magna excepteur exercitation adipisicing.",
      flex: 4,
    },
    {
      title: "Outbound",
      content:
        "Magna fugiat aliquip proident deserunt magna in. Ad tempor quis ea deserunt proident consequat. Voluptate tempor consequat velit laborum Lorem pariatur cupidatat cupidatat tempor culpa velit in.",
      flex: 4,
    },
  ];
  data = vxm.utility.permissions.transaction.sections.content.sections;
  per=[this.data.goods.access,this.data.services.access,this.data.inbound.access,this.data.outbound.access]

}
</script>