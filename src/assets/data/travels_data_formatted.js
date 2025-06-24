const travels = [
  {
    id: 1,
    destination: "Parigi",
    dateStart: "2025-07-05",
    dateEnd: "2025-07-12",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    peopleList: [
      {
        id: 1,
        firstName: "Luca",
        lastName: "Verdi",
        idCode: "VRDLUC90A01H501V",
        email: "luca.verdi@example.com",
        phone: "+39 3331234567"
      },
      {
        id: 2,
        firstName: "Giulia",
        lastName: "Neri",
        idCode: "NERGLI85C22H501Y",
        email: "giulia.neri@example.com",
        phone: "+39 3349876543"
      },
      {
        id: 3,
        firstName: "Marco",
        lastName: "Rossi",
        idCode: "RSSMRC78D15H501S",
        email: "marco.rossi@example.com",
        phone: "+39 3351112222"
      },
      {
        id: 4,
        firstName: "Anna",
        lastName: "Bianchi",
        idCode: "BNCANN91E30H501U",
        email: "anna.bianchi@example.com",
        phone: "+39 3362223333"
      },
      {
        id: 5,
        firstName: "Stefano",
        lastName: "Conti",
        idCode: "CNTSFN80F01H501L",
        email: "stefano.conti@example.com",
        phone: "+39 3374445555"
      },
      {
        id: 6,
        firstName: "Elena",
        lastName: "Ricci",
        idCode: "RCCELN87G20H501P",
        email: "elena.ricci@example.com",
        phone: "+39 3385556666"
      },
      {
        id: 7,
        firstName: "Alessandro",
        lastName: "Romano",
        idCode: "RMNLSS79H12H501T",
        email: "alessandro.romano@example.com",
        phone: "+39 3397778888"
      },
      {
        id: 8,
        firstName: "Chiara",
        lastName: "Marino",
        idCode: "MRNCHR92I25H501Q",
        email: "chiara.marino@example.com",
        phone: "+39 3401110000"
      },
      {
        id: 9,
        firstName: "Francesco",
        lastName: "Lombardi",
        idCode: "LMBFNC75J17H501M",
        email: "francesco.lombardi@example.com",
        phone: "+39 3412221111"
      },
      {
        id: 10,
        firstName: "Martina",
        lastName: "Galli",
        idCode: "GLLMRT88K10H501R",
        email: "martina.galli@example.com",
        phone: "+39 3423334444"
      },
      {
        id: 11,
        firstName: "Federico",
        lastName: "Greco",
        idCode: "GRCFRC81L01H501C",
        email: "federico.greco@example.com",
        phone: "+39 3435557777"
      },
      {
        id: 12,
        firstName: "Sara",
        lastName: "Palmieri",
        idCode: "PLMSRA93M15H501D",
        email: "sara.palmieri@example.com",
        phone: "+39 3446668888"
      },
      {
        id: 13,
        firstName: "Andrea",
        lastName: "De Luca",
        idCode: "DLCDND82N20H501K",
        email: "andrea.deluca@example.com",
        phone: "+39 3459990000"
      },
      {
        id: 14,
        firstName: "Laura",
        lastName: "Costa",
        idCode: "CSTLRA90O11H501E",
        email: "laura.costa@example.com",
        phone: "+39 3461212121"
      },
      {
        id: 15,
        firstName: "Simone",
        lastName: "Ferrari",
        idCode: "FRRSNM89P22H501F",
        email: "simone.ferrari@example.com",
        phone: "+39 3472323232"
      }
    ]
  },
  {
    id: 2,
    destination: "Londra",
    dateStart: "2025-08-10",
    dateEnd: "2025-08-18",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    peopleList: [
      {
        id: 16,
        firstName: "Luca",
        lastName: "Verdi",
        idCode: "VRDLUC90A01H501V",
        email: "luca.verdi@example.com",
        phone: "+39 3331234567"
      },
      {
        id: 17,
        firstName: "Giulia",
        lastName: "Neri",
        idCode: "NERGLI85C22H501Y",
        email: "giulia.neri@example.com",
        phone: "+39 3349876543"
      },
      {
        id: 18,
        firstName: "Marco",
        lastName: "Rossi",
        idCode: "RSSMRC78D15H501S",
        email: "marco.rossi@example.com",
        phone: "+39 3351112222"
      },
      {
        id: 19,
        firstName: "Anna",
        lastName: "Bianchi",
        idCode: "BNCANN91E30H501U",
        email: "anna.bianchi@example.com",
        phone: "+39 3362223333"
      },
      {
        id: 20,
        firstName: "Stefano",
        lastName: "Conti",
        idCode: "CNTSFN80F01H501L",
        email: "stefano.conti@example.com",
        phone: "+39 3374445555"
      },
      {
        id: 21,
        firstName: "Elena",
        lastName: "Ricci",
        idCode: "RCCELN87G20H501P",
        email: "elena.ricci@example.com",
        phone: "+39 3385556666"
      },
      {
        id: 22,
        firstName: "Alessandro",
        lastName: "Romano",
        idCode: "RMNLSS79H12H501T",
        email: "alessandro.romano@example.com",
        phone: "+39 3397778888"
      },
      {
        id: 23,
        firstName: "Chiara",
        lastName: "Marino",
        idCode: "MRNCHR92I25H501Q",
        email: "chiara.marino@example.com",
        phone: "+39 3401110000"
      },
      {
        id: 24,
        firstName: "Francesco",
        lastName: "Lombardi",
        idCode: "LMBFNC75J17H501M",
        email: "francesco.lombardi@example.com",
        phone: "+39 3412221111"
      },
      {
        id: 25,
        firstName: "Martina",
        lastName: "Galli",
        idCode: "GLLMRT88K10H501R",
        email: "martina.galli@example.com",
        phone: "+39 3423334444"
      },
      {
        id: 26,
        firstName: "Federico",
        lastName: "Greco",
        idCode: "GRCFRC81L01H501C",
        email: "federico.greco@example.com",
        phone: "+39 3435557777"
      },
      {
        id: 27,
        firstName: "Sara",
        lastName: "Palmieri",
        idCode: "PLMSRA93M15H501D",
        email: "sara.palmieri@example.com",
        phone: "+39 3446668888"
      },
      {
        id: 28,
        firstName: "Andrea",
        lastName: "De Luca",
        idCode: "DLCDND82N20H501K",
        email: "andrea.deluca@example.com",
        phone: "+39 3459990000"
      },
      {
        id: 29,
        firstName: "Laura",
        lastName: "Costa",
        idCode: "CSTLRA90O11H501E",
        email: "laura.costa@example.com",
        phone: "+39 3461212121"
      },
      {
        id: 30,
        firstName: "Simone",
        lastName: "Ferrari",
        idCode: "FRRSNM89P22H501F",
        email: "simone.ferrari@example.com",
        phone: "+39 3472323232"
      }
    ]
  },
  {
    id: 3,
    destination: "Barcellona",
    dateStart: "2025-09-01",
    dateEnd: "2025-09-08",
    img: "https://www.catalunyaexperience.it/wp-content/uploads/2021/05/Barcellona-Park-Guell-bg.jpg",
    peopleList: [
      {
        id: 31,
        firstName: "Luca",
        lastName: "Verdi",
        idCode: "VRDLUC90A01H501V",
        email: "luca.verdi@example.com",
        phone: "+39 3331234567"
      },
      {
        id: 32,
        firstName: "Giulia",
        lastName: "Neri",
        idCode: "NERGLI85C22H501Y",
        email: "giulia.neri@example.com",
        phone: "+39 3349876543"
      },
      {
        id: 33,
        firstName: "Marco",
        lastName: "Rossi",
        idCode: "RSSMRC78D15H501S",
        email: "marco.rossi@example.com",
        phone: "+39 3351112222"
      },
      {
        id: 34,
        firstName: "Anna",
        lastName: "Bianchi",
        idCode: "BNCANN91E30H501U",
        email: "anna.bianchi@example.com",
        phone: "+39 3362223333"
      },
      {
        id: 35,
        firstName: "Stefano",
        lastName: "Conti",
        idCode: "CNTSFN80F01H501L",
        email: "stefano.conti@example.com",
        phone: "+39 3374445555"
      },
      {
        id: 36,
        firstName: "Elena",
        lastName: "Ricci",
        idCode: "RCCELN87G20H501P",
        email: "elena.ricci@example.com",
        phone: "+39 3385556666"
      },
      {
        id: 37,
        firstName: "Alessandro",
        lastName: "Romano",
        idCode: "RMNLSS79H12H501T",
        email: "alessandro.romano@example.com",
        phone: "+39 3397778888"
      },
      {
        id: 38,
        firstName: "Chiara",
        lastName: "Marino",
        idCode: "MRNCHR92I25H501Q",
        email: "chiara.marino@example.com",
        phone: "+39 3401110000"
      },
      {
        id: 39,
        firstName: "Francesco",
        lastName: "Lombardi",
        idCode: "LMBFNC75J17H501M",
        email: "francesco.lombardi@example.com",
        phone: "+39 3412221111"
      },
      {
        id: 40,
        firstName: "Martina",
        lastName: "Galli",
        idCode: "GLLMRT88K10H501R",
        email: "martina.galli@example.com",
        phone: "+39 3423334444"
      },
      {
        id: 41,
        firstName: "Federico",
        lastName: "Greco",
        idCode: "GRCFRC81L01H501C",
        email: "federico.greco@example.com",
        phone: "+39 3435557777"
      },
      {
        id: 42,
        firstName: "Sara",
        lastName: "Palmieri",
        idCode: "PLMSRA93M15H501D",
        email: "sara.palmieri@example.com",
        phone: "+39 3446668888"
      },
      {
        id: 43,
        firstName: "Andrea",
        lastName: "De Luca",
        idCode: "DLCDND82N20H501K",
        email: "andrea.deluca@example.com",
        phone: "+39 3459990000"
      },
      {
        id: 44,
        firstName: "Laura",
        lastName: "Costa",
        idCode: "CSTLRA90O11H501E",
        email: "laura.costa@example.com",
        phone: "+39 3461212121"
      },
      {
        id: 45,
        firstName: "Simone",
        lastName: "Ferrari",
        idCode: "FRRSNM89P22H501F",
        email: "simone.ferrari@example.com",
        phone: "+39 3472323232"
      }
    ]
  },
  {
    id: 4,
    destination: "New York",
    dateStart: "2025-10-15",
    dateEnd: "2025-10-25",
    img: "https://www.travelguide.uno/media/new-york.jpeg",
    peopleList: [
      {
        id: 46,
        firstName: "Luca",
        lastName: "Verdi",
        idCode: "VRDLUC90A01H501V",
        email: "luca.verdi@example.com",
        phone: "+39 3331234567"
      },
      {
        id: 47,
        firstName: "Giulia",
        lastName: "Neri",
        idCode: "NERGLI85C22H501Y",
        email: "giulia.neri@example.com",
        phone: "+39 3349876543"
      },
      {
        id: 48,
        firstName: "Marco",
        lastName: "Rossi",
        idCode: "RSSMRC78D15H501S",
        email: "marco.rossi@example.com",
        phone: "+39 3351112222"
      },
      {
        id: 49,
        firstName: "Anna",
        lastName: "Bianchi",
        idCode: "BNCANN91E30H501U",
        email: "anna.bianchi@example.com",
        phone: "+39 3362223333"
      },
      {
        id: 50,
        firstName: "Stefano",
        lastName: "Conti",
        idCode: "CNTSFN80F01H501L",
        email: "stefano.conti@example.com",
        phone: "+39 3374445555"
      },
      {
        id: 51,
        firstName: "Elena",
        lastName: "Ricci",
        idCode: "RCCELN87G20H501P",
        email: "elena.ricci@example.com",
        phone: "+39 3385556666"
      },
      {
        id: 52,
        firstName: "Alessandro",
        lastName: "Romano",
        idCode: "RMNLSS79H12H501T",
        email: "alessandro.romano@example.com",
        phone: "+39 3397778888"
      },
      {
        id: 53,
        firstName: "Chiara",
        lastName: "Marino",
        idCode: "MRNCHR92I25H501Q",
        email: "chiara.marino@example.com",
        phone: "+39 3401110000"
      },
      {
        id: 54,
        firstName: "Francesco",
        lastName: "Lombardi",
        idCode: "LMBFNC75J17H501M",
        email: "francesco.lombardi@example.com",
        phone: "+39 3412221111"
      },
      {
        id: 55,
        firstName: "Martina",
        lastName: "Galli",
        idCode: "GLLMRT88K10H501R",
        email: "martina.galli@example.com",
        phone: "+39 3423334444"
      },
      {
        id: 56,
        firstName: "Federico",
        lastName: "Greco",
        idCode: "GRCFRC81L01H501C",
        email: "federico.greco@example.com",
        phone: "+39 3435557777"
      },
      {
        id: 57,
        firstName: "Sara",
        lastName: "Palmieri",
        idCode: "PLMSRA93M15H501D",
        email: "sara.palmieri@example.com",
        phone: "+39 3446668888"
      },
      {
        id: 58,
        firstName: "Andrea",
        lastName: "De Luca",
        idCode: "DLCDND82N20H501K",
        email: "andrea.deluca@example.com",
        phone: "+39 3459990000"
      },
      {
        id: 59,
        firstName: "Laura",
        lastName: "Costa",
        idCode: "CSTLRA90O11H501E",
        email: "laura.costa@example.com",
        phone: "+39 3461212121"
      },
      {
        id: 60,
        firstName: "Simone",
        lastName: "Ferrari",
        idCode: "FRRSNM89P22H501F",
        email: "simone.ferrari@example.com",
        phone: "+39 3472323232"
      }
    ]
  }
];

export default travels;