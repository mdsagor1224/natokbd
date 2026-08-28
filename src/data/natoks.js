/**
 * ============================================================
 *  NATOKBD — CONTENT FILE
 * ============================================================
 * This is the ONLY file you need to edit to publish a new Natok.
 *
 * HOW TO ADD A NEW NATOK (see README.md for full walkthrough):
 *   1. Add your thumbnail to  public/images/your-file.webp
 *   2. Copy any object below and paste it at the top of the array
 *   3. Change: id, title, slug, thumbnail, videoUrl, category, date, description
 *   4. Save, then: git add . && git commit -m "Add new natok" && git push
 *
 * FIELD GUIDE:
 *   id           - unique number, increase by 1 for every new post
 *   title        - Natok title (Bangla or English)
 *   slug         - unique URL-safe id, e.g. "my-new-natok" -> /natok/my-new-natok
 *   thumbnail    - path inside /public, e.g. "/images/natok-10.webp"
 *   videoUrl     - YouTube EMBED url, format: https://www.youtube.com/embed/VIDEO_ID
 *   category     - one of: Romantic, Comedy, Family, Drama, Short Film, Trending
 *   date         - "YYYY-MM-DD", used for sorting + display
 *   description  - 1-3 sentences shown on the details page
 *   featured     - optional, true = shows in the homepage Featured section
 *   trending     - optional, true = shows in the homepage Trending row
 * ============================================================
 */

export const categories = [
  'Romantic',
  'Comedy',
  'Family',
  'Drama',
  'Short Film',
  'Trending'
]

export const natoks = [
  {
    id: 9,
    title: 'Boro Chele বড় ছেলে | Ziaul Faruq Apurba | Mehazabien | Mizanur Rahman Aryan Bangla Natok',
    slug: 'bhalobashar-notun-golpo',
    thumbnail: '/images/natok-1.webp',
    videoUrl: 'https://www.youtube.com/embed/eb6mCg1dB0Y',
    category: 'Romantic',
    date: '2026-08-28',
    featured: true,
    trending: true
  },
  {
    id: 8,
    title: 'মন মায়াতে | Natok Bari | Full Natok | Mon Mayate | Yash Rohan | Aisha khan | New Natok 2026',
    slug: 'Mon-Mayate',
    thumbnail: '/images/natok-2.webp',
    videoUrl: 'https://www.youtube.com/embed/AkNG9w1qyOU',
    category: 'Comedy',
    date: '2026-08-25',
    trending: true
  },
  {
    id: 7,
    title: 'Moner Moto Mon | মনের মতো মন | Full Natok | Yash Rohan | Niha | Imraul Rafat | New Bangla Natok 2026',
    slug: 'Moner-Moto-Mon',
    thumbnail: '/images/natok-3.webp',
    videoUrl: 'https://www.youtube.com/embed/jqjewupRS8w',
    category: 'Family',
    date: '2026-08-22',
  },
  {
    id: 6,
    title: 'Sukher Golpo | Full Drama | Jovan | Keya Payel | Eid Natok',
    slug: 'Sukher-Golpo',
    thumbnail: '/images/natok-4.webp',
    videoUrl: 'https://www.youtube.com/embed/37p6_DJivt4',
    category: 'Drama',
    date: '2026-08-18',
    trending: true
  },
  {
    id: 5,
    title: 'শেষ বিকেলের আলো',
    slug: 'shesh-bikeler-alo',
    thumbnail: '/images/natok-5.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Short Film',
    date: '2026-08-14',
    description: 'একটি ছোট গ্রামের প্রেক্ষাপটে তৈরি আবেগময় শর্ট ফিল্ম, যা মাত্র কয়েক মিনিটে দর্শকের মন ছুঁয়ে যায়।'
  },
  {
    id: 4,
    title: 'রঙিন স্বপ্নের ফেরিওয়ালা',
    slug: 'rongin-shopner-feriwala',
    thumbnail: '/images/natok-6.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Romantic',
    date: '2026-08-10',
    description: 'ছোট শহরের এক তরুণের বড় স্বপ্ন আর তার জীবনে আসা ভালোবাসার গল্প নিয়ে এই রোমান্টিক নাটক।'
  },
  {
    id: 3,
    title: 'হাসি-কান্নার সংসার',
    slug: 'hashi-kannar-shongshar',
    thumbnail: '/images/natok-7.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Comedy',
    date: '2026-08-06',
    description: 'দৈনন্দিন সাংসারিক জীবনের মজার সব ঘটনা নিয়ে দর্শকপ্রিয় একটি পারিবারিক কমেডি নাটক।'
  },
  {
    id: 2,
    title: 'আপনজন',
    slug: 'aponjon',
    thumbnail: '/images/natok-8.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Family',
    date: '2026-08-02',
    description: 'রক্তের সম্পর্কের বাইরেও যে আপন মানুষ তৈরি হয়, তারই এক আবেগঘন গল্প নিয়ে এই নাটক।'
  },
  {
    id: 1,
    title: 'দ্বিধা',
    slug: 'dhidha',
    thumbnail: '/images/natok-9.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Drama',
    date: '2026-07-28',
    description: 'সিদ্ধান্তহীনতার দ্বন্দ্বে আটকে থাকা এক তরুণীর জীবনের গল্প, যা প্রতিটি দর্শকের মনে প্রশ্ন তুলে দেবে।'
  }
]
