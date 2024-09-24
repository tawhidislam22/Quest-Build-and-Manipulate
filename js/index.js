document.getElementById('blog').addEventListener('click',function(){
    window.location.href='home.html';
});


// noakhali donate part

document.getElementById('noakhali-donate').
addEventListener('click',function(event){
    let balanceNumber=getTextFieldById('balance');
    let noakhaliDonateNumber=getTextFieldById('noakhali-donate-balance');
    let noakhaliDonateAmountNumber=getInputFieldById('noakhali-donate-amount');
    if(isNaN(noakhaliDonateAmountNumber) || noakhaliDonateAmountNumber<0){
        alert('Invalid Donation Number');
        document.getElementById('noakhali-donate-amount').value='';
        return;
    }
    if(balanceNumber>noakhaliDonateAmountNumber){
        noakhaliDonateNumber+=noakhaliDonateAmountNumber;
        document.getElementById('noakhali-donate-balance').innerText=noakhaliDonateNumber;
        balanceNumber-=noakhaliDonateAmountNumber;
        document.getElementById('balance').innerText=balanceNumber;

        const div=document.createElement('div');
        div.classList.add('border','p-4','rounded-lg');
        let now=new Date();

        div.innerHTML=`
        <h4 class="text-lg font-semibold text-[#111111] mb-2">${noakhaliDonateAmountNumber} Taka is Donated for Flood at noakhali, Bangladesh</h4>
        <p>${now}</p>
        `;
        document.getElementById('history-section').appendChild(div);
        my_modal_1.showModal();
        
    }
    else{
        alert('You have not enough money');
    }
    document.getElementById('noakhali-donate-amount').value='';
})
//feni donate part
document.getElementById('feni-donate').
addEventListener('click',function(){
    let balanceNumber=getTextFieldById('balance');
    let feniDonateNumber=getTextFieldById('feni-donate-balance');
    let feniDonateAmountNumber=getInputFieldById('feni-donate-amount');
    if(isNaN(feniDonateAmountNumber) || feniDonateAmountNumber<0){
        alert('Invalid Donation Number');
        document.getElementById('feni-donate-amount').value='';
        return;
    }
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
        my_modal_1.showModal();
    }
    else{
        alert('You have not enough money');
    }
    document.getElementById('noakhali-donate-amount').value='';
})
//quota donate part
document.getElementById('quota-donate').
addEventListener('click',function(){
    let balanceNumber=getTextFieldById('balance');
    let quotaDonateNumber=getTextFieldById('quota-donate-balance');
    let quotaDonateAmountNumber=getInputFieldById('quota-donate-amount');
    if(isNaN(quotaDonateAmountNumber) || quotaDonateAmountNumber<0){
        alert('Invalid Donation Number');
        document.getElementById('quota-donate-amount').value='';
        return;
    }
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
        my_modal_1.showModal();

    }
    else{
        alert('You have not enough money');
    }
     document.getElementById('noakhali-donate-amount').value='';
})
//palestine donate part
document.getElementById('palestine-donate').
addEventListener('click',function(){
    let balanceNumber=getTextFieldById('balance');
    let palestineDonateNumber=getTextFieldById('palestine-donate-balance');
    let palestineDonateAmountNumber=getInputFieldById('palestine-donate-amount');
    if(isNaN(palestineDonateAmountNumber) || palestineDonateAmountNumber<0){
        alert('Invalid Donation Number');
        document.getElementById('palestine-donate-amount').value='';
        return;
    }
    if(balanceNumber>palestineDonateAmountNumber){
        palestineDonateNumber+=palestineDonateAmountNumber;
        document.getElementById('palestine-donate-balance').innerText=palestineDonateNumber;
        balanceNumber-=palestineDonateAmountNumber;
        document.getElementById('balance').innerText=balanceNumber;

        const div=document.createElement('div');
        div.classList.add('border','p-4','rounded-lg');
        let now=new Date();

        div.innerHTML=`
        <h4 class="text-lg font-semibold text-[#111111] mb-2">${palestineDonateAmountNumber} Taka is Donated for Children in Gaza,Palestine</h4>
        <p>${now}</p>
        `;
        document.getElementById('history-section').appendChild(div);
        my_modal_1.showModal();
    }
    else{
        alert('You have not enough money');
    }
    document.getElementById('palestine-donate-amount').value='';
})