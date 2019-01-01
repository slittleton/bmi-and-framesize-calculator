
document.getElementById('results').style.display='none';
document.getElementById('errorMsg').style.display='none';

//Event Listeners
document.getElementById('bmi-form').addEventListener('submit', function(e){

  

  calculateResults();

  e.preventDefault();
});

document.getElementById('gender').addEventListener('change', getGender);


let gender = 'none'

function getGender(){
  gender = document.getElementById('gender').value;
}


function calculateResults (){

  const heightFt = document.getElementById('height-ft').value;
  const heightIn = document.getElementById('height-in').value;
  const weight = document.getElementById('weight').value;
  const wrist = document.getElementById('wrist').value;

  let result = document.getElementById('result');
  let resultFrame = document.getElementById('result-frame');

// Validate form submission
  if(heightFt === '' || 
     heightIn === '' || 
     weight === '' || 
     wrist === ''|| 
     gender === 'none'){
    displayErrorMsg()
  }else{

  //Compute BMI
  const metricWeight = (weight) * 0.45;
  const metricHeight = ((Number(heightFt) * 12) + Number(heightIn))*0.025;
  const rawBMI = (metricWeight/(Math.pow(metricHeight, 2))).toFixed(2);

  //Compute Frame Size
  let frameSize;

  const inchesHeight = ((Number(heightFt) *12) + Number(heightIn));

  if(gender==='female'){
    // short female height
    if (inchesHeight < 62){
      if(wrist < 5.5){
        frameSize='Small'
      }else if(wrist >= 5.51 &&  wrist <= 5.75){
        frameSize='Medium'
      }else if(wrist > 5.75){
        frameSize='Large'
      }
      // medium female height
    } else if (inchesHeight >= 62 && inchesHeight <= 65){
      if(wrist < 6){
        frameSize='Small'
      }else if(wrist >= 6.01 && wrist <= 6.25){
        frameSize='Medium'
      }else if(wrist > 6.25){
        frameSize='Large'
      }
      //tall female height
    }else if (inchesHeight > 65){
      if(wrist< 6.25){
        frameSize='Small'
      }else if(wrist >= 6.251 && wrist <= 6.5){
        frameSize='Medium'
      }else if(wrist > 6.5){
        frameSize='Large'
      }

    }
  }else if (gender==='male'){
      if(wrist <= 6.49){
        frameSize='Small';
      }else if(wrist >= 6.5 && wrist <= 7.5){
        frameSize='Medium'
      }else if(wrist >= 7.6){
        frameSize='Large'
      }
    }


    result.value = rawBMI;
    resultFrame.value = frameSize


    // Show results
    document.getElementById('results').style.display='flex';
    document.getElementById('results').style.justifyContent= 'center';

  }

}

function displayErrorMsg(){

  document.getElementById('errorMsg').style.display='flex';
  document.getElementById('errorMsg').style.justifyContent= 'center';
  document.getElementById('errorMsg').style.color= 'orange';

  setTimeout(clearErrorMsg, 3000);
}

function clearErrorMsg(){
  document.getElementById('errorMsg').style.display='none';
}
