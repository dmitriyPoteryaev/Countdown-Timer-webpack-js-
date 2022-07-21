import Show from '../ShowOrHidePage/Show.js'
import Clear from '../ShowOrHidePage/Show.js'
import CheckDate from './CheckDate.js'
import check from '../../../assets/check.png'
import exclamation from '../../../assets/exclamation.png'

function CheckInput(allInput){
    const Month = {
        '01': "Jan",
        '02': "Feb",
        '03': "Mar",
        '04': "Apr",
        '05': "May",
        '06': "Jun",
        '07': "Jul",
        '08': "Aug",
        '09': "Sep",
        '10': "Oct",
        '11': "Nov",
        '12': "Dec"
    };



    const allAttention =[
        document.querySelector(".Attention"),
        document.querySelector(".AttentionTime")];

        const allFig =[
            document.querySelector(".figEve"),
            document.querySelector(".figTime")]


        !allInput[0].value.trim()
        ?
        (allInput[0].style.borderColor = "red",
        allFig[0].style.backgroundColor = "red",
        Show(allAttention[0]), 
        allAttention[0].innerHTML='Введите событие',
        Show(allFig[0]),
        allFig[0].src=exclamation
        )
        :
        (allInput[0].style.borderColor = "green",
        allFig[0].style.backgroundColor = "green",
        Clear(allAttention[0]),
        allAttention[0].innerHTML='',
        Show(allFig[0]),
        allFig[0].src=check)

        CheckDate(allInput[1].value)
        ?
        (allInput[1].style.borderColor = "red",
        allFig[1].style.backgroundColor = "red",
        Show(allFig[1]),
        Show(allAttention[1]), 
        allAttention[1].innerHTML='Введите время',
        allFig[1].src=exclamation)
        :
        (allInput[1].style.borderColor = "green",
        allFig[1].style.backgroundColor = "green",
        Clear(allAttention[1]),
        Show(allFig[1]),
        allAttention[1].innerHTML='',
        allFig[1].src=check)
        

    if(new Date()>=new Date(`${allInput[1].value.slice(0,2)} ${Month[allInput[1].value.slice(3,5)]} ${allInput[1].value.slice(-4)}`)){

        AttentionTime()
    }

    function AttentionTime() {

        Show(allAttention[1])
        allFig[1].style.backgroundColor = "red"
         allFig[1].src=exclamation
        allAttention[1].innerHTML=''
        allInput[1].style.borderColor = "red"
        allAttention[1].innerHTML='Неверный формат ввода данных'
      }
    

}

export default CheckInput