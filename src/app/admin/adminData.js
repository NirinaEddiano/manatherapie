export const adminData = {
    stats: {
        revenue: 2450.50,
        newClients: 12,
        pendingAppointments: 4,
        coursesSold: 38,
    },
    clients: [
        { id: 1, name: "Marie Dubois", email: "marie.dubois@email.com", joinDate: "2025-10-15",
          formations: { pending: 1, accepted: 4 }, appointments: { pending: 1, accepted: 2 }, cartItems: 2 },
        { id: 2, name: "Julien Martin", email: "julien.martin@email.com", joinDate: "2025-10-12",
          formations: { pending: 0, accepted: 1 }, appointments: { pending: 2, accepted: 5 }, cartItems: 0 },
        // ... Ajouter plus de clients
    ],
    appointments: [
        { id: 101, clientName: "Marie Dubois", service: "MANAXDRAIN", date: new Date(2025, 10, 28, 14, 0), type: 'presentiel', status: 'en attente' },
        { id: 102, clientName: "Julien Martin", service: "Coaching en Ligne", date: new Date(2025, 10, 29, 10, 0), type: 'live', status: 'accepté', meetLink: 'https://meet.google.com/xyz-abc' },
         { id: 103, clientName: "Julien Martin", service: "MANAXSCULPT", date: new Date(2025, 11, 2, 16, 0), type: 'presentiel', status: 'en attente' },
        // ... Ajouter plus de RDV
    ],
    // Les détails des formations sont importés de @/app/academie/academyData.js
};

export const clientDetail = { // Données pour la page détail d'un client (ID 1)
    id: 1, name: "Marie Dubois", email: "marie.dubois@email.com",
    formations: [
        { id: 'f1', title: "L'Art de l'Automassage", status: 'accepté' },
        { id: 'f2', title: "Le Guide de la Détox en 7 Jours", status: 'en attente' },
    ],
    appointments: [
        { id: 'a1', title: "MANAXDRAIN", date: "28 Nov 2025 - 14h00", type: "Présentiel", status: 'en attente' },
        { id: 'a2', title: "Coaching", date: "15 Nov 2025 - 11h00", type: "Présentiel", status: 'accepté' },
    ],
    cart: [
        { title: "Bases de l'Aromathérapie" },
        { title: "Retrouver un Sommeil Réparateur" },
    ]
};