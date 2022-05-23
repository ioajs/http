export default {
  import: {
    "http.js": {
      level: 100
    },
  },
  export: {
    $import: {
      "middleware": {
        "level": 30
      },
      "controller": {
        "level": 50
      }
    }
  }
}
