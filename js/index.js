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
//feni donate part
document.getElementById('feni-donate').
addEventListener('click',function(){
    let balanceNumber=getTextFieldById('balance');
    let feniDonateNumber=getTextFieldById('feni-donate-balance');
    let feniDonateAmountNumber=getInputFieldById('feni-donate-amount');
    if(balanceNumber>feniDonateAmountNumber){
        feniDonateNumber+=feniDonateAmountNumber;
        document.getElementById('feni-donate-balance').innerText=feniDonateNumber;
        balanceNumber-=feniDonateAmountNumber;
        document.getElementById('balance').innerText=balanceNumber;
    }
    else{
        alert('You have not enough money');
    }
})
//quota donate part
document.getElementById('quota-donate').
addEventListener('click',function(){
    let balanceNumber=getTextFieldById('balance');
    let quotaDonateNumber=getTextFieldById('quota-donate-balance');
    let quotaDonateAmountNumber=getInputFieldById('quota-donate-amount');
    if(balanceNumber>quotaDonateAmountNumber){
        quotaDonateNumber+=quotaDonateAmountNumber;
        document.getElementById('quota-donate-balance').innerText=quotaDonateNumber;
        balanceNumber-=quotaDonateAmountNumber;
        document.getElementById('balance').innerText=balanceNumber;
    }
    else{
        alert('You have not enough money');
    }
})