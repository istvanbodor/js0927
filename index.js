const lista = [];

class Zene
{

    constructor(cim, hossz)
    {
        this.cim = cim;
        this.hossz = hossz;
    }

}

function hozzaad()
{

    let cim = document.getElementById('szoveg').value;
    let hossz =parseInt(document.getElementById('hossz').value);
    zene = new Zene(cim, hossz);
    lista.push(zene);
    osszead();
}

function osszead()
{
    let sum =0;
    for(e of lista)
    {
        sum+=e.hossz;
    }
    document.getElementById('kimenet').textContent = sum;
}



document.getElementById('gomb').addEventListener('click', hozzaad);