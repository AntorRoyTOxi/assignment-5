function press(){
    hideBar('nav-bar');
    hideBar('discount-part');
    hideBar('buy-ticket');
    showLastBar('success-part');
};

 const allButtons = document.getElementsByClassName("allbtn");
   
 let count = 0;
 let seatNumber = 8;
  
 for (const allButton of allButtons) {
    
  allButton.addEventListener("click", function (e) {
    count = count + 1;
    seatNumber = seatNumber - 1;
       if(count<=4){
      
        
    getInnerText("seat-count", count);
    getInnerText("seat-Number", seatNumber);
    
    const seat = e.target.innerText;
    console.log(seat); 
    



    const prizeAndTicket = document.getElementById("prize-and-ticket");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seat;
    li.appendChild(p);
    prizeAndTicket.appendChild(li);
    const economy = document.getElementById("economy");
    const li2 = document.createElement("li");
    li2.innerText = "economy";
    economy.appendChild(li2);
     



    const prize = document.getElementById("prize");
    const li3 = document.createElement("li");
    const list = (li3.innerText = 550);
    prize.appendChild(li3);
    totalCost('total-cost',list);
    grandTotalCost('grand-total', list)
  
     


    allButton.classList.add("bg-[#1DD100]");
       }
    else{ 
         alert('Sorry!! You can only 4 seat selected')
    }




    
    
  }, {once : true}
  );
  
}



     function playNow(){ 
       
        const inputBar=document.getElementById('input');  
        const inputValue=inputBar.value;  
         if(inputValue==='NEW15' ){
            
           let item=0;
        
           const  totalPrize=document.getElementById('total-cost').innerText;   
           const prize=parseInt(totalPrize); 
           const totalAmount=prize+item;  
               const discount=totalAmount*15/100;
           document.getElementById('grand-total').innerText=totalAmount-discount;
          
                
         }  
         else{ 
             if(inputValue==='Couple 20'){
              let  item=0;
                const  totalPrize=document.getElementById('total-cost').innerText;   
                const prize=parseInt(totalPrize); 
                const totalAmount=prize+item;  
                    const discount=totalAmount*20/100;
                document.getElementById('grand-total').innerText=totalAmount-discount;
               
                     
             }
         }
         
         
     };  
      
    
      

 
