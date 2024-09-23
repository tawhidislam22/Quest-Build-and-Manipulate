document.getElementById('blog').addEventListener('click',function(){
    window.location.href='home.html';
});

// noakhali donate part

document.getElementById('noakhali-donate').
addEventListener('click',function(){
    let balanceNumber=getTextFieldById('balance');
    let noakhaliDonateNumber=getTextFieldById('noakhali-donate-balance');
    let noakhaliDonateAmountNumber=getInputFieldById('noakhali-donate-amount');
    if(balanceNumber>noakhaliDonateAmountNumber){
        noakhaliDonateNumber+=noakhaliDonateAmountNumber;
        document.getElementById('noakhali-donate-balance').innerText=noakhaliDonateNumber;
        balanceNumber-=noakhaliDonateAmountNumber;
        document.getElementById('balance').innerText=balanceNumber;
    }
    else{
        alert('You have not enough money');
    }
})