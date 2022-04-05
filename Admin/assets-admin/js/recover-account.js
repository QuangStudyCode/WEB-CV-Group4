
// check onblur
function CheckOnblurAccountRecover(){
    var AccountRecover=document.getElementById('AccountRecover').value;
    var errorAccountRecover=document.getElementById('errorAccountRecover');
    var Node=document.getElementById('myForm');
    var regex = /^[a-z0-9_-]{3,16}$/;


    if(AccountRecover==''){
        errorAccountRecover.innerHTML='Bạn chưa nhập tài khoản!';
        errorAccountRecover.style.color='red';
        Node.classList.remove('validAccountRecover');
        Node.classList.add('invalidAccountRecover');
    }else if(!regex.test(AccountRecover)){
        errorAccountRecover.innerHTML='Tên Tk phải bắt đầu bằng (a-z) hoặc số (0-9)!';
        errorAccountRecover.style.color='red';
        Node.classList.remove('validAccountRecover');
        Node.classList.add('invalidAccountRecover');
    }else{
        errorAccountRecover.innerHTML='';
        Node.classList.add('validAccountRecover');
        Node.classList.remove('invalidAccountRecover');
    }
}

// check null button

function CheckAP(){
    var input=document.getElementsByTagName('input');
    console.log(input)

    var input0=input[0].value;

    if(input0==''){
        alert('Bạn chưa nhập tài khoản!');
    }else{
        alert('Tài khoản của bạn đã được khôi phục thành công!');
    }

}

