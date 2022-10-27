const nationalize = async () => {
  let inputbx = document.getElementById("inputbox").value;
  try {
    const nationalizedata = await fetch(
      `https://api.nationalize.io/?name=${inputbx}`
    );
    const data = await nationalizedata.json();
    let frst = `1. First country - country-id : ${data.country[0].country_id} & probability : ${data.country[0].probability} <br/> <br/> 2. Second country - country-id : ${data.country[1].country_id} & probability : ${data.country[1].probability}
    `;
    const h2tag = document.getElementById("h2tag");
    h2tag.innerHTML = frst;

    // console.log(data);
    // console.log(data.country[0]);
    // console.log(data.country[1]);
  } catch (err) {
    console.log(err);
  }
};
nationalize();

function clickme() {
  var btn = document.querySelector("button");
  var heading = document.querySelector(".head");
  btn.addEventListener("click", function () {
    heading.classList.toggle("display");
  });
}
