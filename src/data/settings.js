/**
 * Site-wide settings / content.
 * CMS-ready: replace with API calls when you add a headless CMS.
 */

export const BOOK_URL = 'https://app.acuityscheduling.com/schedule/cd20d4b9';

export const locations = [
  {
    id: 'majorstuen',
    name: 'Majorstuen',
    address: 'Neuberggata 10A, 0367 Oslo',
    phone: '90 20 10 70',
    timmaUrl: 'https://bestill.timma.no/favn',
    mapsUrl: 'https://maps.google.com/?q=Neuberggata+10A+Oslo',
    image: '/images/majorstuen.jpg',
    tag: 'Lokasjon 01 — Majorstuen',
    hours: 'Man–fre: 10–19 · Lør: 10–19 · Søn: 14–18',
  },
  {
    id: 'aker-brygge',
    name: 'Aker Brygge',
    address: 'Bryggegata 5, 0250 Oslo',
    phone: null,
    timmaUrl: 'https://bestill.timma.no/favn',
    mapsUrl: 'https://maps.google.com/?q=Bryggegata+5+Oslo',
    image: '/images/aker-brygge.jpg',
    tag: 'Lokasjon 02 — Aker Brygge',
    hours: 'Man–fre: 10–19 · Lør: 10–19 · Søn: 14–18',
  },
];

export const openingHours = [
  { day: { no: 'Mandag – fredag', en: 'Monday – Friday' }, time: '10:00–19:00' },
  { day: { no: 'Lørdag',         en: 'Saturday'          }, time: '10:00–19:00' },
  { day: { no: 'Søndag',         en: 'Sunday'            }, time: '14:00–18:00' },
  { day: { no: 'Lille julaften', en: 'Christmas Eve eve' }, time: '10:00–18:00' },
  { day: { no: 'Julaften',       en: 'Christmas Eve'     }, time: '10:00–13:00' },
  { day: { no: 'Romjul',         en: 'Between Christmas' }, time: '10:00–18:00' },
  { day: { no: 'Nyttårsaften',   en: "New Year's Eve"    }, time: '10:00–15:00' },
];
