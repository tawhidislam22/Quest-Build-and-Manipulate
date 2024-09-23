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

        const div=document.createElement('div');
        div.classList.add('border','p-4','rounded-lg');
        let now=new Date();

        div.innerHTML=`
        <h4 class="text-lg font-semibold text-[#111111] mb-2">${noakhaliDonateAmountNumber} Taka is Donated for famine-2024 at noakhali, Bangladesh</h4>
        <p>${now}</p>
        `;
        document.getElementById('history-section').appendChild(div);
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

        const div=document.createElement('div');
        div.classList.add('border','p-4','rounded-lg');
        let now=new Date();

        div.innerHTML=`
        <h4 class="text-lg font-semibold text-[#111111] mb-2">${feniDonateAmountNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
        <p>${now}</p>
        `;
        document.getElementById('history-section').appendChild(div);
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

        const div=document.createElement('div');
        div.classList.add('border','p-4','rounded-lg');
        let now=new Date();

        div.innerHTML=`
        <h4 class="text-lg font-semibold text-[#111111] mb-2">${quotaDonateAmountNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
        <p>${now}</p>
        `;
        document.getElementById('history-section').appendChild(div);
    }
    else{
        alert('You have not enough money');
    }
})