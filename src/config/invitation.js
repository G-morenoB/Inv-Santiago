// ✏️ EDITA AQUÍ los datos de la invitación
export const invitation = {
  name: "Santiago Noel",
  subtitle: "Bautizo y primer cumpleaños",

  // Fecha y hora de la fiesta (zona horaria Guerrero, UTC-6)
  eventDate: "2026-12-27T13:00:00-06:00",

  message:
    "Hoy, queremos invitarte a celebrar un día muy especial, donde la luz del Bautismo bendecirá su vida y festejaremos su primer cumpleaños con mucha alegría.",

  reception: {
    time: "1:00 PM",
    place: "Salón de fiestas Jardín El Bosque",
    address: "Campo 3 Hnos Aurelio Guinto, 40976 Coyuca de Benítez, Gro.",
    mapsUrl: "https://maps.app.goo.gl/AHDSSUUp4D8FsYrR9",
  },

  // Tu canción: coloca el archivo en public/music/song.mp3
  music: "/music/song.mp3",

  // Fotos: colócalas en public/gallery/
  gallery: [
    "/gallery/foto1.jpg",
    "/gallery/foto2.jpg",
    "/gallery/foto3.jpg",
    "/gallery/foto4.jpg",
    "/gallery/foto5.jpg",
    "/gallery/foto6.jpg",
    "/gallery/foto7.jpg",
    "/gallery/foto8.jpg",
  ],

  // Confirmación por WhatsApp (código de país + número, sin + ni espacios)
  whatsapp: "527410000000",
  whatsappText: "¡Hola! Confirmo mi asistencia al bautizo y cumpleaños de Noe Santiago 🦁",

  closing: "¡Te esperamos!",
};
