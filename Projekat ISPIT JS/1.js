'use strict';


let dugme=document.querySelector('.dugme1');


let modal=document.querySelector('.modal1');


let zatvarasemodel=document.querySelector('.zatvori')



dugme.addEventListener('click',function() {
    modal.classList.add('aktivaciamodala');
});

zatvarasemodel.addEventListener('click',function() {
    modal.classList.remove('aktivaciamodala');
});






function zatvoriPosalji()
{
    let form = document.forma;
    let ime= form.polje1.value;
    let prezime= form.polje2.value;
    let email= form.polje4.value;

    try {
        if (ime == "") throw "Ime nije uneto";
        else if (prezime == "") throw "Prezime nije uneto";
        else if (email == "") throw "Email nije unet";
        else if (!proveraEmaila(email)) throw "Email nepravilno unet";
    }
    catch(greska){
        document.querySelector('#ispisGreske').innerHTML = greska;
    }

    alert("Vas profil je sačuvan");

    document.cookie = "name="+ime+"; prezime="+prezime+"; email="+email;
};


function proveraEmaila(email) {
    if (email.indexOf('@') > -1) return true;
    else return false;
}


function Kolacici()
{
    if(document.cookie.length!=0)
    {
        let kolacici=document.cookie.split(";");
        document.getElementById('ispisizpolja').innerHTML=kolacici;
    }

}







let brSlike = 1;

let vreme = 2000;



 function promeniSliku()
 {
    
     let a = document.getElementById('slikice').src= "slike/slika" + brSlike + ".jpg";
     brSlike++;
     if (brSlike == 8) brSlike = 1;
    
     setTimeout('promeniSliku();',vreme);
 }
 
 
 function tajmer()
 {
     let d=new Date();
     let t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
     document.getElementById("p1").innerHTML=t;
     setTimeout('tajmer();',1000);
 }
 


 let dugme22=document.querySelector('.dugme2');
 
 let mdl22=document.querySelector('.modal22');

 
 dugme22.addEventListener('click',function()
 {
    mdl22.classList.add('aktivacija22');

 });

 let zatvori11=document.querySelector('.zatvori1');

 zatvori11.addEventListener('click',function()
 {
    mdl22.classList.remove('aktivacija22');
   
});

let rostilj=[
    {
        slika:"jsonSlike/cevapi.jpg",
        naziv:"Ćevapi sa pomfitom",
        cena:"800 RSD"
    },
    {
        slika:"jsonSlike/kobasica.jpg",
        naziv:"Roštilj kobasica",
        cena:"700 RSD"
    },
    {
        slika:"jsonSlike/pljeskavica.jpg",
        naziv:"Pljeskavica",
        cena:"400 RSD"
    }
]

let kuvanaJela=[
    {
       slika:"jsonSlike/pasulj.jpg",
       naziv:"Kuvani pasulj",
       cena:"400 RSD"
    },
    {
        slika:"jsonSlike/kupus.jpg",
        naziv:"Kuvani kupus",
        cena:"350 RSD"
     },
     {
        slika:"jsonSlike/paprikas.jpg",
        naziv:"Kuvani paprikas",
        cena:"380 RSD"
     }
]
let pecenja=[
    {
        slika:"jsonSlike/prasetina.jpg",
        naziv:"Praseće pečenje",
        cena:"1200 RSD"
     
    },
    {
        slika:"jsonSlike/jagnjetina.jpg",
        naziv:"Jagenjeće pečenje",
        cena:"1700 RSD"
    },
    {
        slika:"jsonSlike/piletina.jpg",
        naziv:"Pečena piletina",
        cena:"560 RSD"
    }
]
let desert=[
    {
        slika:"jsonSlike/krempita.jpg",
        naziv:"Krempita",
        cena:"199 RSD"
    },
    {
        slika:"jsonSlike/sladoled.jpg",
        naziv:"Domaći sladoled",
        cena:"300 RSD"
    },
    {
        slika:"jsonSlike/torta.jpg",
        naziv:"Torta ",
        cena:"299 RSD"
    }
]
function DodajRostilj()
{
    document.getElementById('slika1').src=rostilj[0].slika
    document.getElementById('opis1').innerHTML=rostilj[0].naziv
    document.getElementById('cena1').innerHTML=rostilj[0].cena

    document.getElementById('slika2').src=rostilj[1].slika
    document.getElementById('opis2').innerHTML=rostilj[1].naziv
    document.getElementById('cena2').innerHTML=rostilj[1].cena

    document.getElementById('slika3').src=rostilj[2].slika
    document.getElementById('opis3').innerHTML=rostilj[2].naziv
    document.getElementById('cena3').innerHTML=rostilj[2].cena

}
function DodajKuvana()
{
    document.getElementById('slika1').src=kuvanaJela[0].slika
    document.getElementById('opis1').innerHTML=kuvanaJela[0].naziv
    document.getElementById('cena1').innerHTML=kuvanaJela[0].cena

    document.getElementById('slika2').src=kuvanaJela[1].slika
    document.getElementById('opis2').innerHTML=kuvanaJela[1].naziv
    document.getElementById('cena2').innerHTML=kuvanaJela[1].cena

    document.getElementById('slika3').src=kuvanaJela[2].slika
    document.getElementById('opis3').innerHTML=kuvanaJela[2].naziv
    document.getElementById('cena3').innerHTML=kuvanaJela[2].cena


}
function DodajPecenja()
{
    document.getElementById('slika1').src=pecenja[0].slika
    document.getElementById('opis1').innerHTML=pecenja[0].naziv
    document.getElementById('cena1').innerHTML=pecenja[0].cena

    document.getElementById('slika2').src=pecenja[1].slika
    document.getElementById('opis2').innerHTML=pecenja[1].naziv
    document.getElementById('cena2').innerHTML=pecenja[1].cena

    document.getElementById('slika3').src=pecenja[2].slika
    document.getElementById('opis3').innerHTML=pecenja[2].naziv
    document.getElementById('cena3').innerHTML=pecenja[2].cena

}
function DodajDezerte()
{
    document.getElementById('slika1').src=desert[0].slika
    document.getElementById('opis1').innerHTML=desert[0].naziv
    document.getElementById('cena1').innerHTML=desert[0].cena

    document.getElementById('slika2').src=desert[1].slika
    document.getElementById('opis2').innerHTML=desert[1].naziv
    document.getElementById('cena2').innerHTML=desert[1].cena

    document.getElementById('slika3').src=desert[2].slika
    document.getElementById('opis3').innerHTML=desert[2].naziv
    document.getElementById('cena3').innerHTML=desert[2].cena
}


