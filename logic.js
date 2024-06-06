
function getPrayTimes(city) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    axios.get(`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?country=SA&city=${city}`)
        .then((response) => {

            let div = document.getElementById("pray-box");
            div.innerHTML = "";
            let times = response.data.data;

            let date = document.getElementById("date");

            for (let time of times) {


                if (parseInt(time.date.gregorian.day) === day) {
                    date.innerHTML = time.date.gregorian.date;

                    console.log(2);
                    div.innerHTML += `  <div class="pray">
                            <h1>الفجر</h1>
                    <p>${(time.timings.Fajr).substring(0, 6)}</p>
                    </div>

                    <div class="pray">
                    <h1>الشروق</h1>
                    <p>${(time.timings.Sunrise).substring(0, 6)}</p>
                    </div>

                    <div class="pray">
                    <h1>الظهر</h1>
                    <p>${(time.timings.Dhuhr).substring(0, 6)}</p>
                    </div>

                    <div class="pray">
                    <h1>العصر</h1>
                    <p>${(time.timings.Asr).substring(0, 6)}</p>
                    </div>

                    <div class="pray">
                    <h1>المغرب</h1>
                    <p>${(time.timings.Maghrib).substring(0, 6)}</p>
                    </div>

                    <div class="pray">
                    <h1>العشاء</h1>
                    <p>${(time.timings.Isha).substring(0, 6)}</p>
                    </div>

                    `
                }
            }

        }).catch((error) => {
            alert(error);
        });


}

getPrayTimes("Riyadh");

let select = document.getElementById("city-select");
select.addEventListener("change", (e) => {
    let city = e.target.value;
    getPrayTimes(city);
});

