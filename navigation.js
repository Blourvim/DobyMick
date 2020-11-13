
      const openNav=()=> {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }

      const closeNav=()=> {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }

      let currentPage = document.getElementById("text-based")

      let swap = (page) =>{
        currentPage.style.display = "none";
        page.style.display = "block";
        currentPage = page;

      };