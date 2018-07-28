// ############
// 入力時間保持 #
// ############

//変数storageにsessionStorageを格納
var storage = localStorage;

//データを保存する
function set() {
    var min_time = document.getElementById("time").value;
    if (min_time > 0){
        // 一旦削除
        storage.clear();

        var user = "ohirune_localuser"
        storage.setItem(user, min_time);
        console.log(min_time);

        window.location.href = 'index2.html';
    }else{
        console.log("not enter")
        document.getElementById("caution").style.display="block";
    }
    // show_result();
}

//保存されているデータをリスト表示する
function show_result() {

    var result = "";
    //ohirune_localuser
    result = storage.getItem("ohirune_localuser");
    //上のループで作成されたテキストを表示する
    return result;
}

target_on = document.getElementById("passon");

// target_on.onclick = function () {
//     show_result();
//     clipboard.writeText(show_result());
// }
