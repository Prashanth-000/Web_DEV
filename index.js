const sub=document.getElementById("sub");
const paypal=document.getElementById("paypal");
const upi=document.getElementById("upi");
const phone=document.getElementById("phonepay");
const subres=document.getElementById("subres");
const payres=document.getElementById("payres");
const submiting=document.getElementById("submited");

submiting.onclick=function(){
    console.log("Submitted")
    if(sub.checked){
        subres.textContent=`Subscription Done!`;
        if(paypal.checked){
            payres.textContent=`You are using PayPal`;
        }
        else if(upi.checked){
            payres.textContent=`You are using UPI`;
        }
        else if(phone.checked){
            payres.textContent=`You are using PhonePe`;
        }
        else{
            payres.textContent=`Select apayment method`;
        }
    }
    else{
        subres.textContent=`You need to subscribe first!`;
        payres.textContent=``;
    }
}

