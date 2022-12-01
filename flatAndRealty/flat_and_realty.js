const body = document.getElementById("realtyView");
const path = ["buisnesClass/buisnes", "flat/houseF", "penthouse/penthouse", "townhouse/townhouse", "apartaments/apartament"];
const nameRealty = ["Небоскрёб",
    "Саншайново",
    "Миднайт",
    "Мот",
    "Трактирщик",
    "Утренняя звезда",
    "Мораль",
    "Благ",
    "Эдем",
    "Пандора",
    "Каскад",
    "Мир",
    "Лояльность",
    "Мироздание",
    "Творчества",
    "Колейдоскоп"];
const develope = ["Санрайз",
    "СкайСлайсер",
    "Меломан",
    "ПИК",
    "Зелёный мир",
    "Преисполнение",
    "Флюид",
    "Отладочная",
    "Денница"];
const address = ["Улица льнинова",
"Улица сногшибательская",
"Улица уморительного",
"Улица структурная",
"Улица кривоухова",
"Улица трактова",
"Улица гранёного",
"Улица джейсон",
"Улица меркантильного",
"Улица нравственного",
"Улица вальяжная",
"Улица нормативности",
"Улица круасаново"];

function generateRealty() {
    const randRealty = path[Math.floor(Math.random() * path.length)];
    const randImage = Math.floor(Math.random() * (9 - 1) + 1);
    const randName = nameRealty[Math.floor(Math.random() * nameRealty.length)];
    const randDev = develope[Math.floor(Math.random() * develope.length)]; 
    const randPrice = `От ${Math.floor(Math.random() *20 +20)} млн. до ${Math.floor(Math.random()* 60 +40)} млн. руб.`;
    const randAddress = address[Math.floor(Math.random() * address.length)];
    const realty = document.createElement('div');
    console.log(randRealty);
    realty.innerHTML = `<div class="col" style="padding: 12px;"><a href="../viewRealty/view_realty.html?image=${randImage}&type=${randRealty}&name=${randName}&develope=${randDev}&price=${randPrice}&address=${randAddress}" class="link-dark" style="text-decoration: none;"><div class="card" ><img src="../assets/images/${randRealty}${randImage}.jpg" alt="" class="card-img-top" id="cardWidget"><div class="card-body" ><div class="card-subtitle" style="font-weight: bold;">ЖК ${randName}</div><div class="card-text">${randPrice}</div><div class="card-text">${randAddress}</div><br></div><div class="card-footer "> Застройщик ${randDev}</div></div></a></div>`;
    return realty;
}


for (let i = 0; i < 100; i++) {
    body.append(generateRealty());
}

