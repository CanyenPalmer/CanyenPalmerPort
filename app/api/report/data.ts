export const SUMMARY = {
  title: "Monthly Momentum Report",
  subtitle: "A snapshot of growth, community, and experiments",
  updated_at: new Date().toISOString(),
  hero_stats: [
    { label: "Active Learners", value: 13287 },
    { label: "Lessons Watched", value: 48219 },
    { label: "Avg. Session (min)", value: 18.6 },
  ],
};

export const METRICS = [
  { label: "Conversion Rate", value: 3.9, delta: +0.6 },
  { label: "NPS", value: 62, delta: +4 },
  { label: "Refund Rate", value: 0.8, delta: -0.2 },
  { label: "Community Posts", value: 948, delta: +12 },
];

export const LOCATIONS = [
  { name: "San Francisco, US", lat: 37.7749, lng: -122.4194, size: 1.2 },
  { name: "New York, US", lat: 40.7128, lng: -74.006, size: 1.1 },
  { name: "London, UK", lat: 51.5074, lng: -0.1278, size: 1.3 },
  { name: "São Paulo, BR", lat: -23.5505, lng: -46.6333, size: 1.0 },
  { name: "Tokyo, JP", lat: 35.6762, lng: 139.6503, size: 1.4 },
];

export const SECTIONS = [
  {
    id: "intro",
    kind: "hero",
    heading: "Momentum, visualized.",
    content:
      "Scroll to explore what changed this month—where learners joined, what they watched, and which experiments shipped.",
    media: { type: "video", src: "/media/intro-placeholder.mp4" },
  },
  {
    id: "globe",
    kind: "globe",
    heading: "Learners around the world",
    content: "Each dot marks a city with active sessions in the last 30 days.",
    media: null,
  },
  {
    id: "gallery",
    kind: "gallery",
    heading: "Selected experiments",
    content: "A quick peek at a few UI motion studies and micro-interactions.",
    media: {
      type: "images",
      items: ["/media/exp-1.jpg", "/media/exp-2.jpg", "/media/exp-3.jpg"],
    },
  },
];

