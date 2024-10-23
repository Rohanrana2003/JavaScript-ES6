/*------------------[CLOSURES]------------------- */

function x() {
    for (var i = 1; i <= 5; i++) {

        function z(a){
            setTimeout(() => {
                console.log(a);
            }, i*1000);
        }
       z(i);

    }
}

x();