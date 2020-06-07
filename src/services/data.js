const phases = [
  {
    name: "cero",
    actividades: {
      horarios: {
        a: [
          "de 12:00 a 19:00",
          "Deberán ir acompañados de un adulto. Como máximo 3 menores de 14 años por cada adulto.",
        ],
        b: "de 10:00 a 12:00 // de 19:00 a 20:00",
        c: "de 6:00 a 10:00 // de 20:00 a 23:00",
        d:
          "⚠️con 1 persona conviviente   ⚠️1 vez al día   ⚠️máximo 1 hora   ⚠️a no más de 1 kilómetro del domicilio",
      },
      ceremonias: {
        cultos: null,
        bodas: null,
      },
      comercios: {
        pequeños:
          "Apertura de comercios de menos de 400m² con cita previa y atención individual.",
        grandes: null,
        mercadillos: null,
        cc: null,
      },
      hostelería: {
        takeaway: "Atención individual y con cita previa.",

        enlocal: null,
        terrazas: null,
        discotecas: null,
        hoteles: null,
      },
      deporte: {
        individual:
          "Que no requiera de contacto con terceros y sin abandonar el municipio de residencia.",
        profesional: null,
        competiciones: null,
      },
      cultura: {
        museos: null,
        bibliotecas: null,
      },
      ocio: {
        cine: null,
        espectáculos: null,
        exteriores: null,
      },
      funerales: {
        funerales: null,
      },
    },
  },
  {
    name: "uno",
    actividades: {
      horarios: {
        a: "de 12:00 a 19:00",
        b: "de 10:00 a 12:00 // de 19:00 a 20:00",
        c: "de 6:00 a 10:00 // de 20:00 a 23:00",
        d:
          "⚠️con máximo 10 personas   ⚠️1 vez al día   ⚠️máximo 1 hora   ⚠️a no más de 1 kilómetro del domicilio  🟢 En localidades de menos de 10.000 habitantes, sin franjas.",
      },
      ceremonias: {
        cultos: "Aforo limitado al 33%.",
        bodas: null,
      },
      comercios: {
        pequeños:
          "Apertura de comercios de menos de 400m², que no se encuentren dentro de parques o centros comerciales sin acceso directo e independiente desde el exterior.",
        mercadillos: [
          "Apertura de mercadillos con funcionamiento hasta el 25% y aforo limitado al 30%.",
          "Prohibido el autoservicio y los productos de prueba.",
        ],
        grandes: null,
        cc: null,
      },
      hostelería: {
        takeaway: "Atención individual y con cita previa.",
        enlocal: null,
        terrazas:
          "Apertura de terrazas con ciertas limitaciones: aforo hasta 30%-50%.",
        discotecas: null,
        hoteles:
          "Apertura de hoteles y alojamientos turísticos. No se permite el uso de instalaciones de uso común, como piscinas, gimnasios o zonas de recreo.",
      },
      deporte: {
        individual:
          "Se podrán realizar actividades que no impliquen contacto físico ni uso de vestuarios y sin abandonar el municipio de residencia.",
        profesional: "Apertura de centros deportivos de alto rendimiento.",
        competiciones: null,
      },
      cultura: {
        museos: "Apertura de museos solo para visitas. Aforo limitado al 33%.",
        bibliotecas:
          "Apertura de bibliotecas para préstamo y devolución de obras, lectura en sala y para información bibliográfica y bibliotecaria",
      },
      ocio: {
        cine: null,
        espectáculos: [
          "Actividades culturales: aforo limitado al 33%",
          "Lugares cerrados: máximo 30 personas",
          "Al aire libre: máximo 200 personas sentadas.",
        ],

        exteriores: [
          "Actividades culturales: aforo limitado al 33%",
          "Al aire libre: máximo 200 personas sentadas.",
        ],
      },
      funerales: {
        funerales:
          "Velatorios y actos fúnebres: aforo limitado de 15 personas en espacios al aire libre y de 10 personas en espacios cerrados.",
      },
    },
  },
  {
    name: "dos",
    actividades: {
      horarios: {
        a: "se elimina franja horaria",
        b: "de 10:00 a 12:00 // de 19:00 a 20:00",
        c: "se elimina franja horaria",
        d:
          "⚠️con máximo 15 personas    🟢 en localidades de menos de 10.000 habitantes, sin franjas horarias.",
      },
      ceremonias: {
        cultos: "Aforo limitado al 50%.",
        bodas:
          "Aforo limitado al 50%: al aire libre hasta 100 personas y en espacios cerrados hasta 50 personas.",
      },
      comercios: {
        pequeños: "Aforo limitado al 40%.",
        grandes: "Aforo limitado al 40%.",
        mercadillos: "Mercadillos: aforo limitado al 33%.",
        cc:
          "Apertura de centros comerciales, salvo zonas comunes o áreas recreativas: aforo limitado al 40%.",
      },
      hostelería: {
        takeaway: "Atención individual y con cita previa.",
        enlocal:
          "Apertura de bares y restaurantes para consumo en local, salvo discotecas y bares de ocio nocturno. El consumo se hará en la mesa y no en la barra. Aforo limitado al 40%",
        terrazas: "Aforo limitado al 50% y máximo 10 personas por mesa.",
        discotecas: null,
        hoteles: " Apertura de zonas comunes con aforo limitado al 33%.",
      },
      deporte: {
        individual:
          "No profesional y al aire libre, en cualquier franja horaria a excepción de la comprendida entre las 10:00 a 12:00 y 19:00 a 20:00, franjas reservadas a los mayores de 70 años.",
        profesional: "si",
        competiciones:
          "Campeonatos profesionales en partidos a puerta cerrada o con aforo limitado y con posibilidad de ser retransmitidos.",
      },
      cultura: {
        museos:
          "Apertura de monumentos y otros equipammientos culturales. Aforo limitado al 33%.",
        bibliotecas:
          "Préstamo y devolución de obras, lectura en sala y consulta en sala con aforo limitado al 33%. Se puede hacer uso de ordenadores y se permite el préstamo interbibliotecario.",
      },
      ocio: {
        cine:
          "Apertura de cines y teatros, asistencia con butacas pre-asignadas. Aforo limitado al 33%.",
        espectáculos:
          "Actividades culturales en lugares cerrados: máximo 50 personas y, al aire libre: máximo 400 personas sentadas. Aforo limitado al 33%.",
        exteriores:
          " Actividades culturales al aire libre: máximo 400 personas sentadas. Aforo limitado al 33%.",
      },
      funerales: {
        funerales:
          "Aforo limitado: al aire libre hasta 25 personas y en espacios cerrados hasta 15 personas.",
      },
    },
  },
  {
    name: "tres",
    actividades: {
      horarios: {
        d: "Se eliminan las franjas horarias 🕒👋🏻",
      },
      ceremonias: {
        cultos: "si",
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        grandes: "si",
        mercadillos: "Mercadillo: aforo limitado al 50%.",
        cc:
          "Apertura de zonas comunes y recreativas en Centros Comerciales: aforo limitado al 50%.",
      },
      hostelería: {
        takeaway: "si",
        enlocal: "Aforo limitado al 50% y consumo en barra.",
        terrazas: "si",
        discotecas:
          "Apertura de bares nocturnos y discotecas con aforo limitado al 33%.",
        hoteles:
          "Apertura de zonas comunes en hoteles y alojamientos turísticos: aforo limitado al 50%.",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: "si",
      },
      cultura: {
        museos: "si",
        bibliotecas: "si",
      },
      ocio: {
        cine: "si",
        espectáculos: "Actividades culturales: aumenta el aforo limitado.",
        exteriores: "Actividades culturales: aumenta el aforo limitado.",
      },
      funerales: {
        funerales: "si",
      },
    },
  },
  {
    name: "cuatro",
    info: "nueva normalidad",
  },
];

export default phases;
