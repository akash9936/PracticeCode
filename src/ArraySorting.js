function sortArray(){
   
    let x=[87,88,10,40,30]
    for(i=0;i<=x.length;i++){
        for(j=0;j<=x.length;j++){
            if(x[j]>x[j+1]){
                let temp=x[j];
                x[j]=x[j+1];
                x[j+1]=temp
            }
        }
    }
    console.log(`Result id ${x}`)
}

sortArray();

//Bubble Sort Algorithm