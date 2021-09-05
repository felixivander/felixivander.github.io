
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
        }

    