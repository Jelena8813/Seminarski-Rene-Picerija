function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function Sladjer(){

  let slika1="slajder-slike/slika1.jpg";
  let slika2="slajder-slike/slika2.jpg";
  let slika3="slajder-slike/slika3.jpg";
  let slika4="slajder-slike/slika4.jpg";

  const slikaPlaceHolder=document.getElementById("slajd");

  const brojSlika=4;
  let indexPocetak=1;
  let indexTrenutan=1;
  let indexKraj=4;

  while(1){

      if(indexTrenutan>indexKraj)
          indexTrenutan=indexPocetak;

      switch(indexTrenutan){
          case 1:
              slikaPlaceHolder.src=slika1;
              indexTrenutan++;
              break;

          case 2:
              slikaPlaceHolder.src=slika2;
              indexTrenutan++;
              break;

          case 3:
              slikaPlaceHolder.src=slika3;
              indexTrenutan++;
              break;

          case 4:
              slikaPlaceHolder.src=slika4;
              indexTrenutan=indexPocetak;
              break;

      }

      await sleep(4000);
  }

}

Sladjer();