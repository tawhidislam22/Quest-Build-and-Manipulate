document.getElementById('donate-btn').
addEventListener('click',function(){
    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]','text-[#111111]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]','text-[#111111]');
    document.getElementById('history-btn').classList.add('text-[#11111171]');

})

document.getElementById('history-btn').
addEventListener('click',function(){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donate-btn').classList.add('text-[#11111171]', 'border' ,'border-gray-300');
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]','text-[#111111]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]','text-[#111111]');


})
// .document.getElementById('header').addEventListener('scroll',function(){
//     document.getElementById('nav').classList.remove('');
//     document.getElementById('nav').classList.add('bg-opacity-50');
// })

