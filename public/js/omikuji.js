// LIFF
const LIFF_ID = "1655688058-DqWKlg4e";
window.onload = function(){
    initializeLIFF(LIFF_ID)
}

var displayName = "";

function initializeLIFF(liffId){
    liff.init({
        liffId
    })
    .then(() => {
        if(!liff.isInClient() && !liff.isLoggedIn()){
            window.alert("スマホからのみ確認できます");
            //window.location.href = "";
        }else{
            // 
            liff.getProfile()
            .then(profile => {
                displayName = profile.displayName;
                document.getElementsByTagName("h1")[0].textContent = "ようこそ" + displayName + "さん";
            })
            .catch(err => alert(err))
        }
    })
}

function messageFuctory(name, unsei){
    var omikujiMessage = {
        "type": "text",
        "text": name + "さんが" + unsei + "を引きました！"
    }
    return omikujiMessage

}

var unseis = ["大吉", "中吉", "吉", "小吉"];
function getUnsei(){
    var index = Math.floor( Math.random() * unseis.length );
    var unsei = unseis.splice(index, 1)[0];
    return unsei
}

function omikujiFuctory(){
    var unsei = getUnsei();
    return {
        unsei,
        messege: function(name){
            return messageFuctory(name, this.unsei)
        }
    }
}
var omikuji1 = omikujiFuctory();
var omikuji2 = omikujiFuctory();
var omikuji3 = omikujiFuctory();
var omikuji4 = omikujiFuctory();

$(function(){
    $("#omikuji1").on(
        "click", () => {
            var flag = confirm(displayName + "さんが" +omikuji1.unsei + "をひきました！\n友達と共有しますか？")
            if(flag){
                liff.shareTargetPicker([
                    omikuji1.messege(displayName)
                ])
                .catch(function(res) {
                    alert("送信に失敗しました" + res)
                })
            }
        }
    )
})
$(function(){
    $("#omikuji2").on(
        "click", () => {
            var flag = confirm(omikuji2.unsei + "をひきました！\n友達と共有しますか？")
            if(flag){
                liff.shareTargetPicker([
                    omikuji2.messege
                ])
                .catch(err => {
                    alert(err)
                })
            }
        }
    )
})
$(function(){
    $("#omikuji3").on(
        "click", () => {
            var flag = confirm(omikuji3.unsei + "をひきました！\n友達と共有しますか？")
            if(flag){
                liff.shareTargetPicker([
                    omikuji3.messege
                ])
            }
        }
    )
})
$(function(){
    $("#omikuji4").on(
        "click", () => {
            var flag = confirm(omikuji4.unsei + "をひきました！\n友達と共有しますか？")
            if(flag){
                liff.shareTargetPicker([
                    omikuji4.messege
                ])
            }
        }
    )
})