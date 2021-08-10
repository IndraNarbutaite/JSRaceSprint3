// Pražioje sukurti 2 input fieldus(automobilio pavadinimas ir greitis), įvedus informaciją ir paspaudus pridėti - sudėti duomenis į lentelę arba paprastą div'ą(kiekvieną kart paspaudus prisideda vis nauji duomenys, seni neišsitrina).
// Žemiau sukurti input fieldą laikas, ir paspaudus mygtuką lenktyniauti, palyginti automobilių nuvažiuotą atstumą lentelėje).
// Automobilių sukūrimui panaudoti funkciją - konstruktorių.
// ** sudedant duomenis į lentelę, paryškinti didžiausią atstumą nuvažiavusį automobilį.

// Nuotraukuoje pavizdys kaip galėtų atrodyti, kad lengviau įsivaizduoti.
//  pasidarom constructorių.
function Auto (p, g) {
    this.pavadinimas = p;
    this.greitis = g;
}
// susikuriam tuščią masyvą pirmem duomenim sudėti ir poto atvaizduoti.
var masyvas = []
// Psiemam visą formą
var forma = document.getElementById("forma");
var forma2 = document.getElementById("forma2");
// var pavadinimas = document.getElementById("pavadinimas");
// var greitis = document.getElementById("greitis");
var autoInfo = document.getElementById("autoInfo");
forma.addEventListener("submit", function (e) {
    //preventinam formos standartini naudojima
    e.preventDefault()
    // Pasiemam duomenis is inputu
    var pavadinimas = document.getElementById("pavadinimas").value;
    var greitis = document.getElementById("greitis").value;
    // Sukuriam automobilio objekta, pagal Auto konstruktoriu.(panaudodami duomenis is auksciau)
    var automob = new Auto (pavadinimas, greitis)
    // sudedam automobilius i masyva
    masyvas.push(automob);
    // sukuriam pavadinimo div'a
    var pavDiv = document.createElement("div");
    // idedam teksta i pavadinimo div'a
    pavDiv.innerHTML = pavadinimas;
    // sukuriam greicio div'a
    var greitDiv = document.createElement("div");
    // idedam teksta i greicio div'a
    greitDiv.innerHTML = greitis;
    // susikuriam auto row div'a
    var autoRow = document.createElement("div");
     // uzdedam klase auto row div'ui, kad galetume ji pastiliuot
    autoRow.classList.add("auto-row");
    // sudedam pavadinima ir greiti i auto row diva
    autoRow.appendChild(pavDiv);
    autoRow.appendChild(greitDiv);
     // sudedam pilna auto row div'a i autoinfo div'a
    autoInfo.appendChild(autoRow);

    
} )
 // antra forma.
 //pasiimam kur talpinsim rezultatus div'a.
var rezultatai = document.getElementById("rezultatai");
forma2.addEventListener("submit", function (e) {
    //preventinam standartini formos naudojima.
    e.preventDefault()
    //pasiimam ivesta laika
    var laikas = document.getElementById("laikas").value;
    // susikuriam tuscia masyva kur talpinsim nuvaziuota atstuma visu masinu.
    var atstumai = []
    // Suskaiciuojam atstumus naudodami cikla. Kuris pritaikys kiekvieno elemento greiti * musu irasyto laiko.
    for (let i = 0; i < masyvas.length; i++) {
        var atstumas = parseInt(laikas) * parseInt(masyvas[i].greitis);
        atstumai.push(atstumas);

    }
// Randam didziausia reiksme naudodamiesi 

var max = Math.max(...atstumai);
for (let j = 0; j < atstumai.length; j++) {
    //kuriam nauja lentele rezultatam naudodamiesi situo ciklu.
    var pavDiv = document.createElement("div");
    pavDiv.innerHTML = masyvas[j].pavadinimas;
    var atstumDiv = document.createElement("div");
    atstumDiv.innerHTML = atstumai[j];
    var autoRow = document.createElement("div");
    // Patikrinam kurie atstumai sutampta su didziausia reiksme
    if (atstumai[j] == max ) {
        // Sita klase kuriam del stiliavimo
        autoRow.classList.add("greiciausias");
        
    }
    // Sita klase kuriam del stiliavimo
    autoRow.classList.add("auto-row")
     // sudedam pavadinima ir atstuma i auto row diva
    autoRow.appendChild(pavDiv);
    autoRow.appendChild(atstumDiv);
    rezultatai.appendChild(autoRow);
    //aciu Andriui uz komentarus.
}
})




    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
   
    
    
    
    
    
    
    
    
        // Patikrinam kurie atstumai sutampta su didziausia reiksme
        
            // Sita klase kuriam del stiliavimo
            
        // sudedam pavadinima ir greiti i auto row diva
     