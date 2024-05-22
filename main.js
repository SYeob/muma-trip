var link = [
  {
    id: 0,
    iframe: "https://www.youtube.com/embed/rCcYE8P9o5A",
    title: "제주도",
    date: "2019-02",
  },
  {
    id: 1,
    iframe: "https://www.youtube.com/embed/ZfOArLqJ5Cs",
    title: "속초",
    date: "2019-08",
  },
  {
    id: 2,
    iframe: "https://www.youtube.com/embed/3Kz8skJc13I",
    title: "스키장",
    date: "2020-02",
  },
  {
    id: 3,
    iframe: "https://www.youtube.com/embed/u6hqBmWX2PU",
    title: "속초2",
    date: "2021-04",
  },
  {
    id: 4,
    iframe: "https://www.youtube.com/embed/xAw3tTw4MNQ",
    title: "부산",
    date: "2021-08",
  },
  {
    id: 5,
    iframe: "https://www.youtube.com/embed/7WA5w3pyK7c",
    title: "글램핑",
    date: "2021-10",
  },
  {
    id: 6,
    iframe: "https://www.youtube.com/embed/1zq9UF7s72c",
    title: "스키장2",
    date: "2021-12",
  },
  {
    id: 7,
    iframe: "https://www.youtube.com/embed/Fei2LO3L6FA",
    title: "제부도",
    date: "2022-05",
  },
  {
    id: 8,
    iframe: "https://www.youtube.com/embed/vIR5TdWuy7M",
    title: "홍천",
    date: "2022-08",
  },
  {
    id: 9,
    iframe: "https://www.youtube.com/embed/gngMde0fT1M",
    title: "가평",
    date: "2022-10",
  },
  {
    id: 10,
    iframe: "https://youtu.be/IyyOZdIWX-I?si=Cwje5zfA1igewxan",
    title: "가평2",
    date: "2024-05",
  },
];

link.forEach((a, i) => {
  var templete = `<div class="col-lg-9" id="${link[i].id}">
            <iframe src="${link[i].iframe}" title="${link[i].title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body">
                <h5 class="card-title">${link[i].title}</h5>
                <p class="card-text">${link[i].date}</p>
                <a href="${link[i].iframe}" class="btn btn-primary">Go to Youtube</a>
            </div>`;
  $(".row").append(templete);
});
