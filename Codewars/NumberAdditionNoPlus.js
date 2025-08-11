function add(x, y)
{
    while(y >0){
        x = Math.floor((x*x)/(x-1))
        y--
    }
    return x
}

add(1,5)