let dugmeProizvoda=document.querySelector('.dugmeP');

let modalProizvoda=document.querySelector('.kontejnerProizvoda');
function prikazi()
{
    modalProizvoda.classList.add('aktivirajProizvode');
}



let dugme33=document.querySelector('.dugme3');
let mdl=document.querySelector('.modalOnama1');
let zatvorii3=document.querySelector('.zatvori3');

dugme33.addEventListener('click',function()
{
    mdl.classList.add('aktiviraj');
    IspisTeksta();
});
zatvorii3.addEventListener('click',function(){
    mdl.classList.remove('aktiviraj');
});

let i=0;
function IspisTeksta()
{
    
    let tekst="Restoran Zveda čuva tradiciju pripreme jela po narodnim recepturama, naša hrana je vrhunskog kvaliteta i ukusa. Otkrijte zašto svake godine više stotina hiljada ljudi posećuje naš ugostiteljski objekat. U predivnom ambijentu našeg lokala sa baštom, možete provesti neke od najznačajnijih trenutaka sa svojim prijateljima i porodicom. Za nezaboravno iskustvo, Vaš restoran Zvezda.";
   
    if (i < tekst.length) {
        document.getElementById("onama").innerHTML+=tekst.charAt(i);
        i++;
        setTimeout(IspisTeksta,40);
       
      }
          
    }

function Zamuti()
{
    let b=document.querySelector('.slike');
    b.classList.add('zamuti');
}
function Odmuti()
{
    let b=document.querySelector('.slike');
    b.classList.remove('zamuti');
}

let dugmeK=document.querySelector('.dugmeK');
let modalKontakt=document.querySelector('.modalKontakt');
let zatvoriKontakt=document.querySelector('.zatvori4');
dugmeK.addEventListener('click',function(){
modalKontakt.classList.add('aktivirajKontakt');
});
zatvoriKontakt.addEventListener('click',function()
{
    modalKontakt.classList.remove('aktivirajKontakt');
});
function ProveriBroj()
{
    let br,poruka;
    br=document.getElementById('broj').value;
    poruka=document.getElementById('poruka');
    poruka.innerHTML="";
    try
    {
        if(br=="") throw " je prazno!";
        if(isNaN(br)) throw " ne sme sadržati slova!";
        else{
            poruka.style.color="green";
        poruka.innerHTML="Postovani, uskoro ćemo Vas kontaktirati."
        }

    }
    catch(err) {
        poruka.innerHTML = "Polje" + err;
      }
      
}




window.addEventListener('keydown', function(e) {
    if (e.code == "Escape") {
  
        modal.classList.remove('aktivaciamodala');
        modalKontakt.classList.remove('aktivirajKontakt');
        mdl.classList.remove('aktiviraj');
        modalProizvoda.classList.remove('aktivirajProizvode');
        mdl22.classList.remove('aktivacija22');
    }    
})



function Kviz()
{
    let pitanja=[
    {
        pitanje:"Koje je najpoznatije italijansko jelo?\na) Suši\nb) Pizza\n(unesite 0 za izlaz iz kviza)",
        odgovor:"b"
    },
    {
        pitanje:"Šta ubrzava ključanje vode?\na) skidanje poklopca\nb) dodavanje vode\n(unesite 0 za izlaz iz kviza)",
        odgovor:"a"
    },
    {
        pitanje:"Šta od navedenog ne biste pekli?\na) kruh\nb) panna cottu\n(unesite 0 za izlaz iz kviza)",
        odgovor:"b"
    },
    {
        pitanje:"Koji je najzdraviji način kuvanja testenine?\na) tjestenina al dente\nb) isprana testenina\n(unesite 0 za izlaz iz kviza)",
        odgovor:"a"
    }
    ];
    let tacni=0;
    for(let a=0;a<pitanja.length;a++)
    {
        let odg=window.prompt(pitanja[a].pitanje);
        if(odg==pitanja[a].odgovor)
        tacni++;
        else if(odg==0) return false;
        else
        alert("Vas odgovor je netacan!");
    }
    alert("Imali ste "+tacni+" tacnih odgovora");
        
}