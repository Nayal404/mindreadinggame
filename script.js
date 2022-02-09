function read_mind(){
    let final_answer = document.getElementById('finalanswer').value;
    let readmind = (final_answer/10|0)-5;
    // console.log(readmind);
    document.getElementById('useramount').innerHTML = "Oh! was this your number you were been thinking of?? <br>->"+readmind;
}
