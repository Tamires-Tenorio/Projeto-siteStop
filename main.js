var name=prompt("Qual é o seu nome?")
document.write("Olá ", name,"!")
var confirmation=prompt("Coloque o número correspondente a sua resposta.\n Quer iniciar teste?\n 1.SIM\n 2.NÂO")
if(confirmation=="1")

{
    var quest1 =prompt("Quanto é 2+2?\n A:4 \n B:3")
    var quest2 =prompt("Quanto é 4+4?\n A:8 \n B:6")
    var quest3 =prompt("Quanto é 8+8?\n A:16 \n B:15")
    if(quest1=="A"||quest1=="a")
{
    var correct=document.write("Resposta 1 Certa ")
}
else{ var correct=document.write("Resposta 1 Errada ")
}
if(quest2=="A"||quest2=="a")
{
    var correct=document.write("Resposta 1 Certa ")
}
else{ var correct=document.write("Resposta 1 Errada ")
}
if(quest3=="A"||quest3=="a")
{
    var correct=document.write("Resposta 1 Certa ")
}
else{ var correct=document.write("Resposta 1 Errada ")
}


}








