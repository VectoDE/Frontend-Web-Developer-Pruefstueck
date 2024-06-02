<template>
    <div>
        <h2>Dashboard Overview</h2>

        <!-- Ticket Overview -->
        <section>
            <h3>Ticket Overview</h3>
            <div>
                <p>Total Tickets: {{ ticketCount }}</p>
                <p>Open Tickets: {{ openTicketCount }}</p>
                <p>Closed Tickets: {{ closedTicketCount }}</p>
            </div>
        </section>

        <!-- Bewerbungen Overview -->
        <section>
            <h3>Bewerbungen Overview</h3>
            <div>
                <p>Total Bewerbungen: {{ applicationCount }}</p>
                <p>Open Bewerbungen: {{ openApplicationCount }}</p>
                <p>Closed Bewerbungen: {{ closedApplicationCount }}</p>
            </div>
        </section>

        <!-- Einnahmen Overview -->
        <section>
            <h3>Einnahmen Overview</h3>
            <div>
                <p>Total Einnahmen: {{ totalRevenue }} $</p>
                <p>Heutige Einnahmen: {{ dailyRevenue }} $</p>
                <p>Monatliche Einnahmen: {{ monthlyRevenue }} $</p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Beispiel-Daten für die Übersicht
const ticketCount = ref(150);
const openTicketCount = ref(20);
const closedTicketCount = ref(130);

const applicationCount = ref(50);
const openApplicationCount = ref(10);
const closedApplicationCount = ref(40);

const totalRevenue = ref(5000);
const dailyRevenue = ref(100);
const monthlyRevenue = ref(3000);
</script>

<style scoped>
/* Hier den CSS-Stil für das Dashboard definieren */
section {
    margin-bottom: 20px;
}
</style>