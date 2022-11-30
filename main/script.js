const body = document.getElementById("realtyView");


function createRealty(){
   const realty = document.createElement('div');
    realty.innerHTML = '<div class="col gx-2 gy-2 "><a href="../viewRealty/view_realty.html" class="link-dark" style="text-decoration: none;"><div class="card"><img src="../assets/images/buisnesClass/buisnes2.jpg" alt="" class="card-img-top"><div class="card-body"><div class="card-subtitle" style="font-weight: bold;">ЖК Мир</div><div class="card-text">От 20 млн. до 60 млн. руб.</div><div class="card-text">Улица дмитриевского</div><br></div><div class="card-footer "> Застройщик ПИК</div></div></a></div>';
    return realty;
}

for(let i=0; i<100; i++){
    body.append(createRealty());
}
