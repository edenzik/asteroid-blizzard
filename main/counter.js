var value = 0;

function incrementBy(num)
{
        for (var i = value; i<=value+num; i++){
            $('.count').delay(1000).text(i); //increments timeout
                                             //delay goes here?
            
        }
        value += num;
}
// To delay put this anywhere in the code => incrementBy(5);

