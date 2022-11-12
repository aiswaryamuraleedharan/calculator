function clickbtn(val){
    document.getElementById('outputScreen').value=document.getElementById('outputScreen').value+val
}

function clrscreen(){
    document.getElementById('outputScreen').value=""
}

function equalClick(){
    let text = document.getElementById('outputScreen').value
    let result = eval(text)
    document.getElementById('outputScreen').value=result
}