function CheckOnblurName(){
    // check name
    var form=document.getElementById('Myform');
    var Name = document.getElementById("name").value;
    var errorName= document.getElementById('errorName');
    var checkName=/^[^\d+]*[\d+]{0}[^\d+]*$/;

    if(Name==''||Name==null){
        errorName.innerHTML="Tên không được để trống!!!";
        errorName.style.color='red';
        form.classList.remove("validName");
        form.classList.add("invalidName");
    }else if(!checkName.test(Name)){
        errorName.innerHTML="Tên không hợp lệ!!!";
        errorName.style.color='red';
        form.classList.remove("validName");
        form.classList.add("invalidName");
    }else{
        errorName.innerHTML="Tên hợp lệ.";
        errorName.style.color='green';
        form.classList.add("validName");
        form.classList.remove("invalidName");
    }
}

// check mail
function CheckOnblurEmail(){
      // check email
      var form=document.getElementById('Myform');
      var email = document.getElementById('email').value;
      var errorEmail = document.getElementById('errorEmail');
      var checkEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

      if(email==''|| email==null){
          errorEmail.innerHTML='Email không được để trống!!!';
          errorEmail.style.color='red';
          form.classList.add("invalidMail");
          form.classList.remove("validMail");
      }else if(!checkEmail.test(email)){
          errorEmail.innerHTML="Email không hợp lệ!!!";
          errorEmail.style.color='red';
          form.classList.add("invalidMail");
          form.classList.remove("validMail");
      }else{
        errorEmail.innerHTML="Email của bạn hợp lệ.";
        errorEmail.style.color='green';
        form.classList.add("validMail");
        form.classList.remove("invalidMail");
      }
}

// check mess
function CheckOnblurMess(){
    var Mess=document.getElementById('mess').value;
    var errorMess=document.getElementById('errorMess');

    if(Mess.length >150 ||Mess.length<=0){
        errorMess.innerHTML='Tin gửi phải > 0 và < 150 ký tự!!';
        errorMess.style.color='red';
    }else if(Mess=='' || Mess==null){
        errorMess.innerHTML='Tin gửi không được để trống!!';
        errorMess.style.color='red';
    }else{
        errorMess.innerHTML='Tin gửi hợp lệ.';
        errorMess.style.color='green';
    }
}


// function REload form
function Reload(){
   var input = document.getElementsByTagName('input');
    // console.log(input);

    var name=input[0].value;
    var email=input[1].value;
    var mess=input[2].value;

    if(name=='' || email=='' ||mess==''){
        alert('Bạn phải nhập đầy đủ thông tin trước khi gửi');
        location.reload();
    }else{
        alert('Tin của bạn đã được gửi');
        location.reload();
    }
}

