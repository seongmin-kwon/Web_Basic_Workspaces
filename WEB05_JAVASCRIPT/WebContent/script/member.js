   function joinCheck(){
        if(document.frm.id.value == ""){
            alert("아이디는 필수 입력사항 입니다.");
            frm.id.focus();
            return false;
        }
       /*아이디는 4글자 이상이어야합니다.*/
        if(document.frm.id.value.length<4){
            alert("아이디는4글자 이상이어야 합니다.");
            frm.id.focus();
            return false;
        }
       /*비밀번호는 필수 입력 사항입니다.*/
     if(document.frm.pwd.value != document.frm.pwd_check.value){
            alert("비밀번호와 비밀번호 확인이 일치 하지 않습니다.<br>비밀번호 재확인이 필요합니다.");
            frm.pwd.focus();
            return false;
        }
       /*비밀번호와 비밀번호 확인이 일치 하지 않습니다.*/
        if(document.frm.pwd.value != document.frm.pwd_check.value){
            alert("비밀번호와 비밀번호 확인이 일치 하지 않습니다. 비밀번호 재확인이 필요합니다.");
            frm.pwd_check.focus();
            return false;
        }
       /*이름은 반드시 입력해야 합니다.*/
       if(document.frm.name.value == ""){
            alert("이름은  반드시 입력해야 합니다.");
            frm.name.focus();
            return false;
        }
       /*이메일은 반드시 입력해야 합니다.*/
       if(document.frm.email.value == ""){
            alert("이메일은 반드시 입력해야 합니다.");
            frm.email.focus();
            return false;
        }
       return true;
       /*모든 if를 잘 통과 하면 잘 되었다는 것을알리기 위해 return true를 반환해줘야함.*/
       
    }