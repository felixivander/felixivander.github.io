
        document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
      });
        function menu(){
            drop='0'
            if (document.getElementById("dropdown").classList.contains('show')){
                var x = 10   
            }
            else {
                var x = 10+document.getElementById("dropdown").clientHeight;    
            }
            document.getElementById("dropdown").classList.toggle("show");
            document.getElementById("mone").classList.toggle("mone");
            document.getElementById("mtwo").classList.toggle("mtwo");
            document.getElementById("mthree").classList.toggle("mthree");
            document.getElementById("toggle").style.top = x.toString()+'px';
            if (window.innerWidth < 991){
                document.getElementById("bott").click()
                $("#bott").trigger('click');
                $("#bott").trigger('touchstart');
            }
        }
        function about(){
            document.getElementById("fpic").classList.toggle("hidepic");
            document.getElementById("ab").classList.toggle("intextfull");
            document.getElementById("abcont").classList.toggle("intextcontfull");
            document.getElementById("ex1").classList.toggle("expand");
            document.getElementById('arrowcont').classList.toggle('arrowref');
        }
        function toggler(x){
            document.getElementById("pic".concat(x)).classList.toggle("hidepic");
            document.getElementById("ab".concat(x)).classList.toggle("intextfull");
            document.getElementById("abcont".concat(x)).classList.toggle("intextcontfull");
            document.getElementById("ex".concat(x)).classList.toggle("expand");
            document.getElementById('arrowcont'.concat(x)).classList.toggle('arrowref');
        }

    