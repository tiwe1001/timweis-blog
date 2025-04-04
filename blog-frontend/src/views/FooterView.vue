<template>
<v-list class="footer-list d-flex justify-center">
    <v-list-item
        v-for="item in list" :key="item.id"
        :to="item.route">
            <v-list-item-title>
                {{ item.title }}
            </v-list-item-title>
    </v-list-item>

    <v-list-item
        v-for="link in socialMediaLinks"
        :key="link.title"
        :href="link.route"
        target="_blank">
            <v-icon>
                {{ link.icon }}
            </v-icon>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">

const list = [
    { id: 1, title: "© 2025 Tim Weis", route: "" },
    { id: 2, title: "Impressum", route: "" },
    { id: 3, title: "Privacy Policy", route: "" },
    { id: 4, title: "Contact", route: "" },
];

const socialMediaLinks = [
    { id: 1, title: "GitHub", route: "https://github.com/tiwe1001", icon: "mdi-github" },
    { id: 2, title: "LinkedIn", route: "https://www.linkedin.com/in/tim-weis-59b4951a5/", icon: "mdi-linkedin" },
]
</script>

<style scoped lang="css">
.footer-list .v-list-item-title {
    font-size: 13px !important;
}

.v-list {
    background-color: #010101;
}
</style>