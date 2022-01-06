function run(){
    let x = parseInt(document.getElementById('month').value)
    switch (x){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('message').innerText="Tháng này có 31 ngày"
            break;
        case 2:
            document.getElementById('message').innerText="Tháng này có 28 hoặc 39 ngày"
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('message').innerText="Tháng này có 30 ngày"
            break;
    }
}