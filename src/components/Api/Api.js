export default function Api() {
  fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWUxNDI0ZTk3ZDY2Nzg3YmY4OThjYjQ3MTk2MTE5MCIsInN1YiI6IjY1MWZlZDZlZWE4NGM3MDE0ZWZmMzZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jpSyJk-iw5zq111EFHic5OJ_V_xPlsos-S45_2T5b6M',
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
